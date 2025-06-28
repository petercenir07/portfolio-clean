import Proptypes from 'prop-types';

export default function LogoCard({ imageUrl, label, className }) {
    return (
        <div className={`${className ? className : ''} rounded-[10px] bg-[#141414] text-center flex items-center justify-center p-4 h-[190px]`}>
            <div>
                <img src={imageUrl} alt={label} className="inline-block mb-[16px]"/>
                <p className="text-[#fff] text-[20px] font-medium">{label}</p>
            </div>
        </div>
    );
}

LogoCard.propTypes = {
    imageUrl: Proptypes.string,
    label: Proptypes.string,
    className: Proptypes.string
};