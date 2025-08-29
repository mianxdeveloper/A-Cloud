import "../css/SkillsBar.css";

export default function SkillBar() {
  return (
    <div className="skills-bar">
      <div className="skill react">
        <i className="ri-reactjs-line"></i>
        <span>React</span>
      </div>
      <div className="skill javascript">
        <i className="ri-javascript-line"></i>
        <span>JavaScript</span>
      </div>
      <div className="skill jquery">
        <i className="ri-code-s-slash-line"></i>
        <span>jQuery</span>
      </div>
      <div className="skill css">
        <i className="ri-css3-line"></i>
        <span>CSS</span>
      </div>
      <div className="skill tailwind">
        <i className="ri-windy-line"></i>
        <span>Tailwind</span>
      </div>
      <div className="skill html">
        <i className="ri-html5-line"></i>
        <span>HTML</span>
      </div>
      <div className="skill linux">
        <i className="ri-terminal-box-line"></i>
        <span>Linux</span>
      </div>
    </div>
  );
}
