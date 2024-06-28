import CursorSVG from "@/public/assets/CursorSVG";
import React from "react";

type CursorProps = {
  key: number;
  color: string;
  posX: number;
  posY: number;
  message?: string;
};

function Cursor({ key, color, posX, posY, message }: CursorProps) {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0"
      style={{ transform: `translate(${posX}px, ${posY}px)` }}
    >
      <CursorSVG color={color} />

      {message && (
        <div
          className={`absolute left-2 top-5 px-4 py-2 text-sm leading-relaxed z-10 w-60 text-white`}
          onKeyUp={(e) => e.stopPropagation()}
          style={{
            borderRadius: 20,
            backgroundColor: color,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Cursor;
