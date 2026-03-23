import { motion } from "framer-motion";
import type { Mood } from "../data/story";

type Props = {
  mood: Mood;
};

const moodEmoji: Record<Mood, string> = {
  idle: "🙂",
  shy: "☺️",
  happy: "😊",
  excited: "😄",
  love: "🥰",
};

const moodScale: Record<Mood, number> = {
  idle: 1,
  shy: 0.98,
  happy: 1.03,
  excited: 1.06,
  love: 1.08,
};

const moodRotate: Record<Mood, number> = {
  idle: 0,
  shy: -3,
  happy: 2,
  excited: 4,
  love: -2,
};

export default function StoryCharacter({ mood }: Props) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute h-64 w-64 rounded-full bg-yellow-200/40 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative flex h-52 w-52 items-center justify-center rounded-full border border-yellow-100 bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-200 text-7xl shadow-[0_20px_70px_rgba(255,190,60,0.28)] md:h-64 md:w-64 md:text-8xl"
        animate={{
          y: [0, -10, 0],
          rotate: moodRotate[mood],
          scale: moodScale[mood],
        }}
        transition={{
          y: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 0.5,
          },
          scale: {
            duration: 0.5,
          },
        }}
      >
        {moodEmoji[mood]}
      </motion.div>

      <div className="absolute -bottom-5 h-5 w-32 rounded-full bg-black/10 blur-md" />
    </div>
  );
}