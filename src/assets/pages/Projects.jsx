import ProjectCard from "../components/ProjectCard";
import "../styles/projects.scss";
function Projects() {
    return (
        <div className="container mid-container">
            <div className="container-projects">
                <h1 className="projects-title">PROJECTS</h1>
                <p className="projects-info">Highlights of My Work: Projects Developed with Standards, Frameworks, and Efficient Code</p>

                <div className="project-cards">
                    {/* Each project card is created with its respective props */}
                    <ProjectCard
                        imgIndex={0}
                        cardTitle="Search Your Pokémon"
                        about="Welcome to Search Your Pokémon, a project built with React and JavaScript that uses the PokéAPI to fetch Pokémon images!"
                        skills="TechStack: React, JavaScript, Sass, HTML/CSS"
                        livePreview="https://js-search-your-pokemon.netlify.app/"
                        sourceCode="https://github.com/camposjoaoc/search-your-pokemon"
                    />
                    <ProjectCard
                        imgIndex={1}
                        cardTitle="Magic Match"
                        about="This project is about building a Memory Game, made as a group activity during the Front-End course at Sundsgården school."
                        skills="TechStack: React, JavaScript, Sass, HTML/CSS"
                        livePreview="https://magic-match-mg.netlify.app"
                        sourceCode="https://github.com/camposjoaoc/react-memory-game"
                    />

                    <ProjectCard
                        imgIndex={2}
                        cardTitle="Discover Japan"
                        about="This project is a visually engaging, fully responsive website inspired by the beauty of Mount Fuji."
                        skills="TechStack: JavaScript, Sass, HTML/CSS"
                        livePreview="https://jc-discover-japan.netlify.app"
                        sourceCode="https://github.com/camposjoaoc/react-memory-game"
                    />
                    <ProjectCard
                        imgIndex={3}
                        cardTitle="BHROMAON"
                        about="Welcome to Bhromaon, a travel website designed to help users explore and plan safe journeys to various destinations worldwide."
                        skills="TechStack: JavaScript, Sass, HTML/CSS"
                        livePreview="https://jc-bhromaon.netlify.app"
                        sourceCode="https://github.com/camposjoaoc/project-bhromaon"
                    />
                    <ProjectCard
                        imgIndex={4}
                        cardTitle="Genesis Design"
                        about="Genesis is a portfolio website built with HTML, CSS, and Sass, showcasing a product designer's work."
                        skills="TechStack: Sass, HTML/CSS"
                        livePreview="https://jc-genesis-design.netlify.app"
                        sourceCode="https://github.com/camposjoaoc/project-genesis-design"
                    />
                    <ProjectCard
                        imgIndex={5}
                        cardTitle="Productly"
                        about="Productly is a website that offers innovative tools for design thinking and validation. Join us to innovate and grow together!"
                        skills="TechStack: Sass, HTML/CSS"
                        livePreview="https://jc-productly.netlify.app"
                        sourceCode="https://github.com/camposjoaoc/productly-figma-to-web"
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects;