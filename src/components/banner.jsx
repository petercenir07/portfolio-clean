import PropTypes from 'prop-types';

export default function Banner({ children, classes, id }) {
    
    return (
        <section id={id ? id : null} className={ `${classes ? classes : ''} relative` }>
            <canvas width="1600" height="700" className="w-full min-h-[600px]"></canvas>
            <div className="absolute top-[50%] translate-y-[-50%] w-full">
                <div className="container">
                    <div className="mx-auto max-w-full lg:max-w-[700px] xl:max-w-full">
                        { children }
                    </div>
                </div>
            </div>
        </section>
    );

}

Banner.propTypes = {
    classes: PropTypes.string,
    children: PropTypes.array,
    id: PropTypes.string
};