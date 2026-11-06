import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { PALETTE, FONTS, easeInOutCubic } from "../theme";

export const FinePrintClose: React.FC = () => {
  const frame = useCurrentFrame();

  const type2 = "It was never a law of success.".substring(0, Math.max(0, Math.floor((frame - 24) / 0.432)));
  const type3 = "The rule was the assumption.".substring(0, Math.max(0, Math.floor((frame - 96) / 0.432)));

  const barY = interpolate(frame, [168, 183], [100, 0], {
    easing: easeInOutCubic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.ink, padding: 120, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontFamily: FONTS.display, fontWeight: 600, fontSize: 64, color: PALETTE.paper, marginBottom: 40 }}>
        The study was about violinists.
      </div>
      <div style={{ fontFamily: FONTS.mono, fontSize: 32, color: PALETTE.paper, marginBottom: 20 }}>
        {type2}
      </div>
      <div style={{ fontFamily: FONTS.mono, fontSize: 32, color: PALETTE.paper, position: "relative" }}>
        <span style={{ position: "relative", zIndex: 1 }}>{type3}</span>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: PALETTE.finePrint, transform: `translateY(${barY}%)`, zIndex: 2 }} />
      </div>
    </AbsoluteFill>
  );
};
