'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Utensils, AlertTriangle, CheckCircle, Info, ArrowRight } from 'lucide-react';

interface PredictionResultProps {
  prediction: {
    disease: string;
    confidence: number;
    description: string;
    recommendations: string[];
  };
  onViewLifestyle: () => void;
  onViewDiet: () => void;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ prediction, onViewLifestyle, onViewDiet }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-emerald-500';
    if (confidence >= 70) return 'text-blue-500';
    if (confidence >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getConfidenceText = (confidence: number) => {
    if (confidence >= 90) return 'Very High';
    if (confidence >= 70) return 'High';
    if (confidence >= 50) return 'Moderate';
    return 'Low';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 py-6 px-8">
          <h2 className="text-2xl font-bold text-white">AI Prediction Results</h2>
          <p className="text-purple-50">Based on your symptoms and health information</p>
        </div>
        
        <div className="p-8">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between bg-indigo-50 p-6 rounded-xl mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <CheckCircle size={32} className="text-indigo-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{prediction.disease}</h3>
                <p className="text-gray-600">Predicted Condition</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1 flex items-center">
                <span className={getConfidenceColor(prediction.confidence)}>{prediction.confidence}%</span>
              </div>
              <p className="text-gray-600">
                <span className={`font-medium ${getConfidenceColor(prediction.confidence)}`}>
                  {getConfidenceText(prediction.confidence)}
                </span> Confidence
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start mb-3">
              <Info size={20} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-gray-800">About this Condition</h3>
            </div>
            <p className="text-gray-700 leading-relaxed pl-7">{prediction.description}</p>
          </motion.div>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-start mb-3">
              <CheckCircle size={20} className="text-indigo-500 mr-2 mt-1 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-gray-800">Key Recommendations</h3>
            </div>
            <ul className="pl-7 space-y-2">
              {prediction.recommendations.map((rec, index) => (
                <motion.li 
                  key={index} 
                  className="text-gray-700 flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle size={16} className="text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                  {rec}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl border border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <AlertTriangle size={20} className="text-amber-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Important Note</h3>
            </div>
            <p className="text-gray-700 mb-4">
              This prediction is based on the symptoms and information you provided. It is not a medical diagnosis. 
              Please consult with a healthcare professional for proper diagnosis and treatment.
            </p>
            <p className="text-gray-700">
              If you experience severe symptoms such as difficulty breathing, chest pain, or loss of consciousness, 
              seek immediate medical attention.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={onViewLifestyle}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Activity size={20} className="mr-2" />
              View Lifestyle Recommendations
              <ArrowRight size={16} className="ml-2" />
            </motion.button>
            
            <motion.button
              onClick={onViewDiet}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Utensils size={20} className="mr-2" />
              View Diet Recommendations
              <ArrowRight size={16} className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PredictionResult;