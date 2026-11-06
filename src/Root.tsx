import React from "react";
import { Composition } from "remotion";
import { Sample020 } from "./Sample020";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Sample020"
      component={Sample020}
      durationInFrames={480}
      fps={24}
      width={1920}
      height={1080}
    />
  );
};
