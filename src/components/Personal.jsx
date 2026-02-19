import { motion } from "framer-motion";
import { useState } from "react";

const Personal = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Add your images here - replace with your actual image paths
    const personalImages = [
        {
            id: 1,
            src: "https://storage.googleapis.com/portfolio_images_kh/repel.jpg",
            alt: "Climbing",
            title: "Climbing kinda hard",
        },
        {
            id: 2,
            src: "https://storage.googleapis.com/portfolio_images_kh/running-mtns.jpg",
            alt: "Running",
            title: "Running kinda fast",
        },
        {
            id: 3,
            src: "https://storage.googleapis.com/portfolio_images_kh/skiing.jpg",
            alt: "Activity 3",
            title: "Skiing kinda fast",
        },
        {
            id: 4,
            src: "https://storage.googleapis.com/portfolio_images_kh/touring.jpg",
            alt: "Activity 4",
            title: "Skiing kinda hard",
        },
        {
            id: 5,
            src: "https://storage.googleapis.com/portfolio_images_kh/WA.jpg",
            alt: "Activity 5",
            title: "Staring at mountains",
        },
        {
            id: 6,
            src: "https://storage.googleapis.com/portfolio_images_kh/slabs.jpg",
            alt: "Activity 6",
            title: "Staring at rocks",
        },
    ];

    return (
        <section id="personal" className="section-container bg-gray-50">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                    Personal Interests
                </h2>
                <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>

                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    When I'm not coding, I enjoy suffering in beautiful places.
                    Here are some things I love doing in my free time.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {personalImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="w-full h-96 overflow-hidden bg-gray-100 flex items-center justify-center">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                    <h3 className="text-xl font-semibold">
                                        {image.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            className="relative max-w-4xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                                aria-label="Close"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default Personal;
