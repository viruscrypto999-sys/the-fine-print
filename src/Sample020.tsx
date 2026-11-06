import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { HookCard } from "./scenes/HookCard";
import { BeliefStatement } from "./scenes/BeliefStatement";
import { FinePrintClose } from "./scenes/FinePrintClose";

export const Sample020: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={96}>
        <HookCard />
      </Sequence>
      <Sequence from={96} durationInFrames={144}>
        <BeliefStatement />
      </Sequence>
      <Sequence from={240} durationInFrames={240}>
        <FinePrintClose />
      </Sequence>
    </AbsoluteFill>
  );
};
