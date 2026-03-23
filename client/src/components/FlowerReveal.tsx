import { motion } from "framer-motion";

const flowers = Array.from({ length: 28 });

export default function FlowerReveal() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-yellow-100 via-amber-100 to-yellow-200 px-6">
      <div className="absolute inset-0">
        {flowers.map((_, i) => {
          const left = `${(i * 19) % 100}%`;
          const bottom = `${(i * 13) % 18}%`;
          const delay = (i % 8) * 0.18;
          const size = 2.4 + (i % 4) * 0.45;

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left,
                bottom,
                fontSize: `${size}rem`,
              }}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              🌼
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-900/70">
          for you
        </p>

        <h2 className="text-5xl font-semibold tracking-tight text-yellow-950 md:text-7xl">
          Flores amarillas para ti 💛
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-yellow-900/80 md:text-2xl">
          Because you make my life brighter, softer, and so much more beautiful.
        </p>

        <motion.div
          className="mt-10 text-6xl"
          animate={{ scale: [1, 1.08, 1], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          🌼✨💛
        </motion.div>
      </motion.div>
    </section>
  );
}