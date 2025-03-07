"use client";
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Diet() {
  const [diet, setDiet] = useState<string[]>([]);
  const searchParams = useSearchParams(); 

  const disease = searchParams.get("disease") || ""; 
  const responsesString = searchParams.get("responses");

  let responses = {};
  try {
    responses = responsesString ? JSON.parse(decodeURIComponent(responsesString)) : {};
  } catch (error) {
    console.error("Error parsing responses:", error);
  }

  useEffect(() => {
    const fetchDiet = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/diet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ disease, responses }),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log("API Response:", data);

        // Ensure diet_plan is an array before setting state
        setDiet(data.diet_plan);
      } catch (error) {
        console.error("Error fetching diet plan:", error);
      }
    };

    if (disease) fetchDiet(); // Prevents API call if disease is empty
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Diet Chart</h2>
     
        <p>{diet ? diet : "No diet plan available."}</p>
      
    </div>
  );
}
