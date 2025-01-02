import PropTypes from 'prop-types';
import "../styles/projectCard.scss";

import ProjectPic0 from "../img/img-project-pic-0.png";
import ProjectPic1 from "../img/img-project-pic-1.png";
import ProjectPic2 from "../img/img-project-pic-2.png";
import ProjectPic3 from "../img/img-project-pic-3.png";
import ProjectPic4 from "../img/img-project-pic-4.png";

// Store all website images in an array for easy indexing
const cardImages = [ProjectPic0, ProjectPic1, ProjectPic2, ProjectPic3, ProjectPic4];

function ProjectCard(props) {
    return (
        <>
            <div className="card">
                <img src={cardImages[props.imgIndex]} alt="Website Image" className="img-website" />
                <div className="card-infos">
                    <div>
                        <h2 className="card-title">{props.cardTitle}</h2>
                        <p className="about">{props.about}</p>
                        <p className="skills">{props.skills}</p>
                    </div>
                    <div className="link-project">
                        <a href={props.livePreview} target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link"></i> Live Preview</a>
                        <a href={props.sourceCode} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> View Code</a>
                    </div>
                </div>
            </div>
        </>
    )
}

ProjectCard.propTypes = {
    imgIndex: PropTypes.number.isRequired, // Ensure it is a number and required
    cardTitle: PropTypes.string.isRequired, // Ensure it is a string and required
    about: PropTypes.string.isRequired, // Ensure it is a string and required
    skills: PropTypes.string.isRequired, // Ensure it is a string and required
    livePreview: PropTypes.string.isRequired, // Ensure it is a string and required
    sourceCode: PropTypes.string.isRequired, // Ensure it is a string and required
};
export default ProjectCard;