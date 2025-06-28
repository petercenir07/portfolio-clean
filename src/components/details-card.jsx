import PropTypes from 'prop-types';

export default function DetailsCard({ subtitle, title, content, className }) {
    return (
        <div className={`${className ? className : ''} bg-[#141414] rounded-[10px] py-[50px] px-[25px] max-w-[640px]`}>
            <small className="text-[#fff] font-bold text-[16px] inline-block mb-[5px]">{subtitle}</small>
            <h4 className="text-primary font-bold text-[24px] mb-[10px]">{title}</h4>
            <p className="text-[#fff] font-medium text-[16px]">{content}</p>
        </div>
    );
}

DetailsCard.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    className: PropTypes.string
};