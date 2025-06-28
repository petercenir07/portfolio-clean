import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CloseButton ({ onClick, className }) {
    return (
        <button type="button" onClick={onClick} className={`${className ? className : ''} text-primary text-[24px]`}>
            <FontAwesomeIcon icon={faTimes}/>
        </button>
    );
}

CloseButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};