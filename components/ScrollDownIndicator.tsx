"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDownIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
        >
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">Scroll</span>
            <div className="relative flex h-12 w-7 justify-center rounded-full border-2 border-white/20 p-1 backdrop-blur-sm">
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="h-2 w-1 rounded-full bg-white"
                />
            </div>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
            >
                <ChevronDown className="h-4 w-4 text-white/40" />
            </motion.div>
        </motion.div>
    );
}
