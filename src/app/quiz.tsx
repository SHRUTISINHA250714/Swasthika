"use client";
import { useState, useEffect } from "react";

export default function Screening({ onDetectedDiseases }: { onDetectedDiseases: (diseases: string[]) => void }) {
  const [questions, setQuestions] = useState<{ [key: string]: string }>({});
  const [responses, setResponses] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
        try {
            const res = await fetch("http://127.0.0.1:8000/screening-questions",);
            const data = await res.json();
                        
            if (data) {
              setQuestions(data);
              
            } else {    
              setQuestions({});
            }
            
          } catch (error) {
            console.error("Error fetching screening questions:", error);
            setQuestions({});
          }
          finally{
            setLoading(false)
          }
    }
    fetchQuestions();
  }, []);

  const handleSubmit = async () => {
    const res = await fetch("http://127.0.0.1:8000/screening", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ responses }),
    });
    const data = await res.json();
    onDetectedDiseases(data.diseases);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Mental Health Screening</h2>
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        questions && Object.keys(questions).length > 0 ? (
            Object.entries(questions).map(([key, question]) => (
              <div key={key} className="mb-2">
                <label className="block">{question}</label>
                <select
                  className="border p-1"
                  onChange={(e) => setResponses({ ...responses, [key]: e.target.value })}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            ))
          ) : (
            <p>No questions available.</p>
          )
      )}
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : "Submit"}
      </button>
    </div>
  );
}
