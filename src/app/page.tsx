"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./components/ui/landing-background";
import Image from "next/image";

export default function Home() {
  return (
    <AuroraBackground>
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4">
                
            <Image
                    className="align-middle"
                    src="/black_pearl.png"
                    alt="Black Pearl Logo"
                    width={500}
                    height={50}
                    priority/>
            <div className="text-3xl md:text-4xl font-bold dark:text-white text-center">
                Coming Soon...
            </div>
        </motion.div>
    </AuroraBackground>
  );
}

{/* <main className="flex flex-col justify-center gap-8 row-start-2 items-center">
                    

                    <h1 className="text-4xl text-white font-bold ">Coming Soon ....</h1>

                </main> */}

    //             <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        

    // </div>