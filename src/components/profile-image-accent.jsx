import PropTypes from 'prop-types';
import aboutImgAccent from '../assets/images/about-bg-accent.png'

export default function ProfileImageAccent({ imageUrl, altText = 'Featured Image', width = '526', height = '902' }) {
    return (
        <div className="md:pl-[154px] md:pt-[95px] relative pl-[100px] pt-[30px]">
            <img src={aboutImgAccent} alt="Image Accent" className="absolute top-0 left-0 w-full h-full object-cover object-left-top"/>
            <img src={imageUrl} alt={altText} width={width} height={height} className="relative z-10"/>
        </div>
    );
}

ProfileImageAccent.propTypes = {
    imageUrl: PropTypes.string,
    altText: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};