'use client';
import React, { useState, useRef } from 'react';
import { MessageCircle, Stethoscope, Send, Paperclip } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'doctor' | 'patient';
  timestamp: Date;
  attachment?: File;
}

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI medical assistant. How can I help you today?",
      sender: 'doctor',
      timestamp: new Date()
    },
    {
      id: '2',
      text: "I've been having headaches for the past few days.",
      sender: 'patient',
      timestamp: new Date()
    },
    {
      id: '3',
      text: "I understand. Could you tell me more about these headaches? When did they start, and how would you describe the pain?",
      sender: 'doctor',
      timestamp: new Date()
    }
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Doctor's avatar URL from Unsplash - professional medical photo
  const doctorAvatar = "https://static.vecteezy.com/system/resources/previews/047/544/597/non_2x/medical-robot-assistant-is-ready-to-help-concept-of-medicine-of-the-future-personalized-healthcare-ai-enabled-diagnostics-and-telemedicine-innovations-vector.jpg";
  
  // Patient's avatar - generic profile photo
  const patientAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop";

  const handleSendMessage = () => {
    if (message.trim() || fileInputRef.current?.files?.length) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: 'patient',
        timestamp: new Date(),
        attachment: fileInputRef.current?.files?.[0]
      };

      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Simulate AI doctor response after a short delay
      setTimeout(() => {
        const doctorResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for providing that information. Let me analyze it and provide my assessment.",
          sender: 'doctor',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, doctorResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMessage(prev => prev + `[Attached file: ${file.name}]`);
    }
  };

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="ml-2 font-bold text-2xl">Swasthika AI Chat </div>
          </div>
          
          <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
            <div className="h-20 w-20 rounded-full border overflow-hidden">
              <img src={doctorAvatar} alt="AI Doctor" className="h-full w-full object-cover" />
            </div>
            <div className="text-sm font-semibold mt-2">Dr. AI Assistant</div>
            <div className="text-xs text-gray-500">Virtual Healthcare Provider</div>
            <div className="flex flex-row items-center mt-3">
              <div className="flex flex-col justify-center h-4 w-8 bg-green-500 rounded-full">
                <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div className="leading-none ml-1 text-xs">Online</div>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center justify-between text-xs">
              <span className="font-bold">Consultation History</span>
              <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">3</span>
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2">
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                <div className="flex items-center justify-center h-8 w-8 bg-blue-200 rounded-full">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div className="ml-2 text-sm font-semibold">Previous Consultation</div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messages.map((msg) => (
                    <div key={msg.id} 
                      className={`${
                        msg.sender === 'doctor' 
                          ? 'col-start-1 col-end-8' 
                          : 'col-start-6 col-end-13'
                      } p-3 rounded-lg`}>
                      <div className={`flex ${
                        msg.sender === 'doctor' 
                          ? 'flex-row' 
                          : 'items-center justify-start flex-row-reverse'
                      }`}>
                        <div className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={msg.sender === 'doctor' ? doctorAvatar : patientAvatar} 
                            alt={msg.sender === 'doctor' ? 'Doctor' : 'Patient'} 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <div className={`relative ${
                          msg.sender === 'doctor' ? 'ml-3' : 'mr-3'
                        } text-sm ${
                          msg.sender === 'doctor' ? 'bg-white' : 'bg-indigo-100'
                        } py-2 px-4 shadow rounded-xl`}>
                          <div>{msg.text}</div>
                          {msg.attachment && (
                            <div className="mt-2 text-xs text-gray-500">
                              Attached: {msg.attachment.name}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button 
                  onClick={handleFileClick}
                  className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx"
                />
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message here..."
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  
                </div>
              </div>
              <div className="ml-4">
                <button 
                  onClick={handleSendMessage}
                  className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                  <span>Send</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;



// 'use client';
// import React, { useState, useRef } from 'react';
// import { MessageCircle, Stethoscope, Send, Paperclip } from 'lucide-react';

// interface Message {
//   id: string;
//   text: string;
//   sender: 'doctor' | 'patient';
//   timestamp: Date;
// }

// const Chat = () => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState<Message[]>([{
//     id: '1',
//     text: "Hello! I'm your AI medical assistant. Let's begin your assessment. Do you have any symptoms? (Yes/No)",
//     sender: 'doctor',
//     timestamp: new Date()
//   }]);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const doctorAvatar = "https://static.vecteezy.com/system/resources/previews/047/544/597/non_2x/medical-robot-assistant-is-ready-to-help-concept-of-medicine-of-the-future-personalized-healthcare-ai-enabled-diagnostics-and-telemedicine-innovations-vector.jpg";
//   const patientAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop";

//   const handleSendMessage = () => {
//     if (!message.trim()) return;
    
//     const newMessage: Message = {
//       id: Date.now().toString(),
//       text: message,
//       sender: 'patient',
//       timestamp: new Date()
//     };

//     setMessages([...messages, newMessage]);
//     setMessage('');

//     setTimeout(() => generateBotResponse(message), 1000);
//   };

//   const generateBotResponse = (userInput: string) => {
//     let botResponse = "Could you provide more details?";
//     if (/yes/i.test(userInput)) {
//       botResponse = "What symptoms are you experiencing?";
//     } else if (/no/i.test(userInput)) {
//       botResponse = "Alright, do you want a general health checkup?";
//     } else if (/headache|fever|cough/i.test(userInput)) {
//       botResponse = "I see. How severe is your condition on a scale of 1 to 10?";
//     }

//     const doctorMessage: Message = {
//       id: (Date.now() + 1).toString(),
//       text: botResponse,
//       sender: 'doctor',
//       timestamp: new Date()
//     };
//     setMessages(prev => [...prev, doctorMessage]);
//   };

//   return (
//     <div className="flex h-screen antialiased text-gray-800">
//       <div className="flex flex-row h-full w-full overflow-x-hidden">
//         <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
//           <div className="flex flex-row items-center justify-center h-12 w-full">
//             <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
//               <Stethoscope className="w-6 h-6" />
//             </div>
//             <div className="ml-2 font-bold text-2xl">Swasthika AI Chat</div>
//           </div>
//         </div>
//         <div className="flex flex-col flex-auto h-full p-6">
//           <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
//             <div className="flex flex-col h-full overflow-x-auto mb-4">
//               <div className="grid grid-cols-12 gap-y-2">
//                 {messages.map((msg) => (
//                   <div key={msg.id} className={`p-3 rounded-lg ${msg.sender === 'doctor' ? 'col-start-1 col-end-8' : 'col-start-6 col-end-13'}`}> 
//                     <div className={`flex ${msg.sender === 'doctor' ? 'flex-row' : 'flex-row-reverse'}`}> 
//                       <img src={msg.sender === 'doctor' ? doctorAvatar : patientAvatar} className="h-10 w-10 rounded-full" />
//                       <div className={`relative ml-3 text-sm ${msg.sender === 'doctor' ? 'bg-white' : 'bg-indigo-100'} py-2 px-4 shadow rounded-xl`}> 
//                         {msg.text}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
//               <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message..." className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
//               <button onClick={handleSendMessage} className="ml-4 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1">
//                 <Send className="w-4 h-4 ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
