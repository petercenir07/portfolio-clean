import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import { experienceData } from '../../data/experience-data';
import ExperienceInfo from '../experience-info';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function ExperiencesSection({ id }) {
    // const line = useRef();
    const slider = useRef();
    const sliderInner = useRef();
    const section = useRef();
    const matchMedia = gsap.matchMedia();
    const [sliderWidth, setSliderWidth] = useState();

    const computeTotalSlideWidth = slides => {
        const slidesArray = Array.prototype.slice.call(slides);
        let totalWidth = 0;

        for (let slide of slidesArray) {
                
            totalWidth += slide.offsetWidth;
            
        }

        return totalWidth;                                                                                                                                             
    };

 
    
        useGSAP(() => {

            let children = sliderInner.current.children;
            let sliderXPadding = 204 * 2;
            let sliderWidth = computeTotalSlideWidth(children);

            setSliderWidth(sliderWidth + sliderXPadding);

            matchMedia.add(
                {
                    isDesktop: '(min-width: 1280px)',
                    isTablet: '(min-width: 1024px)'
                },
                (context) => {
                    
                    const { isDesktop } = context.conditions;
                    // const lineWidth = sliderWidth - ((204 * 3) + 890);
                
                    gsap.to(slider.current, {
                        xPercent: (isDesktop ? -60 : -70),
                        ease: 'none',
                        scrollTrigger: {
                            trigger: section.current,
                            pin: true, 
                            scrub: 1,
                            end: () => "+=" + slider.current.offsetWidth,
                            markers: false
                        }
                    });

                    // gsap.to(line.current, {
                    //     width: lineWidth,
                    //     ease: 'none',
                    //     scrollTrigger: {
                    //         trigger: section.current,
                    //         pin: false, 
                    //         scrub: 1,
                    //         start: 'top left',
                    //         end: () => "+=" + slider.current.offsetWidth,
                    //         markers: false
                    //     }
                    // });
                }
            );
        
        }, []);
    

    return (
        <section className="py-[70px] pt-[120px]" ref={section} id={id ? id : null}>
            <div className="container">
                <h2 className="text-center text-[#fff] mb-[80px] lg:mb-[30px] xl:mb-[100px] max-h-800:mb-[30px]">Professional <br/><span className="text-primary">Experience</span></h2>
            </div>
            <div className="overflow-hidden relative">
                <div className="slide-overlay-left slide-overlay-right absolute top-0 left-0 w-full h-full hidden lg:block pointer-events-none"></div>
                <div  
                    style={{ width: `${sliderWidth}px` }} 
                    className="w-[auto] relative"
                    ref={slider}>
                    
                    {/* <div ref={line} className="absolute top-[23px] left-[204px] h-[3px] bg-[#2C2C2C]" style={{ width: 0 }}></div> */}

                    <div className="relative px-[15px] lg:px-[204px]  w-[100vw] lg:w-[auto] lg:flex flex-wrap" ref={sliderInner}>
                        {experienceData &&

                            experienceData.map((data, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className="slide-item block lg:inline-block lg:align-top lg:w-[780px] xl:w-[890px] mb-[60px] lg:mb-0 relative z-10">
                                        <ExperienceInfo experience={data}/>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        </section>
    );

}

ExperiencesSection.propTypes = {

};