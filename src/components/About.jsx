import { motion } from "framer-motion";

const About = () => {
    const skills = [
        "Swift",
        "C++",
        "Java",
        "Python",
        "C#",
        "Git",
        "Docker",
        "JavaScript",
        "SQL",
        "Pandas",
        "Golang",
        "Kubernetes",
        "Kotlin",
        "Android",
        "Enyo",
        "Apollo",
        "GraphQL",
        "PostgreSQL",
        "Vapor",
        "Google Cloud Platform",
        "Redis",
        "Terraform",
        "Flask",
        "React",
    ];

    return (
        <section id="about" className="section-container section-outdoor relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                    About Me
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-12 rounded-full"></div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-lg text-gray-700 mb-4">
                                I'm a passionate backend and cloud developer
                                excited about building scalable,
                                high-performance server-side applications and
                                cloud infrastructure. I specialize in designing
                                robust APIs, managing cloud services, and
                                optimizing database performance.
                            </p>
                            <p className="text-lg text-gray-700 mb-4">
                                While I can work across the entire stack, my
                                passion lies in backend development and cloud
                                architecture. I enjoy solving complex problems
                                through elegant server-side solutions and
                                scalable cloud infrastructure.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                Skills & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.1,
                                            duration: 0.3,
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
