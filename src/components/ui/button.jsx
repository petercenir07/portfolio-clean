import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Button({ className, href = null, children, variant, onClick, type = 'button', download, target}) {    

    let buttonStyleClasses = '';

    switch(variant) {

        case 'muted':

            buttonStyleClasses = 'transition-colors duration-300 text-[#ababab] hover:text-[#fff]';

            break;

        default:

            buttonStyleClasses = 'text-[#fff] bg-gradient-to-r from-secondary from-[14%] to-[#681673] to-[82%] transition-shadow duration-300 shadow-[0px_2px_11px_rgba(255,255,255,0)] hover:shadow-[0px_2px_11px_rgba(255,255,255,.30)]';
    }

    if(href) {

        if(download) {
            
            return (
                <a 
                    href={href} 
                    download 
                    className={`${buttonStyleClasses} btn ${ className ? className : ''}`}>
                        {children}
                </a>
            );

        } else {

            return (
                <Link 
                    to={href} 
                    className={`${buttonStyleClasses} btn ${ className ? className : ''}`} target={target ? target : null}>
                    {children}
                </Link>
            );
        }

    } else {

        return (
            <button 
                type={type} 
                className={`${buttonStyleClasses} btn ${ className ? className : ''}`}
                onClick={ onClick ? onClick : null }>
                {children}
            </button>
        );
    }

}

Button.propTypes = {
    className: PropTypes.string,
    isLink: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    href: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    download: PropTypes.string,
    target: PropTypes.string
}