"use client";
import { useState } from "react";

export default function Chat({ disease, responses }: { disease: string; responses: unknown }) {
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    setLoading(true);
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ disease, responses }),
    });
    const data = await res.json();
    setAiResponse(data.response);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">AI Consultation</h2>
      <button className="bg-purple-500 text-white px-4 py-2 mt-4" onClick={handleChat} disabled={loading}>
        {loading ? "Consulting AI..." : "Get Advice"}
      </button>
      {aiResponse && (
        <div className="border p-4 mt-4 bg-gray-100">
          <h3 className="font-bold">AI Response:</h3>
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
}
