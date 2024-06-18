"use client";
import Image from "next/image";
import { useOthers } from "@liveblocks/react/suspense";

export default function FrameShare() {
  const others = useOthers();
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
}
