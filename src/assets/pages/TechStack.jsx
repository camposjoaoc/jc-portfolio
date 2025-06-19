import "../styles/techstack.scss";
import img_api from "../img/img-techstack-api.svg";
import img_bootstrap from "../img/img-techstack-bootstrap.svg";
import img_css from "../img/img-techstack-css.svg";
import img_git from "../img/img-techstack-git-icon.svg";
import img_github from "../img/img-techstack-github.svg";
import img_html from "../img/img-techstack-html.svg";
import img_js from "../img/img-techstack-js-official.svg";
import img_react from "../img/img-techstack-react.svg";
import img_sass from "../img/img-techstack-sass.svg";
import img_vscode from "../img/img-techstack-vscode.svg";
import img_tailwind from "../img/img-techstack-tailwind.svg";
import img_typescript from "../img/img-techstack-typescript.svg";
import img_node from "../img/img-techstack-node.svg";
import img_mongodb from "../img/img-techstack-mongo.svg";
import img_docker from "../img/img-techstack-docker.svg";
import img_swagger from "../img/img-techstack-swagger.svg";
import img_postman from "../img/img-techstack-postman.svg";
import img_figma from "../img/img-techstack-figma.svg";
import img_cypress from "../img/img-techstack-cypress.svg";
import img_jira from "../img/img-techstack-jira.svg";

const techs = [
  {
    name: "HTML",
    img: img_html,
    url: "https://html.spec.whatwg.org/multipage/",
  },
  {
    name: "CSS",
    img: img_css,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { name: "Sass", img: img_sass, url: "https://sass-lang.com/" },
  {
    name: "Tailwind",
    img: img_tailwind,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    img: img_bootstrap,
    url: "https://getbootstrap.com",
  },
  { name: "React", img: img_react, url: "https://react.dev/" },
  {
    name: "JavaScript",
    img: img_js,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    img: img_typescript,
    url: "https://www.typescriptlang.org/",
  },
  { name: "Git", img: img_git, url: "https://git-scm.com" },
  { name: "GitHub", img: img_github, url: "https://github.com/" },
  {
    name: "VS Code",
    img: img_vscode,
    url: "https://code.visualstudio.com",
  },
  {
    name: "API",
    img: img_api,
    url: "https://developer.mozilla.org/en-US/docs/Web/API",
  },
  {
    name: "Swagger",
    img: img_swagger,
    url: "https://swagger.io/",
  },
  {
    name: "Postman",
    img: img_postman,
    url: "https://www.postman.com/",
  },
  { name: "Node", img: img_node, url: "https://nodejs.org/en/" },
  {
    name: "MongoDB",
    img: img_mongodb,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Docker",
    img: img_docker,
    url: "https://www.docker.com/",
  },
  { name: "Figma", img: img_figma, url: "https://www.figma.com/" },
  {
    name: "Cypress",
    img: img_cypress,
    url: "https://www.cypress.io/",
  },
  {
    name: "Jira",
    img: img_jira,
    url: "https://www.atlassian.com/software/jira",
  },
];

function TechStack() {
  return (
    <div className="container mid-container">
      <div className="container-techstack">
        <h1 className="tech-stack-title">MY TECH STACK 🔥</h1>
        <p className="tech-stack-info">
          The tools and technologies powering my recent work
        </p>
        <div className="grid-skills">
          {techs.map((tech) => (
            <div key={tech.name} style={{ textAlign: "center" }}>
              <a href={tech.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={tech.img}
                  alt={`${tech.name} logo`}
                  className="img-logo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TechStack;
