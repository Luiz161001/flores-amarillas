import { motion } from "framer-motion";

type Props = {
  onStart: () => void;
};

export default function IntroScreen({ onStart }: Props) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-yellow-50 via-amber-50 to-rose-50 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,80,0.25),_transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl text-center"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-700/80">
          flores amarillas
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-stone-800 md:text-7xl">
          A little story for you 💛
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl">
          I made this tiny world to tell you something special.
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="mt-10 rounded-full bg-stone-900 px-8 py-4 text-base font-medium text-white shadow-lg transition hover:shadow-xl"
        >
          Start the story
        </motion.button>
      </motion.div>
    </section>
  );
}