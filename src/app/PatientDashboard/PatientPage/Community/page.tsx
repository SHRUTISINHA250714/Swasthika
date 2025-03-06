// 'use client';
// import React, { useState, useEffect } from 'react';
// import { 
//   Users, 
//   BookOpen, 
//   Heart, 
//   Calendar, 
//   Smile, 
//   HandHeart as HandHoldingHeart, 
//   UserCircle, 
//   Shield,
//   Trophy,
//   Star,
//   MessageCircle,
//   ThumbsUp,
//   Award,
//   Gift,
//   Sparkles
// } from 'lucide-react';

// function FeatureCard({ icon: Icon, title, description }: { 
//   icon: React.ElementType, 
//   title: string, 
//   description: string 
// }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
//       <div className="flex items-center mb-4">
//         <Icon className="w-8 h-8 text-purple-600 mr-3" />
//         <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//       </div>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// function CommunityBuilderGame() {
//   const [points, setPoints] = useState(0);
//   const [level, setLevel] = useState(1);
//   const [streak, setStreak] = useState(0);
//   const [lastAction, setLastAction] = useState<string | null>(null);
//   const [achievements, setAchievements] = useState<string[]>([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const [dailyActions, setDailyActions] = useState(3);

//   const actions = [
//     {
//       icon: MessageCircle,
//       name: "Share Story",
//       points: 10,
//       description: "Share a personal experience to inspire others"
//     },
//     {
//       icon: Heart,
//       name: "Support Member",
//       points: 15,
//       description: "Offer emotional support to a community member"
//     },
//     {
//       icon: Gift,
//       name: "Share Resource",
//       points: 12,
//       description: "Share a helpful health resource"
//     },
//     {
//       icon: ThumbsUp,
//       name: "Encourage Others",
//       points: 8,
//       description: "Send words of encouragement"
//     }
//   ];

//   const checkAchievements = (newPoints: number) => {
//     const newAchievements = [...achievements];
//     if (newPoints >= 50 && !achievements.includes("Rising Star 🌟")) {
//       newAchievements.push("Rising Star 🌟");
//     }
//     if (streak >= 3 && !achievements.includes("Streak Master ⚡")) {
//       newAchievements.push("Streak Master ⚡");
//     }
//     if (newPoints >= 100 && !achievements.includes("Community Champion 👑")) {
//       newAchievements.push("Community Champion 👑");
//     }
//     setAchievements(newAchievements);
//   };

//   const performAction = (action: typeof actions[0]) => {
//     if (dailyActions <= 0) {
//       setPopupMessage("Come back tomorrow for more actions!");
//       setShowPopup(true);
//       return;
//     }

//     const newPoints = points + action.points;
//     setPoints(newPoints);
//     setDailyActions(prev => prev - 1);

//     // Streak logic
//     if (lastAction !== action.name) {
//       setStreak(prev => prev + 1);
//     }

//     // Level up logic
//     const newLevel = Math.floor(newPoints / 50) + 1;
//     if (newLevel > level) {
//       setPopupMessage(`🎉 Level Up! You're now level ${newLevel}`);
//       setShowPopup(true);
//     }
//     setLevel(newLevel);

//     setLastAction(action.name);
//     checkAchievements(newPoints);

//     // Show action feedback
//     setPopupMessage(`+${action.points} points! ${action.description}`);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//   };

//   return (
//     <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto relative">
//       {/* Stats Bar */}
//       <div className="flex justify-between items-center mb-8 p-4 bg-purple-50 rounded-lg">
//         <div className="flex items-center gap-2">
//           <Trophy className="w-6 h-6 text-purple-600" />
//           <span className="font-bold">{points} Points</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Sparkles className="w-6 h-6 text-purple-600" />
//           <span className="font-bold">Level {level}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Award className="w-6 h-6 text-purple-600" />
//           <span className="font-bold">{streak}x Streak</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <Star className="w-6 h-6 text-purple-600" />
//           <span className="font-bold">{dailyActions} Actions Left</span>
//         </div>
//       </div>

//       {/* Actions Grid */}
//       <div className="grid grid-cols-2 gap-4 mb-8">
//         {actions.map((action, index) => {
//           const Icon = action.icon;
//           return (
//             <button
//               key={index}
//               onClick={() => performAction(action)}
//               className={`p-6 rounded-lg border-2 border-purple-200 hover:border-purple-400 
//                 transition-all duration-300 flex flex-col items-center text-center
//                 ${dailyActions <= 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-1'}`}
//               disabled={dailyActions <= 0}
//             >
//               <Icon className="w-8 h-8 text-purple-600 mb-2" />
//               <h3 className="font-bold mb-2">{action.name}</h3>
//               <p className="text-sm text-gray-600">{action.description}</p>
//               <span className="mt-2 text-purple-600 font-bold">+{action.points} pts</span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Achievements */}
//       {achievements.length > 0 && (
//         <div className="border-t pt-4">
//           <h3 className="font-bold mb-3 text-purple-700">Achievements</h3>
//           <div className="flex flex-wrap gap-2">
//             {achievements.map((achievement, index) => (
//               <span key={index} className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
//                 {achievement}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Popup Notification */}
//       <div
//         className={`fixed top-4 right-4 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${
//           showPopup ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
//         }`}
//       >
//         {popupMessage}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const features = [
//     {
//       icon: Users,
//       title: "Discussion Boards",
//       description: "Join meaningful conversations, share your story, and connect with others who understand your journey."
//     },
//     {
//       icon: BookOpen,
//       title: "Resource Libraries",
//       description: "Access curated articles, research papers, and educational materials to stay informed about your health."
//     },
//     {
//       icon: Heart,
//       title: "Support Groups",
//       description: "Find your community in dedicated spaces for specific conditions and health topics."
//     },
//     {
//       icon: Calendar,
//       title: "Events and Activities",
//       description: "Participate in webinars, workshops, and social events designed to educate and connect."
//     },
//     {
//       icon: Smile,
//       title: "Emotional Support",
//       description: "Experience a safe space where empathy and understanding flow freely among peers."
//     },
//     {
//       icon: HandHoldingHeart,
//       title: "Caregiver Support",
//       description: "Connect with other caregivers, share experiences, and find resources specifically for your needs."
//     },
//     {
//       icon: UserCircle,
//       title: "User Profiles",
//       description: "Create your personal profile and connect privately with other community members."
//     },
//     {
//       icon: Shield,
//       title: "Moderation & Guidelines",
//       description: "Enjoy a respectful, safe environment maintained by active moderation and clear community guidelines."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
//       {/* Hero Section */}
//       <div className="bg-purple-700 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <img 
//             src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=2000"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="container mx-auto px-4 py-16 relative">
//           <div className="max-w-3xl mx-auto text-center">
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 Welcome to Your Health Community
//               </h1>
//               <p className="text-xl text-purple-100 mb-8">
//                 Connect, Share, and Thrive Together in Our Supportive Environment
//               </p>
//               <div className="flex justify-center gap-4">
//                 <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
//                   Join Our Community
//                 </button>
//                 <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors border border-white">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Interactive Game Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Build Your Community Impact</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Make a difference in our community! Share stories, support others, and earn rewards for your positive contributions.
//           </p>
//         </div>
//         <CommunityBuilderGame />
//       </div>

//       {/* Features Grid */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`transform transition-all duration-1000 ${
//                 isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <FeatureCard
//                 icon={feature.icon}
//                 title={feature.title}
//                 description={feature.description}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Community Stats with Animation */}
//       <div className="bg-purple-800 text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
//             <div className={`transform transition-all duration-1000 ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}>
//               <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
//                 <Trophy className="w-8 h-8" />
//                 10K+
//               </div>
//               <div className="text-purple-200">Active Members</div>
//             </div>
//             <div className={`transform transition-all duration-1000 delay-200 ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}>
//               <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
//                 <Users className="w-8 h-8" />
//                 500+
//               </div>
//               <div className="text-purple-200">Support Groups</div>
//             </div>
//             <div className={`transform transition-all duration-1000 delay-400 ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}>
//               <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
//                 <Star className="w-8 h-8" />
//                 50K+
//               </div>
//               <div className="text-purple-200">Helpful Resources</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Vector Illustration Section */}
//       <div className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <img
//                 src="https://raw.githubusercontent.com/undraw/undraw/master/illustrations/svg_exports/community.svg"
//                 alt="Community Illustration"
//                 className="w-full max-w-md mx-auto"
//               />
//             </div>
//             <div className="md:w-1/2 md:pl-12">
//               <h2 className="text-3xl font-bold text-gray-800 mb-6">Join a Thriving Community</h2>
//               <p className="text-gray-600 mb-8">
//                 Be part of a supportive network where everyone understands and supports each other's journey. Share experiences, learn from others, and grow together in a safe and welcoming environment.
//               </p>
//               <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
//                 Get Started Today
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-50 py-8">
//         <div className="container mx-auto px-4 text-center text-gray-600">
//           <p>© 2024 Health Community Platform. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;
// 'use client';
// import { useState } from "react";
// import { Box, Typography, Button, Paper, Card, CardContent } from "@mui/material";
// import DashboardCard from "@/app/PatientDashboard/components/shared/DashboardCard";

// const CommunityForum = () => {
//   const [points, setPoints] = useState(0);
//   const [level, setLevel] = useState(1);
//   const [streak, setStreak] = useState(0);
//   const [achievements, setAchievements] = useState([]);

