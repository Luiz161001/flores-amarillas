import { motion, AnimatePresence } from "framer-motion";

type ChatBubbleProps = {
  text: string;
  align?: "left" | "right";
};

export default function ChatBubble({
  text,
  align = "left",
}: ChatBubbleProps) {
  return (
    <div
      className={`w-full max-w-xl ${
        align === "right" ? "ml-auto" : "mr-auto"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -16, scale: 0.98 }}
          transition={{ duration: 0.45 }}
          className="rounded-[28px] border border-white/50 bg-white/75 px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-md"
        >
          <p className="text-lg leading-relaxed text-stone-700 md:text-xl">
            {text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}