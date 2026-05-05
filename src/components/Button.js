const Button = ({ label, onClick }) => {
    return (
        <button
            className="rounded-[1.4rem] bg-amber-500 px-7 py-5 text-base font-semibold text-slate-950 transition hover:bg-amber-400"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;
