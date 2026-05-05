const Footer = ({ copy }) => {
    return (
        <footer className="border-t border-slate-200 py-8 text-sm text-slate-500">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
                <p>{copy.footerNote}</p>
                <a className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4" href="mailto:hello@shorturl.wiki">hello@shorturl.wiki</a>
            </div>
        </footer>
    );
};

export default Footer;
