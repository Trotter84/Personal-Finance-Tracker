import "./TextInput.css";


export default function TextInput({
                                      label,
                                      type = "text",
                                      placeholder,
                                      value,
                                      onChange,
                                      icon
                                  }) {
    
    return (
        <div className="textInputGroup">
            <label>{label}</label>

            <div className="textInput">
                {icon && <span className="inputIcon">{icon}</span>}

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}