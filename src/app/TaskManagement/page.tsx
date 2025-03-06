'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Activity {
  id: number;
  title: string;
  description: string;
  status: "pending" | "completed" | "skipped"|string;
  hasTaken: boolean;
}

const defaultActivities: Activity[] = [
  {
    id: 1,
    title: "Morning Walk",
    description: "Take a 30-minute brisk walk to start your day fresh.",
    status: "pending",
    hasTaken: false,
  },
  {
    id: 2,
    title: "Healthy Breakfast",
    description: "Eat a nutritious breakfast with fruits and proteins.",
    status: "pending",
    hasTaken: false,
  },
  {
    id: 3,
    title: "Read a Book",
    description: "Spend 20 minutes reading a book of your choice.",
    status: "pending",
    hasTaken: false,
  },
  {
    id: 4,
    title: "Meditation",
    description: "Practice 10 minutes of mindfulness meditation.",
    status: "pending",
    hasTaken: false,
  },
  {
    id: 5,
    title: "Plan the Day",
    description: "Set your priorities and plan your tasks for the day.",
    status: "pending",
    hasTaken: false,
  },
];

const GROUP_SIZE = 2;

const TaskManager = () => {
  const [activities, setActivities] = useState<Activity[]>(defaultActivities);
  const [loading, setLoading] = useState(true);
  // currentGroup indicates how many sequential groups (of 2 cards each) are unlocked.
  const [currentGroup, setCurrentGroup] = useState(1);

  // visibleCount defines the number of unlocked (unblurred) cards.
  const visibleCount = Math.min(currentGroup * GROUP_SIZE, activities.length);

  useEffect(() => {
    fetch("/api/activities")
      .then((res) => res.json())
      .then((data) => {
        // If additional activities come from the API, ensure they follow the same schema.
        const newActivities = data.map((act: any) => ({
          ...act,
          status: "pending",
          hasTaken: false,
        }));
        setActivities([...defaultActivities, ...newActivities]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Checks if all tasks in the current unlocked group are no longer pending.
  const checkAndUnlockNextGroup = (updatedActivities: Activity[]) => {
    const startIndex = (currentGroup - 1) * GROUP_SIZE;
    const groupTasks = updatedActivities.slice(startIndex, startIndex + GROUP_SIZE);
    if (
      groupTasks.length > 0 &&
      groupTasks.every((task) => task.status !== "pending") &&
      currentGroup * GROUP_SIZE < updatedActivities.length
    ) {
      setCurrentGroup((prev) => prev + 1);
    }
  };

  // This handler marks an activity as "taken" when the user clicks the "Take the Activity Now" button.
  const handleTakeActivity = (id: number) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id ? { ...activity, hasTaken: true } : activity
      )
    );
  };

  // Marks the activity as "completed". Only enabled if the activity has been taken.
  const handleCompletion = (id: number) => {
    setActivities((prev) => {
      const updated = prev.map((activity) =>
        activity.id === id ? { ...activity, status: "completed" } : activity
      );
      checkAndUnlockNextGroup(updated);
      return updated;
    });
  };

  // Marks the activity as "skipped" (formerly "missed").
  const handleMissed = (id: number) => {
    setActivities((prev) => {
      const updated = prev.map((activity) =>
        activity.id === id ? { ...activity, status: "skipped" } : activity
      );
      checkAndUnlockNextGroup(updated);
      return updated;
    });
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading activities...</p>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">
        Task Manager
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((activity, index) => {
          // Cards with index less than visibleCount are unlocked.
          const isUnlocked = index < visibleCount;
          const cardClasses = isUnlocked
            ? activity.status === "completed"
              ? "bg-green-200 border-green-400"
              : activity.status === "skipped"
              ? "bg-red-200 border-red-400"
              : "bg-blue-100 border-blue-300"
            : "bg-gray-200 border-gray-300";

          return (
            <div key={activity.id} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`p-8 border rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[250px] ${cardClasses} ${!isUnlocked ? "filter blur-sm" : ""}`}
              >
                <h2 className="text-2xl font-semibold text-gray-900">
                  {activity.title}
                </h2>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <span
                    className={`text-xl  font-bold ${
                      activity.status === "completed"
                        ? "text-green-700"
                        : activity.status === "skipped"
                        ? "text-red-700"
                        : "text-blue-700"
                    }`}
                  >
                    {activity.status === "completed"
                      ? "Completed"
                      : activity.status === "skipped"
                      ? "Skipped"
                      : "Pending"}
                  </span>
                <div className="flex items-center mt-4 justify-start">
                 
                  {isUnlocked && (
                    <div className="flex gap-2 justify-center items-center">
                      <Button
                        onClick={() => handleCompletion(activity.id)}
                        disabled={activity.status !== "pending" || !activity.hasTaken}
                        className="bg-green-400 text-white semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105 disabled:opacity-80"
                      >
                        Done
                      </Button>
                      <Button
                        onClick={() => handleMissed(activity.id)}
                        disabled={activity.status !== "pending"}
                        className="bg-red-400 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105 disabled:opacity-80"
                      >
                        Skip
                      </Button>
                      <Button
                        onClick={() => handleTakeActivity(activity.id)}
                        disabled={activity.hasTaken || activity.status !== "pending"}
                        className="bg-blue-400 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105 disabled:opacity-80"
                      >
                        Take the Activity Now
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
              {/* Locked cards get a lock overlay */}
              {!isUnlocked && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-4xl text-gray-600">🔒</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskManager;
