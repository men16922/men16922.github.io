import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Collapsible from "../../components/collapsible/Collapsible";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          {techStack.experienceCategories.map((category, idx) => {
            return (
              <Collapsible
                key={idx}
                title={category.category}
                defaultOpen={idx === 0}
              >
                {category.experience.map((exp, i) => {
                  const progressStyle = {
                    width: exp.progressPercentage
                  };
                  return (
                    <div key={i} className="skill">
                      <p>{exp.Stack}</p>
                      <div className="meter">
                        <span style={progressStyle}></span>
                      </div>
                    </div>
                  );
                })}
              </Collapsible>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
