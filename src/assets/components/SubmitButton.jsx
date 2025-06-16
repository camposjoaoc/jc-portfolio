import PropTypes from 'prop-types';
import "../styles/submitButton.scss";

const SubmitButton = (props) => {
    return <button type="submit" className="btn-style">{props.label}</button>;
};

SubmitButton.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SubmitButton;

