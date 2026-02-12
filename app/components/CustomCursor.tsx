"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const nekoElRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // State Refs (to avoid re-renders during animation loop)
  const posRef = useRef({
    nekoX: 32,
    nekoY: 32,
    mouseX: 0,
    mouseY: 0,
    followerX: 0,
    followerY: 0,
    frameCount: 0,
    idleTime: 0,
    idleAnimation: null as string | null,
    idleAnimationFrame: 0,
    lastFrameTimestamp: 0,
  });

  const SPRITE_SETS: { [key: string]: number[][] } = {
    // ... (Keep existing sprite sets)
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0], [-6, 0], [-7, 0],
    ],
    scratchWallN: [
      [0, 0], [0, -1],
    ],
    scratchWallS: [
      [-7, -1], [-6, -2],
    ],
    scratchWallE: [
      [-2, -2], [-2, -3],
    ],
    scratchWallW: [
      [-4, 0], [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0], [-2, -1],
    ],
    N: [
      [-1, -2], [-1, -3],
    ],
    NE: [
      [0, -2], [0, -3],
    ],
    E: [
      [-3, 0], [-3, -1],
    ],
    SE: [
      [-5, -1], [-5, -2],
    ],
    S: [
      [-6, -3], [-7, -2],
    ],
    SW: [
      [-5, -3], [-6, -1],
    ],
    W: [
      [-4, -2], [-4, -3],
    ],
    NW: [
      [-1, 0], [-1, -1],
    ],
  };

  const NEKO_SPEED = 10;

  useEffect(() => {
    setMounted(true);
    
    // Initial Position Center Screen
    posRef.current.nekoX = window.innerWidth / 2;
    posRef.current.nekoY = window.innerHeight / 2;
    posRef.current.mouseX = window.innerWidth / 2;
    posRef.current.mouseY = window.innerHeight / 2;
    posRef.current.followerX = window.innerWidth / 2;
    posRef.current.followerY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.mouseX = e.clientX;
      posRef.current.mouseY = e.clientY;
      
      // Update Main Cursor Dot Immediately
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Helper to set sprite
    const setSprite = (name: string, frame: number) => {
        const sprite = SPRITE_SETS[name][frame % SPRITE_SETS[name].length];
        if (nekoElRef.current) {
            nekoElRef.current.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
        }
    };

    const resetIdleAnimation = () => {
        posRef.current.idleAnimation = null;
        posRef.current.idleAnimationFrame = 0;
    };

    const idle = () => {
        posRef.current.idleTime += 1;

        // every ~ 20 seconds
        if (
            posRef.current.idleTime > 10 &&
            Math.floor(Math.random() * 200) == 0 &&
            posRef.current.idleAnimation == null
        ) {
            let availableIdleAnimations = ["sleeping", "scratchSelf"];
            if (posRef.current.nekoX < 32) {
                availableIdleAnimations.push("scratchWallW");
            }
            if (posRef.current.nekoY < 32) {
                availableIdleAnimations.push("scratchWallN");
            }
            if (posRef.current.nekoX > window.innerWidth - 32) {
                availableIdleAnimations.push("scratchWallE");
            }
            if (posRef.current.nekoY > window.innerHeight - 32) {
                availableIdleAnimations.push("scratchWallS");
            }
            
            posRef.current.idleAnimation = 
                availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
        }

        switch (posRef.current.idleAnimation) {
            case "sleeping":
                if (posRef.current.idleAnimationFrame < 8) {
                    setSprite("tired", 0);
                    break;
                }
                setSprite("sleeping", Math.floor(posRef.current.idleAnimationFrame / 4));
                if (posRef.current.idleAnimationFrame > 192) {
                    resetIdleAnimation();
                }
                break;
            case "scratchWallN":
            case "scratchWallS":
            case "scratchWallE":
            case "scratchWallW":
            case "scratchSelf":
                setSprite(posRef.current.idleAnimation, posRef.current.idleAnimationFrame);
                if (posRef.current.idleAnimationFrame > 9) {
                    resetIdleAnimation();
                }
                break;
            default:
                setSprite("idle", 0);
                return;
        }
        posRef.current.idleAnimationFrame += 1;
    };

    const frame = () => {
        const state = posRef.current;
        state.frameCount += 1;
        const diffX = state.nekoX - state.mouseX;
        const diffY = state.nekoY - state.mouseY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < NEKO_SPEED || distance < 48) {
            idle();
            return;
        }

        state.idleAnimation = null;
        state.idleAnimationFrame = 0;

        if (state.idleTime > 1) {
            setSprite("alert", 0);
            // count down after being alerted before moving
            state.idleTime = Math.min(state.idleTime, 7);
            state.idleTime -= 1;
            return;
        }

        let direction = "";
        direction = diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";
        setSprite(direction, state.frameCount);

        state.nekoX -= (diffX / distance) * NEKO_SPEED;
        state.nekoY -= (diffY / distance) * NEKO_SPEED;

        state.nekoX = Math.min(Math.max(16, state.nekoX), window.innerWidth - 16);
        state.nekoY = Math.min(Math.max(16, state.nekoY), window.innerHeight - 16);

        if (nekoElRef.current) {
            nekoElRef.current.style.left = `${state.nekoX - 16}px`;
            nekoElRef.current.style.top = `${state.nekoY - 16}px`;
        }
    };

    const animateLoop = (timestamp: number) => {
        // Update Cursor Follower (Smooth Lerp) - Running every frame (60fps+)
        if (cursorFollowerRef.current) {
            posRef.current.followerX += (posRef.current.mouseX - posRef.current.followerX) * 0.1;
            posRef.current.followerY += (posRef.current.mouseY - posRef.current.followerY) * 0.1;
            cursorFollowerRef.current.style.transform = `translate3d(${posRef.current.followerX}px, ${posRef.current.followerY}px, 0)`;
        }

        // ONEKO UPDATE (Throttled to 100ms / 10fps)
        if (!posRef.current.lastFrameTimestamp) {
            posRef.current.lastFrameTimestamp = timestamp;
        }
        if (timestamp - posRef.current.lastFrameTimestamp > 100) {
            posRef.current.lastFrameTimestamp = timestamp;
            frame();
        }
        rafRef.current = requestAnimationFrame(animateLoop);
    };

    rafRef.current = requestAnimationFrame(animateLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Don't render on server or touch devices
  if (!mounted || (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches)) {
     return null;
  }

  return createPortal(
    <>
      {/* 1. Main Cursor Dot (White) */}
      <div 
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 bg-white rounded-full mix-blend-difference z-[100000]"
        style={{
            width: "8px",
            height: "8px",
            marginTop: "-4px",
            marginLeft: "-4px",
        }}
      />
      
      {/* 2. Cursor Follower (Ring) */}
      <div
        ref={cursorFollowerRef}
        className="pointer-events-none fixed top-0 left-0 border border-white/50 rounded-full z-[99999]"
        style={{
            width: "24px",
            height: "24px",
            marginTop: "-12px",
            marginLeft: "-12px",
            transition: "transform 0.1s linear", // Smooth catchup done via JS lerp, but css transition adds silkiness
        }}
      />

      {/* 3. Oneko Pet */}
      <div
        ref={nekoElRef}
        id="oneko"
        aria-hidden="true"
        style={{
            width: "32px",
            height: "32px",
            position: "fixed",
            pointerEvents: "none",
            imageRendering: "pixelated",
            zIndex: 99998, // Behind cursor
            backgroundImage: "url('/oneko.gif')",
            left: "50%",
            top: "50%",
            backgroundPosition: "-32px -32px",
        }}
      />
    </>,
    document.body
  );
}
