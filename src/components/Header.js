import { LANGUAGE_OPTIONS } from "../lib/i18n";

const Header = ({ copy, language, onLanguageChange }) => {
    return (
        <header className="mb-16 pt-8">
            <div className="flex flex-col gap-6 rounded-[2rem] border border-white/60 bg-white/70 px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="text-2xl font-semibold tracking-tight text-slate-900">{copy.brand}</div>
                    <div className="mt-2 text-sm text-slate-500">{copy.tagline}</div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
                        <a href="#tool">{copy.navTool}</a>
                        <a href="#api">{copy.navApi}</a>
                        <a href="#pricing">{copy.navPricing}</a>
                        <a href="#docs">{copy.navDocs}</a>
                        <a href="#contact">{copy.navContact}</a>
                    </nav>
                    <label className="flex items-center gap-2 text-sm text-slate-500">
                        <span>{copy.languageLabel}</span>
                        <select
                            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-700 outline-none"
                            value={language}
                            onChange={(event) => onLanguageChange(event.target.value)}
                        >
                            {LANGUAGE_OPTIONS.map((option) => (
                                <option key={option.code} value={option.code}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Header;
