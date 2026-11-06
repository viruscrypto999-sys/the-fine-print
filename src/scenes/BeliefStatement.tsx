import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { PALETTE, FONTS, easeInOutCubic } from "../theme";

export const BeliefStatement: React.FC = () => {
  const frame = useCurrentFrame();

  const slideUp = interpolate(frame, [0, 12], [100, 0], {
    easing: easeInOutCubic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const underlineWidth = interpolate(frame, [90, 105], [0, 100], {
    easing: easeInOutCubic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.ink, alignItems: "center", justifyContent: "center" }}>
      <div style={{ transform: `translateY(${slideUp}%)`, backgroundColor: PALETTE.paper, padding: "60px 80px", width: "70%", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
        <div style={{ fontFamily: FONTS.mono, fontSize: 40, color: PALETTE.ink, marginBottom: 20 }}>
          "10,000 hours of practice is the threshold for mastery."
        </div>
        <div style={{ fontFamily: FONTS.body, fontSize: 24, color: PALETTE.slate, textAlign: "right" }}>
          — the <span style={{ position: "relative" }}>summary<span style={{ position: "absolute", bottom: -4, left: 0, height: 4, backgroundColor: PALETTE.finePrint, width: `${underlineWidth}%` }} /></span> everyone was given
        </div>
      </div>
    </AbsoluteFill>
  );
};
