import { useState, useEffect } from "react";

export default function useGenerateRandomColor() {
  const generateColor = () => {
    return "#" + Math.random().toString(16).substr(-6);
  };
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(generateColor());
  }, []);
  return [color, generateColor] as const;
}
