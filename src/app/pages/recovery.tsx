"use client";
import { useState, useEffect } from "react";

export default function Recovery() {
  const [recovery, setRecovery] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecovery = async () => {
      const res = await fetch("http://127.0.0.1:8000/recovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disease: "Anxiety", responses: {} }) // Change disease dynamically
      });

      const data = await res.json();
      setRecovery(data.recovery);
    };
    fetchRecovery();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Recovery Suggestions</h2>
      <ul className="list-disc ml-4">
        {recovery.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
