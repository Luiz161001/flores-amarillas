import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ChatBubble from "./ChatBubble";
import StoryCharacter from "./StoryCharacter";
import FloatingPetals from "./FloatingPetals";
import FlowerReveal from "./FlowerReveal";
import { storySteps } from "../data/story";

export default function StoryScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalStoryScroll = 4200;
  const progress = Math.min(scrollY / totalStoryScroll, 1);

  const getActiveStepIndex = (progress: number) => {
    if (progress < 0.16) return 0;
    if (progress < 0.32) return 1;
    if (progress < 0.5) return 2;
    if (progress < 0.68) return 3;
    if (progress < 0.84) return 4;
    return 5;
  };

  const activeIndex = getActiveStepIndex(progress);
  const activeStep = storySteps[activeIndex];

  const fadeStart = 0.93;
  const fadeEnd = 0.98;

  const fadeStory =
    progress <= fadeStart
      ? 1
      : progress >= fadeEnd
      ? 0
      : 1 - (progress - fadeStart) / (fadeEnd - fadeStart);

  const showEnding = progress >= 0.93;

  return (
    <main
      className={`relative min-h-screen bg-gradient-to-b ${activeStep.bgClass} text-stone-800 transition-all duration-700`}
    >
      <FloatingPetals />

      <section className="relative z-10" style={{ height: "5000px" }}>
        <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-6">
          <motion.div
            animate={{
              opacity: fadeStory,
              scale: 0.98 + fadeStory * 0.02,
              filter: `blur(${(1 - fadeStory) * 8}px)`,
            }}
            transition={{ duration: 0.3 }}
            className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2"
          >
            <div className="order-2 flex justify-center md:order-1">
              <StoryCharacter mood={activeStep.mood} />
            </div>

            <div className="order-1 md:order-2">
              <div className="mb-6">
                <div className="mb-3 text-sm uppercase tracking-[0.28em] text-amber-700/70">
                  our little story
                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-white/40">
                  <motion.div
                    className="h-full rounded-full bg-amber-400"
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ duration: 0.25 }}
                  />
                </div>
              </div>

              <ChatBubble text={activeStep.text} align={activeStep.align} />

              <motion.p
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm text-stone-500"
              >
                Scroll down slowly ↓
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {showEnding && <FlowerReveal />}
    </main>
  );
}