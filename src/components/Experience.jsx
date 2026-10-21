import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
    {
        id: "rldatix",
        company: "RLDatix",
        role: "Senior Full Stack Engineer",
        team: "Innovation Team",
        location: "Lehi, UT (Hybrid)",
        start: "January 2026",
        end: "Present",
        current: true,
        highlights: [
            "Built Flask-based backend services and APIs powering a healthcare data-entry chatbot, supporting conversational workflows and structured data capture.",
            "Designed reusable frontend components and chatbot workflows that streamlined complex data-entry interactions and improved usability.",
            "Collaborated across product, engineering, and UX teams to design and deliver incremental features in an Agile environment.",
        ],
        technologies: ["Flask", "React", "PostgreSQL", "RabbitMQ", "Celery", "Redis", "Python", "TypeScript"],
    },
    {
        id: "passivelogic-cloud",
        company: "PassiveLogic",
        role: "Software Engineer",
        team: "Cloud Team",
        location: "Salt Lake City, UT",
        start: "January 2023",
        end: "December 2025",
        current: false,
        highlights: [
            "Designed and implemented backend services and GraphQL APIs using Swift and Vapor to support cloud-based applications.",
            "Designed PostgreSQL schemas, optimized queries, and implemented database migrations for production services.",
            "Collaborated with frontend developers to integrate backend services with user-facing applications.",
            "Deployed and monitored cloud-based applications on Google Cloud Platform.",
            "Used Docker and Kubernetes for containerization and orchestration of services.",
            "Kept code quality high through testing and code reviews, following TDD.",
            "Integrated third-party services and APIs into existing systems, expanding product functionality and reducing manual workflows.",
        ],
        technologies: [
            "Swift",
            "Vapor",
            "GraphQL",
            "PostgreSQL",
            "GCP",
            "Docker",
            "Kubernetes",
        ],
    },
    {
        id: "passivelogic-user",
        company: "PassiveLogic",
        role: "Junior JavaScript Engineer",
        team: "User Software Team",
        location: "Salt Lake City, UT",
        start: "January 2022",
        end: "January 2023",
        current: false,
        highlights: [
            "Developed and maintained front-end applications to create digital twins for autonomous systems using EnyoJS, JavaScript, TypeScript, and CSS.",
            "Built user interfaces that stayed easy to use and felt functional for the end user.",
            "Interpreted the client-side data model to accurately represent complex systems and their associated physics.",
            "Collaborated across teams to implement features that improved the user experience.",
        ],
        technologies: ["EnyoJS", "JavaScript", "TypeScript", "CSS"],
    },
    {
        id: "navitaire",
        company: "Navitaire",
        role: "Software Engineer Intern",
        team: null,
        location: "Salt Lake City, UT",
        start: "August 2021",
        end: "January 2022",
        current: false,
        highlights: [
            "Worked with open source software to automate container deployments.",
        ],
        technologies: ["Kubernetes", "Docker", "C#", "Javascript"],
    },
    {
        id: "utah",
        company: "University of Utah",
        role: "Master of Software Development",
        team: null,
        location: "Salt Lake City, UT",
        start: "August 2020",
        end: "December 2021",
        current: false,
        kind: "education",
        highlights: [],
        technologies: [],
    },
    {
        id: "minnesota",
        company: "University of Minnesota",
        role: "Bachelor of Science",
        team: "Major: Bio",
        location: null,
        start: null,
        end: null,
        current: false,
        kind: "education",
        highlights: [],
        technologies: [],
    },
];

const formatRange = (item) => {
    if (item.start && item.end) return `${item.start} — ${item.end}`;
    if (item.start) return item.start;
    return null;
};

