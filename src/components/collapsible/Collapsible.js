import React, {useState} from "react";
import "./Collapsible.scss";

const Collapsible = ({title, children, defaultOpen = false}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <button
        className={`collapsible-header ${isOpen ? "active" : ""}`}
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <span className="collapsible-title">{title}</span>
        <span className={`collapsible-icon ${isOpen ? "open" : ""}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div className={`collapsible-content ${isOpen ? "open" : ""}`}>
        <div className="collapsible-content-inner">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
