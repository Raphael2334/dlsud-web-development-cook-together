import React, { useState, useEffect } from "react";

export default function ChallengeItems() {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await fetch("https://sheetdb.io/api/v1/45kluo1jayxo7"); 
        const data = await res.json();

        const formatted = data.map(item => ({
          id: parseInt(item.id),
          title: item.title,
          author: item.author,
          reward: item.reward,
          difficulty: item.difficulty,
          end: item.end,
          tags: item.tags,
          img: item.img
        }));

        setChallenges(formatted);
      } catch (error) {
        console.error("Error loading challenges:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) return <p>Loading challenges...</p>;

  return (
    <div className="challenge-list grid grid-cols-1 md:grid-cols-3 gap-4">
      {challenges.map(ch => (
        <div
          key={ch.id}
          className="challenge-card border rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={ch.img}
            alt={ch.title}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
          <h3 className="text-lg font-semibold">{ch.title}</h3>
          <p className="text-sm text-gray-600">By {ch.author}</p>
          <p>🏆 Reward: {ch.reward}</p>
          <p>🔥 Difficulty: {ch.difficulty}</p>
          <p>📅 Ends: {ch.end}</p>
          <p>🏷️ Tags: {ch.tags}</p>
        </div>
      ))}
    </div>
  );
}
