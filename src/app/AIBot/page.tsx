
// "use client";
// // import RehabChatbot from "@/components/chatComponent"
// import { useState } from "react";
// import Screening from "@/components/quiz";
// import Chat from "@/components/chatComponent";
// import DetailedAssessment from "@/components/detailedAssessment";
// export default function Home() {
//   const [detectedDiseases, setDetectedDiseases] = useState<string[]>([]);
//   const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
//   const [assessmentData, setAssessmentData] = useState<Record<string, string> | null>(null);
//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {!detectedDiseases.length ? (
//         <Screening onDetectedDiseases={setDetectedDiseases} />
//       ) : !selectedDisease ? (
//         <div>
//           <h2 className="text-xl font-bold">Select Disease for Detailed Assessment</h2>
//           {detectedDiseases.map((disease) => (
//             <button key={disease} className="block p-2 bg-blue-300 my-2" onClick={() => setSelectedDisease(disease)}>
//               {disease}
//             </button>
//           ))}
//         </div>
//       ) : !assessmentData ? (
//         <DetailedAssessment disease={selectedDisease} onComplete={setAssessmentData} />
//       ) : (
//         <Chat disease={selectedDisease} responses={assessmentData} />
//       )}
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import Screening from "@/components/quiz";
// import Chat from "@/components/chatComponent";
// import DetailedAssessment from "@/components/detailedAssessment";

// export default function Home() {
//   const [detectedDiseases, setDetectedDiseases] = useState<string[]>([]);
//   const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
//   const [assessmentData, setAssessmentData] = useState<Record<string, string> | null>(null);
//   const [step, setStep] = useState(0); // Step tracker

//   const goBack = () => {
//     setStep((prev) => {
//       if (prev === 2) {
//         setSelectedDisease(null); // Reset disease selection when going back
//       } else if (prev === 3) {
//         setAssessmentData(null); // Reset assessment data when going back
//       }
//       return Math.max(prev - 1, 0);
//     });
//   };

//   const goForward = () => {
//     if (step === 1 && !selectedDisease) return;
//     if (step === 2 && !assessmentData) return;
//     setStep((prev) => Math.min(prev + 1, 3));
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       {step === 0 && (
//         <Screening onDetectedDiseases={(diseases) => { setDetectedDiseases(diseases); setStep(1); }} />
//       )}
//       {step === 1 && detectedDiseases.length > 0 && !selectedDisease && (
//         <div>
//           <h2 className="text-2xl font-bold mb-4 text-blue-900">Select Disease for Detailed Assessment</h2>
//           {detectedDiseases.map((disease) => (
//             <button key={disease} className="block px-6 py-4 rounded bg-blue-300 my-2" onClick={() => { setSelectedDisease(disease); setStep(2); }}>
//               {disease}
//             </button>
//           ))}
//         </div>
//       )}
//       {step === 2 && selectedDisease && !assessmentData && (
//         <DetailedAssessment disease={selectedDisease} onComplete={(data) => { setAssessmentData(data); setStep(3); }} />
//       )}
//       {step === 3 && selectedDisease && assessmentData && (
//         <Chat disease={selectedDisease} responses={assessmentData} />
//       )}
      
//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-4">
//         {step > 0 && <button className="px-4 py-2 bg-gray-300 rounded" onClick={goBack}>Back</button>}
//         {step < 3 && <button className="px-4 py-2 bg-blue-500 rounded text-white" onClick={goForward}>Forward</button>}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useCallback } from "react";
import Screening from "@/components/quiz";
import Chat from "@/components/chatComponent";
import DetailedAssessment from "@//detailedAssessment";

export default function Home() {
  const [detectedDiseases, setDetectedDiseases] = useState<string[]>([]);
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const [assessmentData, setAssessmentData] = useState<Record<string, string> | null>(null);
  const [step, setStep] = useState<number>(0);

  // Handle going back in the steps
  const goBack = useCallback(() => {
    setStep((prev) => {
      if (prev === 2) {
        setSelectedDisease(null);
      } else if (prev === 3) {
        setAssessmentData(null);
      }
      return Math.max(prev - 1, 0);
    });
  }, []);

  // Handle moving forward in the steps
  const goForward = useCallback(() => {
    if (step === 1 && !selectedDisease) return;
    if (step === 2 && !assessmentData) return;
    setStep((prev) => Math.min(prev + 1, 3));
  }, [step, selectedDisease, assessmentData]);

  // Handle disease detection from Screening component
  const handleDiseaseDetection = useCallback((diseases: string[]) => {
    setDetectedDiseases(diseases);
    setStep(1);
  }, []);

  // Handle disease selection
  const handleDiseaseSelection = useCallback((disease: string) => {
    setSelectedDisease(disease);
    setStep(2);
  }, []);

  // Handle assessment completion
  const handleAssessmentComplete = useCallback((data: Record<string, string>) => {
    setAssessmentData(data);
    setStep(3);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Step 0: Initial Screening */}
      {step === 0 && (
        <Screening onDetectedDiseases={handleDiseaseDetection} />
      )}

      {/* Step 1: Disease Selection */}
      {step === 1 && detectedDiseases.length > 0 && !selectedDisease && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Select Disease for Detailed Assessment
          </h2>
          {detectedDiseases.map((disease) => (
            <button
              key={disease}
              className="block w-full px-6 py-4 rounded bg-blue-300 my-2 hover:bg-blue-400 transition-colors"
              onClick={() => handleDiseaseSelection(disease)}
            >
              {disease}
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Detailed Assessment */}
      {step === 2 && selectedDisease && !assessmentData && (
        <DetailedAssessment
          disease={selectedDisease}
          onComplete={handleAssessmentComplete}
        />
      )}

      {/* Step 3: Chat Interface */}
      {step === 3 && selectedDisease && assessmentData && (
        <Chat
          disease={selectedDisease}
          responses={assessmentData}
        />
      )}

      {/* Navigation Controls */}
      {(step > 0 || step < 3) && (
        <div className="flex justify-between mt-4">
          {step > 0 && (
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
              onClick={goBack}
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              className="px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600 transition-colors disabled:bg-blue-300"
              onClick={goForward}
              disabled={(step === 1 && !selectedDisease) || (step === 2 && !assessmentData)}
            >
              Forward
            </button>
          )}
        </div>
      )}
    </div>
  );
}