import React, {useState} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  const [expandedCategories, setExpandedCategories] = useState(
    educationInfo.categories ? educationInfo.categories.map(() => true) : []
  );

  const toggleCategory = index => {
    setExpandedCategories(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        {educationInfo.categories ? (
          educationInfo.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="education-category">
              <div
                className="education-category-header"
                onClick={() => toggleCategory(categoryIndex)}
              >
                <h2 className="education-category-title">{category.title}</h2>
                <span
                  className={`education-category-icon ${
                    expandedCategories[categoryIndex] ? "expanded" : "collapsed"
                  }`}
                >
                  {expandedCategories[categoryIndex] ? "−" : "+"}
                </span>
              </div>
              <div
                className={`education-card-container ${
                  expandedCategories[categoryIndex] ? "expanded" : "collapsed"
                }`}
              >
                {category.items.map((school, index) => (
                  <EducationCard key={index} school={school} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="education-card-container">
            {educationInfo.schools?.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        )}
      </div>
    );
  }
  return null;
}
