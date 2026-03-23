import { motion } from "framer-motion";

const petals = Array.from({ length: 18 });

export default function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((_, i) => {
        const left = `${(i * 97) % 100}%`;
        const duration = 8 + (i % 5);
        const delay = (i % 6) * 0.7;
        const size = 14 + (i % 4) * 6;
        const emoji = i % 3 === 0 ? "🌼" : i % 3 === 1 ? "💛" : "✨";

        return (
          <motion.div
            key={i}
            className="absolute top-[-10%]"
            style={{
              left,
              fontSize: `${size}px`,
            }}
            initial={{ y: -100, opacity: 0, rotate: 0 }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, -20, 15, -10, 0],
              opacity: [0, 1, 1, 0.7, 0],
              rotate: [0, 8, -8, 10, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}