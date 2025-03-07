"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';

export default function Diet() {
  const [diet, setDiet] = useState<string[]>([]);
  const [searchParams] = useSearchParams();

  const disease = searchParams.get("disease") || "Unknown";
  const responses = searchParams.get("responses") ? JSON.parse(decodeURIComponent(searchParams.get("responses")!)) : {};

  useEffect(() => {
    const fetchDiet = async () => {
      const res = await fetch("http://127.0.0.1:8000/diet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disease, responses}) 
      });

      const data = await res.json();
      setDiet(data.diet_plan);
    };
    fetchDiet();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Diet Chart</h2>
      <ul className="list-disc ml-4">
        {diet.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
