import "./FilterChip.css";


export default function FilterChip({
                                       active,
                                       children,
                                       onClick
                                   }) {

    return (
        <button
            className={active ? "chip active" : "chip"}
            onClick={onClick}
        >
            {children}
        </button>
    );
}