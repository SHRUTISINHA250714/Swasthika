"use client";
import { useState } from "react";

export default function Chat({ 
  disease, 
  responses 
}: { 
  disease: string; 
  responses: Record<string, string>; 
}) {
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChat = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disease, responses }),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      setAiResponse(data.response);
    } catch (error) {
      console.error("AI Chat Request Failed:", error);
      setAiResponse("Failed to get AI response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-blue-900 font-bold">AI Consultation</h2>
      <button 
        className="bg-purple-500  rounded text-white px-4 py-2 mt-4 disabled:opacity-50"
        onClick={handleChat} 
        disabled={loading}
      >
        {loading ? "Consulting AI..." : "Get Advice"}
      </button>

      {aiResponse && (
        <div className="border p-4 mt-4 bg-gray-100 rounded-lg">
          <h3 className="font-bold text-purple-600">AI Response:</h3>
          <p className="text-gray-700 mt-2">{aiResponse}</p>
        </div>
      )}
    </div>
  );
}
