
"use client";

import React from "react";
import Image from "next/image";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
        <div className="animate-pulse">
            <Image
                src="/logo.png"
                alt="Loading..."
                width={150}
                height={150}
                priority
            />
        </div>
    </div>
  );
}
