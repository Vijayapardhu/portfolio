"use client";

import React from "react";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--gradient-1)] opacity-20 blur-[100px] animate-blob mix-blend-screen" />
            <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[var(--gradient-2)] opacity-20 blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full bg-[var(--gradient-3)] opacity-20 blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
        </div>
    );
};

export default AnimatedBackground;
