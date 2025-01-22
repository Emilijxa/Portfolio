/* eslint-disable react/no-unescaped-entities */
import { Progress } from "@/components/ui/progress"
import project1 from "../../public/assets/proj5.png"
import project2 from "../../public/assets/proj6.png"
import Image from "next/image"


export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">About <span className="text-blue-300">Me</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">01. Background</h3>
                    <p className="text-white/50 mb-6">A dedicated Junior Software Developer, I
                    transitioned from a background in sales and marketing, bringing excellent communication, teamwork,
                    and mentorship skills. During my political
                    studies, I became fascinated by technology and its potential to make a positive global impact. Always
                    eager to learn and adapt, I am fluent in Lithuanian, Spanish, English, and moderate Russian, and I find
                    parallels between learning new languages and mastering programming. With a problem-solving mindset
                    and a natural curiosity, I thrive in fast-paced, innovative environments, where my ADHD allows me to
                    embrace variety and continuous learning.</p>

                    <div className="rounded-lg p-4 mb-4 border border-white/20">
                        <code className="text-blue-200/50">
                         const skills = [<br/>
                            &nbsp;&nbsp;'Javascript',<br/>
                            &nbsp;&nbsp;'React',<br/>
                            &nbsp;&nbsp;'Node.js',<br/>
                            &nbsp;&nbsp;'Python',<br/>
                            &nbsp;&nbsp;'SQL',<br/>
                            &nbsp;&nbsp;'AWS',<br/>
                         ]
                        </code>

                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
                    <p className="text-white/50">I excel in communication and persuasion, building meaningful connections and 
                    presenting ideas effectively to inspire action. My business acumen allows me to approach challenges strategically, 
                    ensuring decisions align with long-term goals. With a deep interest in technology, I enjoy exploring innovative 
                    solutions and staying ahead of industry trends. Collaboration is at the heart of my work, as I thrive in team 
                    environments, uniting diverse perspectives to deliver impactful results.</p>
                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
                            <Image
                                src={project1}
                                alt="project 1"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />

                    </div>
                </div>

                <div className="border border-white/20 rounded-lg p-6">
                    <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
                    <p className="text-white/50 mb-4">With a knack for strategic thinking, I bring a proactive approach to solving complex 
                    challenges, supported by my experience in adapting quickly to new tools and methodologies. My leadership roles in diverse 
                    settings have honed my ability to foster collaboration and inspire teams toward achieving goals. Additionally, my 
                    understanding of user-centric design and development is complemented by my ability to communicate technical concepts 
                    effectively, bridging gaps between business and technology.</p>
                    <div className="grid text-center gap-4">
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-blue-300 font-medium mb-2">Front-end</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>React</li>
                                <li>Typescript</li>
                                <li>CSS</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-blue-300 font-medium mb-2">Back-end</h4>
                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Node.js</li>
                                <li>Python</li>
                                <li>PostgreSQL</li>
                                <li>AWS</li>
                            </ul>
                        </div>

                    </div>
                </div>
                </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="border border-white/20 rounded-lg p-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm fond-medium mb-1">Front-End</label>
                            <Progress value={75} className="bg-blue-300/20 [&>div]:bg-blue-100/80" />
                        </div>
                        <div>
                            <label className="block text-sm fond-medium mb-1">Back-End</label>
                            <Progress value={65} className="bg-blue-300/20 [&>div]:bg-blue-100/80" />
                        </div>
                        <div>
                            <label className="block text-sm fond-medium mb-1">DevOps</label>
                            <Progress value={55} className="bg-blue-300/20 [&>div]:bg-blue-100/80" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
                    <p className="text-white/50">I believe in writing clean, maintainable code by adhering to best practices and industry standards.
                     My approach involves breaking tasks into manageable steps and tackling them systematically, testing at each stage to ensure 
                     everything functions as intended. </p>
                </div>
            

            <div className="border border-white/20 rounded-lg p-6">
                <div className="h-[200px] overflow-hidden p-4 border border-white/20 relative">
                    <Image
                        src={project2}
                        alt="project 2"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
                <div>
                        <h3 className="text-2xl font-bold mb-6">05. Goals</h3>
                        <p className="text-white/50">My goal is to continue growing as a developer, learning from others, and deepening my understanding of
                        business to merge these skills and help businesses scale. In the long term, I aspire to build something of my own that makes education 
                        accessible worldwide, creating more equality of opportunity and empowering individuals through innovation.</p>
                </div>
            </div>
            </div>
        </section>
    )
}