//   const handleAction = (actionType) => {
//     const pointsAwarded = 10; // Example points per action
//     const newPoints = points + pointsAwarded;

//     // Update points and streak
//     setPoints(newPoints);
//     setStreak(streak + 1);

//     // Handle level progression
//     if (newPoints >= level * 50) {
//       setLevel(level + 1);
//     }

//     // Handle achievements
//     if (newPoints >= 50 && !achievements.includes("Rising Star")) {
//       setAchievements([...achievements, "Rising Star"]);
//     }
//     if (streak >= 7 && !achievements.includes("Streak Master")) {
//       setAchievements([...achievements, "Streak Master"]);
//     }
//     if (newPoints >= 100 && !achievements.includes("Community Champion")) {
//       setAchievements([...achievements, "Community Champion"]);
//     }
//   };

//   return (
//     <DashboardCard title="Patient Community Forum" sx={{ backgroundColor: "#f4f6f8", padding: 3 }}>
//       <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} p={2}>
        
//         {/* Discussion Boards Section */}
//         <Card sx={{ width: "100%", marginBottom: 2 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight={700}>Discussion Boards</Typography>
//             <Typography variant="subtitle1">
//               Share your personal stories, ask questions, and offer support to other members.
//             </Typography>
//             <Button variant="contained" onClick={() => handleAction("discussion")} sx={{ marginTop: 1 }}>
//               Share a Story
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Resource Libraries Section */}
//         <Card sx={{ width: "100%", marginBottom: 2 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight={700}>Resource Libraries</Typography>
//             <Typography variant="subtitle1">
//               Access articles, research, and materials relevant to your health.
//             </Typography>
//             <Button variant="contained" onClick={() => handleAction("resource")} sx={{ marginTop: 1 }}>
//               Share a Resource
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Support Groups Section */}
//         <Card sx={{ width: "100%", marginBottom: 2 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight={700}>Support Groups</Typography>
//             <Typography variant="subtitle1">
//               Connect with others facing similar challenges in dedicated spaces for specific topics.
//             </Typography>
//             <Button variant="contained" onClick={() => handleAction("support")} sx={{ marginTop: 1 }}>
//               Join a Group
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Events and Activities Section */}
//         <Card sx={{ width: "100%", marginBottom: 2 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight={700}>Events and Activities</Typography>
//             <Typography variant="subtitle1">
//               Participate in webinars, workshops, or social events to learn and connect.
//             </Typography>
//             <Button variant="contained" onClick={() => handleAction("event")} sx={{ marginTop: 1 }}>
//               Register for an Event
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Emotional Support Section */}
//         <Card sx={{ width: "100%", marginBottom: 2 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight={700}>Emotional Support</Typography>
//             <Typography variant="subtitle1">
//               Receive empathy and support from others going through similar experiences.
//             </Typography>
//             <Button variant="contained" onClick={() => handleAction("support")} sx={{ marginTop: 1 }}>
//               Send Encouragement
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Caregiver Support Section */}
//         <Card sx={{ width: "100%", marginBottom: 2 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight={700}>Caregiver Support</Typography>
//             <Typography variant="subtitle1">
//               Resources and discussions for caregivers to share experiences and seek advice.
//             </Typography>
//             <Button variant="contained" onClick={() => handleAction("caregiver")} sx={{ marginTop: 1 }}>
//               Join Caregiver Forum
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Points, Streak, and Level Progress */}
//         <Box display="flex" justifyContent="space-around" alignItems="center" width="100%">
//           <Typography variant="h6">Points: {points}</Typography>
//           <Typography variant="h6">Level: {level}</Typography>
//           <Typography variant="h6">Streak: {streak} days</Typography>
//         </Box>

//         {/* Achievements Section */}
//         <Box mt={3} textAlign="center">
//           <Typography variant="h5" fontWeight={700} color="#4caf50">Achievements Unlocked</Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             {achievements.length > 0 ? achievements.join(", ") : "No achievements yet"}
//           </Typography>
//         </Box>

//         {/* Real-time Feedback Section */}
//         <Box mt={3} textAlign="center">
//           <Typography variant="h6">Complete actions to earn more points and unlock achievements!</Typography>
//         </Box>
//       </Box>
//     </DashboardCard>
//   );
// };

// export default CommunityForum;
import { Button, Card, CardContent } from '@mui/material';

const ExampleComponent = () => {
  return (
    <div className="p-4 bg-gray-100">
      <Card className="shadow-lg">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Hello, Tailwind + MUI</h2>
          <Button variant="contained" className="bg-blue-500">Click Me</Button>
        </CardContent>
      </Card>
    </div>
  );
};
export default ExampleComponent;
