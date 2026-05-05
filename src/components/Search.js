import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearEntity, generateShortUrl } from "../reducers/entityReducer";
import { clearError, setError } from "../reducers/errorReducer";
import { isValidUserUrl, normalizeUserUrl } from "../lib/urlInput";
import Button from "./Button";
import Error from "./Error";

const Search = ({ copy }) => {
    const dispatch = useDispatch();
    const [url, setUrl] = useState('');

    const handleClick = () => {
        dispatch(clearError());
        dispatch(clearEntity());
        const normalizedUrl = normalizeUserUrl(url);
        if (!isValidUserUrl(normalizedUrl)) {
            dispatch(setError(copy.invalidUrl));
        } else {
            dispatch(generateShortUrl(normalizedUrl));
            setUrl('');
        }
    };

    const handleKeyup = (event) => {
        if (event.keyCode === 13) {
            handleClick();
        }
    };

    return (
        <div className="rounded-[2rem] border border-amber-300 bg-[linear-gradient(180deg,rgba(255,251,235,0.98),rgba(255,255,255,0.98))] p-7 shadow-[0_30px_90px_rgba(217,119,6,0.18)] backdrop-blur md:p-8">
            <label className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
                {copy.formLabel}
            </label>
            <div className="flex flex-col gap-4 md:flex-row">
                <input
                    className="flex-1 rounded-[1.4rem] border-2 border-amber-200 bg-white px-6 py-5 text-lg font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-200"
                    placeholder={copy.formPlaceholder}
                    value={url}
                    onChange={({ target }) => setUrl(target.value)}
                    onKeyUp={handleKeyup}
                />
                <Button label={copy.formButton} onClick={handleClick} />
            </div>
            <p className="mt-4 text-sm text-slate-600">{copy.formHelp}</p>
            <Error />
        </div>
    );
};

export default Search;
