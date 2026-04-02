// components/sections/home/HeroSection.tsx
'use client'

import ScrollReveal from '../../shared/ScrollReveal'
import Button from '../../shared/Button'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-gray-600 opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Hi, I'm a Web Developer
                        </span>
                    </h1>

                    <motion.p
                        className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Creating stunning digital experiences that help businesses grow and succeed in the modern web.
                    </motion.p>

                    <motion.div
                        className="flex justify-center space-x-4"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <Button href="/projects" variant="primary">
                            View Projects
                        </Button>

                        <Button href="/contact" variant="outline">
                            Hire Me
                        </Button>
                    </motion.div>

                </motion.div>

            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <i className="fas fa-chevron-down text-2xl text-gray-400"></i>
            </div>

        </section>
    )
}

export default HeroSection