"use client";
import { motion } from "framer-motion";
import profilepic from "../../public/assets/profilepic.png"
import Image from "next/image";

export const Hero = () => {
    return(
        <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#0A2463_35%,#3E92CC_55%,#72DDF7_85%)]">
            <div className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2
                            bg-[radial-gradient(closest-side,#000_85%,#3E92CC)] top-[450px] border-[1px] border-[#72DDF7]/30" />
          
            <div className="container relative mx-auto px-4 pt-12 pb-24">
                <div className="flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-8 mt-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 to-transparent rounded-full blur-3xl"></div>
                        <Image
                            src={profilepic}
                            alt="profile pic"
                            className="w-[250px] relative z-10"
                        />
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2x1"
                    >
                        <h1 className="text-6xl md:text-7xl font-bold text-white/80 max-w-lg mx-auto tracking-tighter mb-6">
                            Hi, I am <br/> Emilija <span className="text-blue-300">B.</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                            I am a full-stack developer focusing on creating websites that provides users with best experiences
                        </p>

                        <div className="flex gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 font-bold bg-gradient-to-r from-blue-700 to-blue-500 rounded-full hover:bg-blue-700 transition-colors"
                            >
                                Contact Me
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 border border-blue-400/20 rounded-full font-bold hover:bg-blue-700 transition-colors"
                            >
                                View Work
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <motion.div></motion.div>
            </div>
        </div>
    )
}