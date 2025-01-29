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
function TechStack() {
    return <div className="container mid-container">
        <div className="container-techstack">
            <h1 className="tech-stack-title">MY TECH STACK 🔥</h1>
            <p className="tech-stack-info">The tools and technologies powering my recent work</p>
            <div className="grid-skills">
                <div>
                    <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">
                        <img src={img_html} alt="HTML5 logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                        <img src={img_css} alt="CSS logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                        <img src={img_sass} alt="Sass logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                        <img src={img_react} alt="React logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                        <img src={img_js} alt="JavaScript logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">
                        <img src={img_git} alt="Git logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src={img_github} alt="GitHub logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">
                        <img src={img_vscode} alt="VS Code logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
                        <img src={img_bootstrap} alt="Bootstrap logo" className="img-logo" />
                    </a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noopener noreferrer">
                        <img src={img_api} alt="API logo" className="img-logo" />
                    </a>
                </div>
            </div>
        </div>
    </div >

}
export default TechStack;