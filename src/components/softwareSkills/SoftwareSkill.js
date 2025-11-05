import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import Collapsible from "../collapsible/Collapsible";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {skillsSection.skillCategories.map((category, idx) => {
          return (
            <Collapsible
              key={idx}
              title={category.category}
              defaultOpen={idx === 0}
            >
              <ul className="dev-icons">
                {category.skills.map((skills, i) => {
                  return (
                    <li
                      key={i}
                      className="software-skill-inline"
                      name={skills.skillName}
                    >
                      <i className={skills.fontAwesomeClassname}></i>
                      <p>{skills.skillName}</p>
                    </li>
                  );
                })}
              </ul>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
}
