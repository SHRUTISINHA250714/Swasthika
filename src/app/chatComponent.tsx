
'use client';
import { useState, useEffect, useRef } from 'react';
import { Send, Stethoscope } from 'lucide-react';
import Link from 'next/link';

const botAvatar = "https://static.vecteezy.com/system/resources/previews/047/544/597/non_2x/medical-robot-assistant-is-ready-to-help-concept-of-medicine-of-the-future-personalized-healthcare-ai-enabled-diagnostics-and-telemedicine-innovations-vector.jpg";
const userAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop";

export default function Chat({ disease, responses }: any) {
  const [messages, setMessages] = useState([
    { id: '1', text: `Hello! Let's discuss ${disease}. How can I assist you?`, sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleChat = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: input, sender: 'user' }]);
    
    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disease, responses, chat_history: messages })
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { id: Date.now().toString(), text: data.response, sender: 'bot' }]);
    } catch (error) {
      console.error("Chat Request Failed:", error);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (

<div className="flex w-full lg:w-[90%] h-[80vh] max-w-9xl antialiased text-gray-800">
      <div className="flex flex-col w-full lg:w-[80%] flex-auto p-4">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-3">
          <div className="flex flex-row items-center justify-center h-12 w-full mb-2">
            <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="ml-2 font-bold text-blue-700 text-3xl">Swasthika AI Chat</div>
          </div>
          <div className="flex flex-col  max-h-[60vh] overflow-y-auto mb-2">
            <div className="grid grid-cols-4 gap-y-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3 rounded-lg ${
                    msg.sender === "bot" ? "col-start-1 col-end-8" : "col-start-6 col-end-13"
                  }`}
                >
                  <div
                    className={`flex ${
                      msg.sender === "bot" ? "flex-row" : "flex-row-reverse"
                    } items-start gap-2`}
                  >
                    <img
                      src={msg.sender === "bot" ? botAvatar : userAvatar}
                      className="h-10 w-10 rounded-full"
                    />
                    <div
                      className={`relative ml-3 text-xl block max-w-[100%] ${
                        msg.sender === "bot" ? "bg-white" : "bg-indigo-100"
                      } py-2 px-4 shadow rounded-xl`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>
          <div className=" justify-center items-center flex items-center space-x-2">
            <input
              type="text"
              className="w-[80%] p-2 border rounded"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response..."
              onKeyDown={(e) => e.key === "Enter" && handleChat()}
            />
            <button onClick={handleChat} disabled={loading}>
              {loading ? "Thinking..." : <Send className="w-6 h-6 text-blue-500" />}
            </button>
          </div>
          <div className="mt-2 flex gap-2 justify-center">
            <Link
              href={`/pages/diet?disease=${encodeURIComponent(
                disease
              )}&responses=${encodeURIComponent(JSON.stringify(responses))}`}
            >
              <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                View Diet Chart
              </button>
            </Link>
            <Link href="/pages/recovery">
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                Recovery Suggestions
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
