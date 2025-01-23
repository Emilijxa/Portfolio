"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import aws from "@/public/assets/aws.svg"
import codecademy from "@/public/assets/codecademy.svg"
import codepen from "@/public/assets/codepen.svg"
import discord from "@/public/assets/discord.svg"
import docker from "@/public/assets/docker.svg"
import dotnet from "@/public/assets/dotnet.svg"
import figma from "@/public/assets/figma.svg"
import github from "@/public/assets/github.svg"
import nextdotjs from "@/public/assets/nextdotjs.svg"
import nodedotjs from "@/public/assets/nodedotjs.svg"
import npm from "@/public/assets/npm.svg"

const images = [
    { src: aws, alt: "aws" },
    { src: codecademy, alt: "codeacademy" },
    { src: codepen, alt: "codepen" },
    { src: discord, alt: "discord" },
    { src: docker, alt: "docker" },
    { src: dotnet, alt: "dotnet" },
    { src: figma, alt: "figma" },
    { src: github, alt: "github" },
    { src: nextdotjs, alt: "nextdotjs" },
    { src: nodedotjs, alt: "nodedotjs" },
    { src: npm, alt: "npm" },
    { src: aws, alt: "aws" },
    { src: codecademy, alt: "codeacademy" },
    { src: codepen, alt: "codepen" },
    { src: discord, alt: "discord" },
    { src: docker, alt: "docker" },
    { src: dotnet, alt: "dotnet" },
    { src: figma, alt: "figma" },
    { src: github, alt: "github" },
    { src: nextdotjs, alt: "nextdotjs" },
    { src: nodedotjs, alt: "nodedotjs" },
    { src: npm, alt: "npm" },
    { src: aws, alt: "aws" },
    { src: codecademy, alt: "codeacademy" },
    { src: codepen, alt: "codepen" },
    { src: discord, alt: "discord" },
    { src: docker, alt: "docker" },
    { src: dotnet, alt: "dotnet" },
    { src: figma, alt: "figma" },
    { src: github, alt: "github" },
    { src: nextdotjs, alt: "nextdotjs" },
    { src: nodedotjs, alt: "nodedotjs" },
    { src: npm, alt: "npm" },
]


export const LogoAnimation = () => {
    return(
        <div className="py-6 my-24 bg-blue-300/10 opacity-80 glass">
            <div className="container mx-auto">
                <div className="py-1.5 overflow-hidden
                                        [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: '-50%',
                        }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        {images.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    height={50}
                                    width={50}
                                    className="invert brightness-200 opacity-80 hover:brightness-400 hover:opacity-100 transform hover:scale-150 transition-all"                                />
                                
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
