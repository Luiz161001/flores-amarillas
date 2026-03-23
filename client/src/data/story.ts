export type Mood = "idle" | "shy" | "happy" | "excited" | "love";

export type StoryStep = {
  id: number;
  text: string;
  mood: Mood;
  bgClass: string;
  align?: "left" | "right";
};

export const storySteps: StoryStep[] = [
  {
    id: 0,
    text: "Hi meu amor... I made this little story just for you 💛",
    mood: "idle",
    bgClass: "from-amber-50 via-yellow-50 to-orange-100",
    align: "left",
  },
  {
    id: 1,
    text: "It all started when someone very special came into my life.",
    mood: "shy",
    bgClass: "from-yellow-50 via-rose-50 to-amber-100",
    align: "right",
  },
  {
    id: 2,
    text: "And little by little, you became my favorite person, my favorite smile, my favorite everything.",
    mood: "happy",
    bgClass: "from-rose-50 via-yellow-50 to-pink-100",
    align: "left",
  },
  {
    id: 3,
    text: "Every moment with you feels warmer, lighter, and more beautiful.",
    mood: "excited",
    bgClass: "from-orange-50 via-yellow-100 to-rose-100",
    align: "right",
  },
  {
    id: 4,
    text: "So today, I wanted to give you something simple... but made with all my love.",
    mood: "love",
    bgClass: "from-yellow-100 via-amber-50 to-pink-100",
    align: "left",
  },
  {
    id: 5,
    text: "Before the surprise, just remember this: I love you so much 🌼",
    mood: "love",
    bgClass: "from-yellow-50 via-orange-50 to-yellow-200",
    align: "right",
  },
];