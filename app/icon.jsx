import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #3b82f6 0%, #ec4899 100%)",
        borderRadius: "8px",
        fontSize: 20,
        fontWeight: 900,
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      N
    </div>,
    { ...size },
  );
}
