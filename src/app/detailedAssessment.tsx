"use client";
import { useState, useEffect } from "react";

export default function DetailedAssessment({ 
  disease, 
  onComplete 
}: { 
  disease: string; 
  onComplete: (responses: Record<string, string>) => void; 
}) {
  const [questions, setQuestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      setError(null); // Reset error before new fetch
      try {
        const res = await fetch("http://127.0.0.1:8000/detailed_assessment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disease,responses: {} }),
        });

        if (!res.ok) {
          const errorText = await res.text(); // Get error message from API
          throw new Error(`Error ${res.status}: ${errorText}`);
        }

        const data = await res.json();
        setQuestions(data.questions || []);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to load questions.");
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [disease]);

  const handleSubmit = () => {
    if (Object.keys(responses).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    onComplete(responses);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">{disease} Assessment</h2>

      {loading && <p>Loading questions...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && questions.map((q, index) => (
        <div key={index} className="mb-2">
          <label className="block">{q}</label>
          <textarea
            className="border p-1 w-full"
            value={responses[q] || ""}
            onChange={(e) => setResponses({ ...responses, [q]: e.target.value })}
          />
        </div>
      ))}

      <button 
        className="bg-green-500 text-white px-4 py-2 mt-4 disabled:opacity-50"
        onClick={handleSubmit}
        disabled={loading}
      >
        Submit
      </button>
    </div>
  );
}
