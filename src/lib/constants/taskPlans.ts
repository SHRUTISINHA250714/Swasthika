export const taskPlans: Record<string, Record<"mild" | "moderate" | "severe", string[][]>> = {
    depression: {
      mild: [
        ["Make a to-do list", "Complete a focused work session", "Organize workspace"],
        ["Time-block for 30 mins", "Take a structured break", "Track time usage"],
        ["Brain dump tasks", "Work distraction-free", "Avoid procrastination"],
        ["Pomodoro technique", "Complete a priority task", "Limit distractions"],
        ["Plan next week", "Identify energy boosters", "Celebrate progress"],
      ],
      moderate: [
        ["Complete one meaningful task", "Sit outside", "Organize a small area"],
        ["Work for 15 min", "Drink water", "Do something enjoyable"],
        ["Start each day with self-care", "Break tasks into steps", "Reflect weekly"],
      ],
      severe: [
        ["Drink water", "Change clothes", "Sit near sunlight"],
        ["Try a 5-minute task", "Pick a comforting routine", "Text one supportive person"],
        ["Continue self-care at own pace", "Tiny productivity steps"],
      ],
    },
    anxiety: {
      mild: [
        ["Practice deep breathing", "Organize workspace", "Declutter emails"],
        ["Write down worries", "Exercise for 15 minutes", "Limit caffeine"],
        ["Plan your next day", "Try guided meditation", "Track anxious thoughts"],
        ["Use the 5-4-3-2-1 grounding technique", "Stretch for 5 minutes", "Reduce screen time"],
        ["Self-reflection: What makes you feel safe?", "Create a safe space"],
      ],
      moderate: [
        ["Limit social media", "Do a 10-minute mindfulness session"],
        ["Identify triggers", "Journal anxious moments", "Try gratitude listing"],
      ],
      severe: [
        ["Hold something cold in your hand", "Focus on slow breathing"],
        ["Ask for support", "Drink a glass of water"],
        ["Listen to calming music", "Write a comfort letter to yourself"],
      ],
    },
  };
  