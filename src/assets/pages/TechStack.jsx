import "../styles/techstack.scss";
function TechStack() {
    return <div className="container">
        <div className="container-techstack">
            <h1 className="tech-stack-title">MY TECH STACK 🔥</h1>
            <p className="tech-stack-info">The tools and technologies powering my recent work</p>
            <div className="grid-skills">
                <div>
                    <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-html.svg" alt="HTML5 logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-css.svg" alt="CSS logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-sass.svg" alt="Sass logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-react.svg" alt="React logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-js-official.svg" alt="JavaScript logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-git-icon.svg" alt="Git logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-github.svg" alt="GitHub logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-vscode.svg" alt="VS Code logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-bootstrap.svg" alt="Bootstrap logo" className="img-logo" /></a>
                </div>
                <div>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API" target="_blank" rel="noopener noreferrer"><img src="./src/assets/img/img-techstack-api.svg" alt="API logo" className="img-logo" /></a>
                </div>
            </div>
        </div>
    </div >

}
export default TechStack;