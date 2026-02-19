import { motion } from "framer-motion";

const HERO_IMAGE =
    "https://images.unsplash.com/photo-1506905925346-21bda3d9df9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* French Alps background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-transparent" />

            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="text-primary-200 text-sm uppercase tracking-[0.2em] mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Software Engineer | Pretty Mediocre Athlete
                    </motion.p>
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-primary-400">Kirk Hietpas</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        A passionate full-stack developer focused on building
                        scalable, reliable systems. I enjoy learning new
                        technologies, solving complex problems, and turning
                        ideas into practical solutions. I thrive in
                        collaborative environments, adapt quickly to new
                        challenges, and continuously work to improve my skills
                        and deliver high-quality results.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        <a href="#contact" className="btn-primary shadow-xl">
                            Get In Touch
                        </a>
                        <a
                            href="#personal"
                            className="px-6 py-3 bg-white/15 backdrop-blur border border-white/30 text-white rounded-lg font-semibold hover:bg-white/25 transition-colors duration-200"
                        >
                            See My Adventures
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="inline-block"
                    >
                        <svg
                            className="w-6 h-6 text-white/80"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
