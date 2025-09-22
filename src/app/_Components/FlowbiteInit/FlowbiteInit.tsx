"use client";

import { useEffect } from "react";

export default function FlowbiteInit() {
  useEffect(() => {
    import("flowbite"); // dynamically import only in browser
  }, []);

  return null; // no UI, just initialization
}