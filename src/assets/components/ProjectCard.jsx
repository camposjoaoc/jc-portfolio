import PropTypes from 'prop-types';
import "../styles/projectCard.scss";

import ProjectPic0 from "../img/img-project-pic-0.webp";
import ProjectPic1 from "../img/img-project-pic-1.webp";
import ProjectPic2 from "../img/img-project-pic-2.webp";
import ProjectPic3 from "../img/img-project-pic-3.webp";
import ProjectPic4 from "../img/img-project-pic-4.webp";
import ProjectPic5 from "../img/img-project-pic-5.webp";
import ProjectPic6 from "../img/img-project-pic-6.webp";
import ProjectPic7 from "../img/img-project-pic-7.webp";

ProjectCard.propTypes = {
    imgIndex: PropTypes.number.isRequired, // Ensure it is a number and required
    cardTitle: PropTypes.string.isRequired, // Ensure it is a string and required
    about: PropTypes.string.isRequired, // Ensure it is a string and required
    skills: PropTypes.string.isRequired, // Ensure it is a string and required
    livePreview: PropTypes.string.isRequired, // Ensure it is a string and required
    sourceCode: PropTypes.string.isRequired, // Ensure it is a string and required
};

// Store all website images in an array for easy indexing
const cardImages = [ProjectPic0, ProjectPic1, ProjectPic2, ProjectPic3, ProjectPic4, ProjectPic5, ProjectPic6, ProjectPic7];

function ProjectCard(props) {
    return (
        <>
            <div className="card" onClick={() => window.open(props.livePreview, "_blank")} role="button" tabIndex={0}>
                <img src={cardImages[props.imgIndex]} alt="Website Image" className="img-website" />
                <div className="card-infos">
                    <div>
                        <h2 className="card-title">{props.cardTitle}</h2>
                        <p className="about">{props.about}</p>
                        <p className="skills">{props.skills}</p>
                    </div>
                    <div className="link-project">
                        <a href={props.livePreview} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}><i className="fa-solid fa-link"></i> Live Preview</a>
                        <a href={props.sourceCode} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}><i className="fa-brands fa-github"></i> View Code</a>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCard;