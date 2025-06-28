import PropTypes from 'prop-types';

export default function MessageBox({ children, color = '#000', className }) {

    const colorStyle = {
        borderColor: color,
        color: color
    };

    return (
        <div style={colorStyle} className={`${className} border-2 rounded-[10px] px-[15px] py-[10px] text-center`}>
            {children}
        </div>
    );
}

MessageBox.propTypes = {
    children: PropTypes.object,
    color: PropTypes.string,
    className: PropTypes.string
};