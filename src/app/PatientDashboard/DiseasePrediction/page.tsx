// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Activity, Home, Utensils, CheckCircle, ArrowRight } from 'lucide-react';
// import WelcomePage from './components/WelcomePage';
// import SymptomChecker from './components/SymptomChecker';
// import PredictionResult from './components/PredictionResult';
// import LifestyleRecommendations from './components/LifestyleRecommendations';
// import DietPlan from './components/DietPlan';
// import PatientInfoForm from './components/PatientInfoForm';

// function App() {
//   const [currentPage, setCurrentPage] = useState('welcome');
//   const [patientInfo, setPatientInfo] = useState({
//     age: '',
//     gender: '',
//     bloodPressure: '',
//     sugarLevel: '',
//     allergies: '',
//     existingConditions: '',
//   });
//   const [symptoms, setSymptoms] = useState<string[]>([]);
//   const [prediction, setPrediction] = useState({
//     disease: '',
//     confidence: 0,
//     description: '',
//     recommendations: [],
//   });

//   const handlePatientInfoSubmit = (info: any) => {
//     setPatientInfo(info);
//     setCurrentPage('symptoms');
//   };

//   const handleSymptomSubmit = (selectedSymptoms: string[], additionalInfo: any) => {
//     setSymptoms(selectedSymptoms);
    
//     // Simulate AI prediction (in a real app, this would call an API)
//     const mockPredictions = [
//       {
//         disease: 'Common Cold',
//         confidence: 85,
//         description: 'A viral infectious disease of the upper respiratory tract that primarily affects the nose.',
//         recommendations: ['Rest', 'Stay hydrated', 'Take over-the-counter cold medications if needed']
//       },
//       {
//         disease: 'Seasonal Allergies',
//         confidence: 92,
//         description: 'An allergic reaction to pollen from trees, grasses, or weeds, or to airborne mold spores.',
//         recommendations: ['Avoid allergens', 'Use air purifiers', 'Consider antihistamines']
//       },
//       {
//         disease: 'Migraine',
//         confidence: 78,
//         description: 'A primary headache disorder characterized by recurrent headaches that are moderate to severe.',
//         recommendations: ['Rest in a dark, quiet room', 'Stay hydrated', 'Manage stress levels']
//       }
//     ];
    
//     // Simple mock logic to select a prediction based on symptoms
//     let selectedPrediction;
//     if (selectedSymptoms.includes('Runny nose') || selectedSymptoms.includes('Cough')) {
//       selectedPrediction = mockPredictions[0];
//     } else if (selectedSymptoms.includes('Sneezing') || selectedSymptoms.includes('Itchy eyes')) {
//       selectedPrediction = mockPredictions[1];
//     } else {
//       selectedPrediction = mockPredictions[2];
//     }
    
//     setPrediction(selectedPrediction);
//     setCurrentPage('prediction');
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'welcome':
//         return <WelcomePage onGetStarted={() => setCurrentPage('patientInfo')} />;
//       case 'patientInfo':
//         return <PatientInfoForm onSubmit={handlePatientInfoSubmit} />;
//       case 'symptoms':
//         return <SymptomChecker onSubmit={handleSymptomSubmit} />;
//       case 'prediction':
//         return <PredictionResult 
//           prediction={prediction} 
//           onViewLifestyle={() => setCurrentPage('lifestyle')} 
//           onViewDiet={() => setCurrentPage('diet')} 
//         />;
//       case 'lifestyle':
//         return <LifestyleRecommendations 
//           prediction={prediction} 
//           patientInfo={patientInfo} 
//           onBack={() => setCurrentPage('prediction')} 
//           onNext={() => setCurrentPage('diet')} 
//         />;
//       case 'diet':
//         return <DietPlan 
//           prediction={prediction} 
//           patientInfo={patientInfo} 
//           onBack={() => setCurrentPage('lifestyle')} 
//         />;
//       default:
//         return <WelcomePage onGetStarted={() => setCurrentPage('patientInfo')} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <CheckCircle className="text-emerald-500" size={24} />
//             <h1 className="text-xl font-bold text-gray-800">HealthPredict AI</h1>
//           </div>
//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <button 
//                   onClick={() => setCurrentPage('welcome')}
//                   className={`flex items-center space-x-1 ${currentPage === 'welcome' ? 'text-emerald-500 font-medium' : 'text-gray-600 hover:text-emerald-500'}`}
//                 >
//                   <Home size={18} />
//                   <span>Home</span>
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => setCurrentPage('symptoms')}
//                   className={`flex items-center space-x-1 ${currentPage === 'symptoms' ? 'text-emerald-500 font-medium' : 'text-gray-600 hover:text-emerald-500'}`}
//                 >
//                   <CheckCircle size={18} />
//                   <span>Symptoms</span>
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => currentPage !== 'welcome' && currentPage !== 'patientInfo' && currentPage !== 'symptoms' && setCurrentPage('lifestyle')}
//                   className={`flex items-center space-x-1 ${currentPage === 'lifestyle' ? 'text-emerald-500 font-medium' : 'text-gray-600 hover:text-emerald-500'}`}
//                 >
//                   <Activity size={18} />
//                   <span>Lifestyle</span>
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => currentPage !== 'welcome' && currentPage !== 'patientInfo' && currentPage !== 'symptoms' && setCurrentPage('diet')}
//                   className={`flex items-center space-x-1 ${currentPage === 'diet' ? 'text-emerald-500 font-medium' : 'text-gray-600 hover:text-emerald-500'}`}
//                 >
//                   <Utensils size={18} />
//                   <span>Diet</span>
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
      
