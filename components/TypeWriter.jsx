"use client";
import { TypeAnimation } from "react-type-animation";

export default function TypeWriter() {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        "Frontend-Focused Full Stack Developer...",
        1000,
        "Building scalable e-commerce platforms...",
        1000,
        "Leading frontend teams to ship faster...",
        1000,
        "React - Vue - Next.js - TypeScript - GraphQL...",
        1000,
        "AI-assisted engineering with Codex Pro...",
        1000,
      ]}
      wrapper="span"
      repeat={Infinity}
    />
  );
}
