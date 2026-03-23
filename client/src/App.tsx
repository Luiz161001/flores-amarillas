import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import StoryScene from "./components/StoryScene";

export default function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <IntroScreen onStart={() => setStarted(true)} />;
  }

  return <StoryScene />;
}