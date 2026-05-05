import copy from 'copy-to-clipboard';
import { saveAs } from 'file-saver';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';

const Entity = ({ copy: uiCopy }) => {
    const [showCopyed, setShowCopyed] = useState(false);
    const containerRef = useRef(null);
    const entity = useSelector(state => state.entity);

    useEffect(() => {
        if (!entity || !containerRef.current) {
            return;
        }

        containerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }, [entity]);

    if (!entity) {
        return null;
    }

    const handleDownload = async () => {
        const res = await fetch(entity.qrcode);
        const blob = await res.blob();
        saveAs(blob, `QRCode_${entity.code}.png`);
    };

    const handleCopy = () => {
        copy(entity.shortUrl);
        setShowCopyed(true);
        setTimeout(() => setShowCopyed(false), 3000);
    };

    return (
        <div ref={containerRef} className="relative overflow-hidden rounded-[2rem] border border-emerald-300 bg-[linear-gradient(135deg,#ecfdf5_0%,#d1fae5_100%)] p-6 shadow-[0_30px_90px_rgba(16,185,129,0.18)] md:p-7">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
            <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)] md:items-start">
                <div className="flex flex-col items-center justify-start gap-4">
                    <div className="inline-flex items-center rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                        {uiCopy.resultTitle}
                    </div>
                    <img className="h-44 w-44 rounded-[1.6rem] bg-white p-3 shadow-[0_16px_50px_rgba(15,23,42,0.12)]" src={entity.qrcode} alt="QRCode" />
                </div>
                <div className="flex flex-col justify-between gap-5">
                    <div>
                    <p className="text-2xl font-semibold tracking-tight text-slate-950 md:text-[2rem]">
                        {uiCopy.resultTitle}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-emerald-900/80">
                        {uiCopy.resultSubtitle}
                    </p>
                    <div className="mt-6 grid gap-4">
                        <div className="rounded-[1.4rem] border border-emerald-200 bg-white/80 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                                {uiCopy.shortUrlLabel}
                            </p>
                            <a className="mt-2 block break-all text-base font-semibold leading-7 text-slate-900 underline decoration-emerald-500 underline-offset-4 md:text-lg" href={entity.shortUrl} target="_blank" rel="noopener noreferrer">{entity.shortUrl}</a>
                        </div>
                        <div className="rounded-[1.4rem] border border-emerald-100 bg-white/65 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                                {uiCopy.originUrlLabel}
                            </p>
                            <a className="mt-2 block break-all text-sm text-slate-600 underline decoration-slate-300 underline-offset-4" href={entity.originUrl} target="_blank" rel="noopener noreferrer">{entity.originUrl}</a>
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <Button label={uiCopy.downloadQrButton} onClick={handleDownload} />
                        <Button label={uiCopy.copyButton} onClick={handleCopy} />
                        {showCopyed &&
                            <div className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
                                <svg className='mr-1 h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 9L9.99998 16L6.99994 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#065f46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {uiCopy.copiedLabel}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Entity;
