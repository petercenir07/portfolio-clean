import PropTypes from 'prop-types';
import Button from './ui/button';

export default function FeaturedProject({ isEven = false, imageUrl, title, technologies, description, demoLink }) {

    return (
        <div className="py-[40px] px-4 lg:px-0">
            <div className={`max-w-[700px] lg:max-w-[unset] mx-auto  lg:flex ${ isEven ? 'lg:flex-row-reverse' : '' }`}>
                <div className="w-full lg:w-[40.93%]">
                    <div className={` h-full relative overflow-hidden rounded-[10px] ${ isEven ? 'lg:rounded-tr-none lg:rounded-br-none lg:rounded-tl-[10px] lg:rounded-bl-[10px]' : 'lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-[10px] lg:rounded-br-[10px]' }`}>
                        <canvas width="655" height="437" className="w-full block h-full"></canvas>
                        <img src={imageUrl} alt="Placeholder" className="absolute top-0 left-0 w-full h-full object-cover"/>
                    </div>
                </div>
                <div className={`w-full lg:w-[59.07%] ${ isEven ? 'lg:pr-[4%] lg:pl-[12%]' : 'lg:pl-[4%] lg:pr-[12%]' }`}>
                    <div className="pt-[17px]">
                        <h3 className="text-[#fff] font-medium text-[30px] lg:text-[38px] mb-[8px]">{title}</h3>
                        <ul className="mb-[20px]">
                            {technologies && 
                                technologies.map((technology, index) => {
                                    return (
                                        <li key={index} className={`inline-block mb-[10px] ${ (index + 1) < technologies.length ? 'mr-[10px]' : '' }`}>
                                            <span className="inline-block bg-secondary text-[14px] font-bold py-[5.5px] px-[12.5px] text-[#fff] rounded-[10px]">{technology}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                        <div className="text-[18px] text-[#fff]">
                            <p>{description}</p>
                        </div>
                        {demoLink && <Button href={demoLink} className="mt-[40px] xl:mt-[80px]" target="_blank">Demo</Button>}
                    </div>
                </div>
            </div>
        </div>
    );
}

FeaturedProject.propTypes = {
    isEven: PropTypes.bool,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    technologies: PropTypes.array,
    description: PropTypes.string,
    demoLink: PropTypes.string
};