const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="section-container text-center">
                <p className="mb-2">
                    © {new Date().getFullYear()} Kirk Hietpas. All rights
                    reserved.
                </p>
                <p className="text-sm text-gray-500">
                    Built with React, Vite, and Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
