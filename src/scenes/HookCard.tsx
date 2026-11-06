import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { PALETTE, FONTS, easeInOutCubic } from "../theme";

export const HookCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const barLeft = interpolate(frame, [30, 45, 75, 90], ["-50%", "50%", "50%", "100%"], {
    easing: easeInOutCubic,
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.ink, alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "relative", fontFamily: FONTS.display, fontWeight: 600, fontSize: 96, color: PALETTE.paper, textAlign: "center", lineHeight: 1.1 }}>
        <span style={{ position: "relative", zIndex: 1 }}>The 10,000-hour rule<br />was never a rule.</span>
        <div style={{ position: "absolute", top: "50%", bottom: "-4%", left: barLeft, width: "50%", backgroundColor: PALETTE.finePrint, zIndex: 2 }} />
      </div>
    </AbsoluteFill>
  );
};