//       <main className="container mx-auto px-4 py-8">
//         <motion.div
//           key={currentPage}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//         >
//           {renderPage()}
//         </motion.div>
//       </main>
      
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-6 md:mb-0">
//               <div className="flex items-center space-x-2 mb-4">
//                 <CheckCircle size={24} />
//                 <h2 className="text-xl font-bold">HealthPredict AI</h2>
//               </div>
//               <p className="text-gray-400 max-w-md">
//                 Advanced AI-powered health prediction and personalized recommendations for a healthier lifestyle.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//                 <ul className="space-y-2">
//                   <li><button onClick={() => setCurrentPage('welcome')} className="text-gray-400 hover:text-white">Home</button></li>
//                   <li><button onClick={() => setCurrentPage('symptoms')} className="text-gray-400 hover:text-white">Symptom Checker</button></li>
//                   <li><button className="text-gray-400 hover:text-white">About Us</button></li>
//                   <li><button className="text-gray-400 hover:text-white">Contact</button></li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold mb-4">Legal</h3>
//                 <ul className="space-y-2">
//                   <li><button className="text-gray-400 hover:text-white">Privacy Policy</button></li>
//                   <li><button className="text-gray-400 hover:text-white">Terms of Service</button></li>
//                   <li><button className="text-gray-400 hover:text-white">Disclaimer</button></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//             <p>© {new Date().getFullYear()} HealthPredict AI. All rights reserved.</p>
//             <p className="mt-2 text-sm">Disclaimer: This tool is for informational purposes only and is not a substitute for professional medical advice.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Activity, Home, Utensils, CheckCircle, ArrowRight } from 'lucide-react';
import WelcomePage from './components/WelcomePage';
import SymptomChecker from './components/SymptomChecker';
import PredictionResult from './components/PredictionResult';
import LifestyleRecommendations from './components/LifestyleRecommendations';
import DietPlan from './components/DietPlan';
import PatientInfoForm from './components/PatientInfoForm';


function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [patientInfo, setPatientInfo] = useState({
    age: '',
    gender: '',
    bloodPressure: '',
    sugarLevel: '',
    allergies: '',
    existingConditions: '',
  });
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [prediction, setPrediction] = useState<{ disease: string; confidence: number; description: string; recommendations: string[] }>({
    disease: '',
    confidence: 0,
    description: '',
    recommendations: [],
  });

  const handlePatientInfoSubmit = (info: any) => {
    setPatientInfo(info);
    setCurrentPage('symptoms');
  };

  const handleSymptomSubmit = (selectedSymptoms: string[], additionalInfo: any) => {
    setSymptoms(selectedSymptoms);
    
    // Simulate AI prediction (in a real app, this would call an API)
    const mockPredictions = [
      {
        disease: 'Common Cold',
        confidence: 85,
        description: 'A viral infectious disease of the upper respiratory tract that primarily affects the nose.',
        recommendations: ['Rest', 'Stay hydrated', 'Take over-the-counter cold medications if needed']
      },
      {
        disease: 'Seasonal Allergies',
        confidence: 92,
        description: 'An allergic reaction to pollen from trees, grasses, or weeds, or to airborne mold spores.',
        recommendations: ['Avoid allergens', 'Use air purifiers', 'Consider antihistamines']
      },
      {
        disease: 'Migraine',
        confidence: 78,
        description: 'A primary headache disorder characterized by recurrent headaches that are moderate to severe.',
        recommendations: ['Rest in a dark, quiet room', 'Stay hydrated', 'Manage stress levels']
      }
    ];
    
    // Simple mock logic to select a prediction based on symptoms
    let selectedPrediction;
    if (selectedSymptoms.includes('Runny nose') || selectedSymptoms.includes('Cough')) {
      selectedPrediction = mockPredictions[0];
    } else if (selectedSymptoms.includes('Sneezing') || selectedSymptoms.includes('Itchy eyes')) {
      selectedPrediction = mockPredictions[1];
    } else {
      selectedPrediction = mockPredictions[2];
    }
    
    setPrediction(selectedPrediction);
    setCurrentPage('prediction');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onGetStarted={() => setCurrentPage('patientInfo')} />;
      case 'patientInfo':
        return <PatientInfoForm onSubmit={handlePatientInfoSubmit} />;
      case 'symptoms':
        return <SymptomChecker onSubmit={handleSymptomSubmit} />;
      case 'prediction':
        return <PredictionResult 
          prediction={prediction} 
          onViewLifestyle={() => setCurrentPage('lifestyle')} 
          onViewDiet={() => setCurrentPage('diet')} 
        />;
      case 'lifestyle':
        return <LifestyleRecommendations 
          prediction={prediction} 
          patientInfo={patientInfo} 
          onBack={() => setCurrentPage('prediction')} 
          onNext={() => setCurrentPage('diet')} 
        />;
      case 'diet':
        return <DietPlan 
          prediction={prediction} 
          patientInfo={patientInfo} 
          onBack={() => setCurrentPage('lifestyle')} 
        />;
      default:
        return <WelcomePage onGetStarted={() => setCurrentPage('patientInfo')} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50">
   
      {/* <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-emerald-500" size={24} />
            <h1 className="text-xl font-bold text-gray-800">HealthPredict AI</h1>
          </div>
        </div>
      </header> */}
      
      <main className="container mx-auto px-4 py-4">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </main>
      </div>
  );
}

export default App;
