import { loadFont as loadFraunces } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadPlexMono } from "@remotion/google-fonts/IBMPlexMono";

const fraunces = loadFraunces("normal", { weights: ["400", "600"], subsets: ["latin"] });
const inter = loadInter("normal", { weights: ["400", "500"], subsets: ["latin"] });
const plexMono = loadPlexMono("normal", { weights: ["400"], subsets: ["latin"] });

export const PALETTE = {
  ink: "#0E1116",
  paper: "#F2EDE4",
  finePrint: "#C8322B",
  gold: "#B8925A",
  slate: "#3A4049",
};

export const FONTS = {
  display: fraunces.fontFamily,
  body: inter.fontFamily,
  mono: plexMono.fontFamily,
};

export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
