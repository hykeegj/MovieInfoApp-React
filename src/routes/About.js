import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “강자의 천적은 약자지만, 약자의 천적은 강자가 아니야. 더 약한 자라고.”
      </span>
      <span>− ⸢노 게임 노 라이프⸥ 등장인물 中 소라</span>
    </div>
  );
}

export default About;
