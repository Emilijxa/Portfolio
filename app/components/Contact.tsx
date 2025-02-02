"use client"

import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <div className="overflow-x-hidden">
            <section id="Contact" className="py-20 md:py-32 text-white max-w-[1200px] mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
                >
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8 md:space-y-12">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-gray-300"
                        >
                            Get in <span className="text-gray-500">touch</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass p-6 md:p-8 rounded-2xl space-y-6 md:space-y-8"
                        >
                            <div className="space-y-2">
                                <p className="text-base md:text-lg text-gray-300">Phone</p>
                                <a
                                    href="tel: +44 7990 272 404"
                                    className="text-xl md:text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                                >
                                    +44 7990 272 404
                                    <span className="text-gray-500">↗</span>
                                </a>
                            </div>

                                    <div className="space-y-2">
                                        <p className="text-base md:text-lg text-gray-300">Email</p>
                                        <a
                                            href="mailto:emmiblinkeviciute@gmail.com"
                                            className="text-2xl md:text-3xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2 break-all sm:break-normal"
                                        >
                                            emmiblinkeviciute@gmail.com
                                            <span className="text-gray-500">↗</span>
                                        </a>


                                 </div>


                            <div className="space-y-2">
                                <p className="text-base md:text-lg text-gray-300">Location</p>
                                <address className="text-lg md:text-xl not-italic leading-relaxed">
                                    Birmingham<br />
                                    United Kingdom
                                </address>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl h-56 md:h-72 rounded-2xl overflow-hidden mx-auto mt-6 md:mt-10 flex justify-center"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310911.5076289338!2d-2.193298450161388!3d52.49730921482784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham!5e0!3m2!1sen!2suk!4v1737911006804!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};
