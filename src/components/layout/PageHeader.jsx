import "./PageHeader.css";


export default function PageHeader({
                                       title,
                                       children
                                   }) {

    return (
        <header className="pageHeader">
            <h2>{title}</h2>
            {children}
        </header>
    );
}