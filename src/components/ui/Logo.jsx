import './Logo.css';


export const Logo = ({size = 200, className = ''}) => {
    return (
        <div className={`north-logo-container ${className}`}>
            <svg
                className="north-logo-svg"
                viewBox="0 0 200 240"
                width={size}
                height={size * 1.2}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Luxury Metallic Gold Gradient */}
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F5E4B7"/>
                        <stop offset="45%" stopColor="#D4A76A"/>
                        <stop offset="80%" stopColor="#B38241"/>
                        <stop offset="100%" stopColor="#8A5F26"/>
                    </linearGradient>

                    {/* Highlight Gradient for Needle */}
                    <linearGradient id="goldLight" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F9EBD0"/>
                        <stop offset="100%" stopColor="#C89D5E"/>
                    </linearGradient>

                    {/* Text Gradient */}
                    <linearGradient id="textGold" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EAD29C"/>
                        <stop offset="50%" stopColor="#D4A76A"/>
                        <stop offset="100%" stopColor="#C59350"/>
                    </linearGradient>
                </defs>

                {/* --- NORTH STAR (APEX) --- */}
                <g stroke="url(#goldGradient)" strokeWidth="1.2" fill="none" strokeLinecap="round">
                    {/* Vertical & Horizontal Rays */}
                    <line x1="100" y1="6" x2="100" y2="34"/>
                    <line x1="86" y1="20" x2="114" y2="20"/>
                    {/* Diagonal Rays */}
                    <line x1="91" y1="11" x2="109" y2="29" strokeWidth="0.8" opacity="0.8"/>
                    <line x1="91" y1="29" x2="109" y2="11" strokeWidth="0.8" opacity="0.8"/>
                </g>

                {/* --- GEOMETRIC WIREFRAME COMPASS --- */}
                <g stroke="url(#goldGradient)" fill="none" strokeLinejoin="round">
                    {/* Outer Diamond */}
                    <polygon points="100,42 148,100 100,158 52,100" strokeWidth="1.2"/>

                    {/* Inner Sub-Diamond */}
                    <polygon points="100,62 130,100 100,138 70,100" strokeWidth="0.8" opacity="0.7"/>

                    {/* Outer-to-Inner Facet Connectors */}
                    <line x1="100" y1="42" x2="100" y2="62" strokeWidth="1"/>
                    <line x1="148" y1="100" x2="130" y2="100" strokeWidth="1"/>
                    <line x1="100" y1="158" x2="100" y2="138" strokeWidth="1"/>
                    <line x1="52" y1="100" x2="70" y2="100" strokeWidth="1"/>

                    {/* Delicate Crosshair Grid */}
                    <line x1="52" y1="100" x2="100" y2="62" strokeWidth="0.6" opacity="0.4"/>
                    <line x1="148" y1="100" x2="100" y2="62" strokeWidth="0.6" opacity="0.4"/>
                    <line x1="52" y1="100" x2="100" y2="138" strokeWidth="0.6" opacity="0.4"/>
                    <line x1="148" y1="100" x2="100" y2="138" strokeWidth="0.6" opacity="0.4"/>
                </g>

                {/* --- FACETED COMPASS NEEDLE --- */}
                {/* Top-Right Facet (Bright) */}
                <polygon points="100,32 100,100 124,76" fill="url(#goldLight)"/>
                {/* Top-Left Facet (Mid Tone) */}
                <polygon points="100,32 100,100 76,76" fill="#A87E42"/>
                {/* Bottom-Right Facet (Shadowed) */}
                <polygon points="100,168 100,100 124,124" fill="#6E4E20"/>
                {/* Bottom-Left Facet (Dark Gold) */}
                <polygon points="100,168 100,100 76,124" fill="#8F672F"/>

                {/* Sharp Needle Outlines */}
                <polygon points="100,32 124,76 100,100 76,76" fill="none" stroke="url(#goldGradient)" strokeWidth="0.8"/>
                <polygon points="100,168 124,124 100,100 76,124" fill="none" stroke="url(#goldGradient)" strokeWidth="0.8"/>

                {/* --- BRAND WORDMARK --- */}
                <text
                    x="100"
                    y="215"
                    className="north-brand-text"
                    textAnchor="middle"
                >
                    NORTH
                </text>
            </svg>
        </div>
    );
};

export default Logo;