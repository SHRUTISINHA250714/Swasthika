"use client"
import { useState, useEffect } from "react";

export default function DetailedAssessment({ disease, onComplete }: { disease: string; onComplete: (responses: unknown) => void }) {
  const [questions, setQuestions] = useState<string[]>([]);
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/detailed_assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disease }),
      });
      const data = await res.json();
      setQuestions(data.questions);
      console.log(questions);
      setLoading(false);
    }
    fetchQuestions();
  }, [disease]);

  const handleSubmit = () => {
    onComplete({ disease, responses });
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">{disease} Assessment</h2>
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} className="mb-2">
            <label className="block">{q}</label>
            <textarea
              className="border p-1 w-full"
              onChange={(e) => setResponses({ ...responses, [q]: e.target.value })}
            />
          </div>
        ))
      )}
      <button className="bg-green-500 text-white px-4 py-2 mt-4" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
