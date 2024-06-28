import React from "react";
import { LiveCursorProps } from "@/types/type";
import Cursor from "./Cursor";
import { COLORS } from "@/constants";

function LiveCursors({ others }: LiveCursorProps) {
  if (!others || others.length === 0) {
    return null;
  }

  return (
    <div>
      {others.map(({ connectionId, presence }) => {
        if (!presence?.cursor) {
          return null;
        }

        return (
          <Cursor
            key={connectionId}
            color={COLORS[connectionId % COLORS.length]}
            posX={presence.cursor.x}
            posY={presence.cursor.y}
            message={presence.message}
          />
        );
      })}
    </div>
  );
}

export default LiveCursors;
