import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/colors.css";

const defaultItems = [
  { key: "discover", label: "Discover", to: "/home-recipes", badge: null },
  { key: "challenges", label: "Challenges", to: "/Challenges", badge: "New" },
  { key: "kitchens", label: "Kitchens", to: "/KitchensPage", badge: null },
  { key: "inventory", label: "Inventory", to: "/inventory", badge: null },
];

function AsideComponent({ items = defaultItems, activeKey = "/home-recipes", className = "" }) {
  return (
    <aside className={`app-sidebar aside-card ${className}`}>
      <Nav className="flex-column" as="nav" aria-label="aside navigation">
        {items.map((it) => {
          const isActive = it.to === activeKey;
          return (
            <Nav.Item key={it.key} className="mb-2">
              <Nav.Link
                as={Link}
                to={it.to}
                className={`d-flex justify-content-between align-items-center ${
                  isActive ? "aside-item--active" : "text-ct-muted"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span className={isActive ? "text-ct-ink" : "text-ct-muted"}>{it.label}</span>
                {it.badge ? <small className="badge-ct">{it.badge}</small> : null}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </aside>
  );
}

export default AsideComponent;