const Experience = () => {
    const [selectedId, setSelectedId] = useState(null);
    const closeButtonRef = useRef(null);
    const selected = experiences.find((role) => role.id === selectedId) ?? null;

    useEffect(() => {
        if (!selected) return undefined;

        const previouslyFocused = document.activeElement;
        closeButtonRef.current?.focus();
        document.body.style.overflow = "hidden";

        const onKeyDown = (event) => {
            if (event.key === "Escape") setSelectedId(null);
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            if (previouslyFocused instanceof HTMLElement) {
                previouslyFocused.focus();
            }
        };
    }, [selected]);

    return (
        <section
            id="experience"
            className="section-container section-outdoor relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
                    Experience
                </h2>
                <div className="w-24 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
                    Work and Education. From Scientist to Software engineer!
                </p>

                <ol className="relative max-w-4xl mx-auto">
                    <div
                        aria-hidden="true"
                        className="absolute left-[11px] md:left-1/2 top-3 bottom-3 w-px -translate-x-1/2 bg-gradient-to-b from-primary-200 via-primary-500 to-primary-200"
                    />

                    {experiences.map((role, index) => {
                        const alignLeft = index % 2 === 0;
                        const dateRange = formatRange(role);

                        return (
                            <li key={role.id} className="relative pb-10 last:pb-0">
                                <span
                                    aria-hidden="true"
                                    className={`absolute left-[11px] md:left-1/2 top-7 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white shadow-md ${role.current
                                        ? "bg-primary-500 ring-4 ring-primary-200"
                                        : "bg-primary-600"
                                        }`}
                                />

                                <motion.button
                                    type="button"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.6,
                                    }}
                                    whileHover={{ y: -4 }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={() => setSelectedId(role.id)}
                                    aria-haspopup="dialog"
                                    aria-expanded={selectedId === role.id}
                                    className={`group block ml-10 w-[calc(100%-2.5rem)] rounded-xl border border-white/60 bg-white/90 p-5 text-left shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 md:w-[calc(50%-2rem)] ${alignLeft
                                        ? "md:ml-0 md:mr-auto"
                                        : "md:ml-auto"
                                        }`}
                                >
                                    <div
                                        className={`flex w-full flex-wrap items-center gap-2 ${alignLeft ? "md:justify-end" : ""
                                            }`}
                                    >
                                        {dateRange && (
                                            <span className="text-sm font-semibold tracking-wide text-primary-700">
                                                {dateRange}
                                            </span>
                                        )}
                                        {role.kind === "education" && (
                                            <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary-800">
                                                Education
                                            </span>
                                        )}
                                        {role.current && (
                                            <span className="rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary-800">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                    <h3
                                        className={`mt-2 text-xl font-semibold text-gray-900 ${alignLeft ? "md:text-right" : ""
                                            }`}
                                    >
                                        {role.role}
                                    </h3>
                                    <p
                                        className={`mt-1 text-gray-700 ${alignLeft ? "md:text-right" : ""
                                            }`}
                                    >
                                        {role.company}
                                        {role.team ? ` · ${role.team}` : ""}
                                    </p>
                                    {role.location && (
                                        <p
                                            className={`mt-1 text-sm text-gray-500 ${alignLeft ? "md:text-right" : ""
                                                }`}
                                        >
                                            {role.location}
                                        </p>
                                    )}
                                    <p
                                        className={`mt-4 text-sm font-medium text-primary-600 opacity-80 transition-opacity group-hover:opacity-100 ${alignLeft ? "md:text-right" : ""
                                            }`}
                                    >
                                        View details
                                    </p>
                                </motion.button>
                            </li>
                        );
                    })}
                </ol>
            </motion.div>

            {createPortal(
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            role="presentation"
                        >
                            <div
                                className="absolute inset-0 bg-slate-900/75"
                                onClick={() => setSelectedId(null)}
                            />
                            <motion.div
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby="experience-dialog-title"
                                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                                transition={{ duration: 0.25 }}
                                className="relative z-10 max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/60 bg-white p-6 shadow-2xl sm:p-8"
                            >
                                <button
                                    ref={closeButtonRef}
                                    type="button"
                                    onClick={() => setSelectedId(null)}
                                    className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                                    aria-label="Close experience details"
                                >
                                    <svg
                                        className="h-5 w-5"
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

                                {formatRange(selected) && (
                                    <p className="pr-10 text-sm font-semibold tracking-wide text-primary-700">
                                        {formatRange(selected)}
                                    </p>
                                )}
                                <h3
                                    id="experience-dialog-title"
                                    className="mt-2 text-2xl font-bold text-gray-900"
                                >
                                    {selected.role}
                                </h3>
                                <p className="mt-1 text-lg text-gray-700">
                                    {selected.company}
                                    {selected.team ? ` · ${selected.team}` : ""}
                                </p>
                                {selected.location && (
                                    <p className="mt-1 text-sm text-gray-500">
                                        {selected.location}
                                    </p>
                                )}

                                {selected.highlights.length > 0 && (
                                    <ul className="mt-6 space-y-3">
                                        {selected.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="flex gap-3 text-gray-700"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"
                                                />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {selected.technologies.length > 0 && (
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {selected.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Experience;
