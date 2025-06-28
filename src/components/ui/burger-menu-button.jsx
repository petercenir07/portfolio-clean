import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function BurgerMenuButton({ onClick, className }) {
    return (
        <button type="button" onClick={onClick} className={`${className ? className : ''} text-primary text-[24px]`}>
            <FontAwesomeIcon icon={faBars}/>
        </button>
    );
}


BurgerMenuButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
};