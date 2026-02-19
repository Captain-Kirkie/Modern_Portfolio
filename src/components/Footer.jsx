const Footer = () => {
    return (
        <footer className="bg-slate-800/95 backdrop-blur border-t border-slate-700/50 text-slate-300 py-8">
            <div className="section-container text-center">
                <p className="mb-2">
                    © {new Date().getFullYear()} Kirk Hietpas. All rights
                    reserved.
                </p>
                <p className="text-sm text-slate-500">
                    Built with React, Vite, and Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
