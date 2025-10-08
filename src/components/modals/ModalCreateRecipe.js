import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import apiLinks from '../../constants/api.js';
import { generateUniqueId } from '../../hooks/uuidHelper.js';
import { useAuth } from '../../hooks/useAuth.js';

/**
 * ModalCreateRecipe
 * - show / onHide control modal visibility (this component should only be used as a popup/modal)
 * - uses theme styles from src/styles/colors.css (class btn-ct-primary, modal-ct etc.)
 * - generates a unique id via uuidHelper and preserves logged in user via useAuth
 *
 * Note: replace the Cloudinary placeholders if you want client-side image upload.
 */
export default function ModalCreateRecipe({ show, onHide, onCreated }) {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [values, setValues] = useState({
    description: '',
    origin: '',
    preparationTime: '',
    servingSize: '',
    tags: '',
    isPublic: true,
    expReward: 0,
    goldReward: 0,
    gemReward: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleFile = (e) => {
    setFile(e.target.files && e.target.files[0] ? e.target.files[0] : null);
  };

  // Simple Cloudinary unsigned upload helper — replace cloudName / preset or swap for server upload.
  async function uploadImageToCloudinary(file) {
    if (!file) return null;
    const cloudName = 'YOUR_CLOUD_NAME';
    const unsignedPreset = 'YOUR_UNSIGNED_PRESET';
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', unsignedPreset);
    const res = await fetch(url, { method: 'POST', body: fd });
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`Image upload failed: ${res.status} ${txt}`);
    }
    const json = await res.json();
    return json.secure_url || json.url || null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // basic validation
      if (!values.description.trim()) {
        alert('Please provide a description.');
        setLoading(false);
        return;
      }

      // 1) generate a unique id for this recipe (uses uuidHelper)
      const id = await generateUniqueId(apiLinks.recipes, { idField: 'id', retries: 5, check: true });

      // 2) upload image if any and get public URL
      let coverImageUrl = '';
      if (file) {
        try {
          coverImageUrl = await uploadImageToCloudinary(file) || '';
        } catch (imgErr) {
          // continue but warn
          console.warn('Image upload failed, continuing without cover image:', imgErr);
        }
      }

      // 3) build row matching sheet header names
      const row = {
        id,
        coverImage: coverImageUrl,
        description: String(values.description || ''),
        origin: String(values.origin || ''),
        preparationTime: String(values.preparationTime || ''),
        servingSize: String(values.servingSize || ''),
        tags: String(values.tags || ''),
        isPublic: values.isPublic ? 'true' : 'false',
        expReward: String(Number(values.expReward) || 0),
        goldReward: String(Number(values.goldReward) || 0),
        gemReward: String(Number(values.gemReward) || 0),
        // optionally store who created it (if your sheet has this column)
        createdBy: user?.id ?? ''
      };

      // 4) post to SheetDB
      const payload = { data: [row] };
      const res = await fetch(apiLinks.recipes, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        throw new Error(`SheetDB insert failed: ${res.status} ${txt}`);
      }

      // success: notify parent and close modal
      if (typeof onCreated === 'function') onCreated(row);
      onHide();
    } catch (err) {
      alert('Failed to create recipe: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered className="modal-ct">
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton style={{ borderBottom: '1px solid var(--ct-border)' }}>
          <Modal.Title className="text-ct-ink">Create recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label className="text-ct-muted">Cover image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handleFile} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="text-ct-muted">Description</Form.Label>
            <Form.Control name="description" value={values.description} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="text-ct-muted">Origin</Form.Label>
            <Form.Control name="origin" value={values.origin} onChange={handleChange} />
          </Form.Group>

          <div className="d-flex gap-2">
            <Form.Group className="mb-2 flex-fill">
              <Form.Label className="text-ct-muted">Preparation time</Form.Label>
              <Form.Control name="preparationTime" value={values.preparationTime} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-2" style={{ width: 140 }}>
              <Form.Label className="text-ct-muted">Serving size</Form.Label>
              <Form.Control name="servingSize" value={values.servingSize} onChange={handleChange} />
            </Form.Group>
          </div>

          <Form.Group className="mb-2">
            <Form.Label className="text-ct-muted">Tags (comma separated)</Form.Label>
            <Form.Control name="tags" value={values.tags} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Check type="checkbox" label="Public" name="isPublic" checked={values.isPublic} onChange={handleChange} />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" className="btn-ct-primary" disabled={loading} style={{ borderColor: 'var(--ct-primary)' }}>
            {loading ? 'Saving…' : 'Create'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}