"use client"

import { motion } from 'framer-motion';

export const Contact = () => {
    return(
        <section id="Contact" className='py-32 text-white max-w-[1200px] max-auto px-4'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-16"
            >
                <div className="space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-7xl font-bold text-gray-300"
                    >
                        Get in <span className="text-gray-500">touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a
                                href="tel: +44 7990 272 404"
                                className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                            >
                                +44 7990 272 404
                                <span className="text-gray-500">↗</span>
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Email</p>
                            <a
                                href="mailto:emmiblinkeviciute@gmail.com"
                                className="text-3xl lg:text-4xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2"
                            >
                                emmiblinkeviciute@gmail.com
                                <span className="text-gray-500">↗</span>
                            </a>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Location</p>
                            <address className="text-xl not-italic leading-relaxed">
                                Birmingham<br />
                                United Kingdom
                            </address>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden ml-20 mt-20"
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
    );
};