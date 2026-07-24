import "./PrimaryButton.css";


export default function PrimaryButton({children, onClick, type = "button"}) {

    return (
        <button
            type={type}
            className="primaryBtn"
            onClick={onClick}
        >
            {children}
        </button>
    );
}