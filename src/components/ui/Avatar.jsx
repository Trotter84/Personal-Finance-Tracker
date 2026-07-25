import "./Avatar.css";

export default function Avatar({
                                   src,
                                   alt = "Profile",
                                   initials = "?",
                                   size = "medium"
                               }) {
    return src ? (
        <img
            className={`avatar ${size}`}
            src={src}
            alt={alt}
        />
    ) : (
        <div className={`avatar ${size}`}>
            {initials}
        </div>
    );
}