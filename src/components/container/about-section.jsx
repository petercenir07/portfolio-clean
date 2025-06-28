import aboutProfileImage from '../../assets/images/about-pits.jpg'
import ProfileImageAccent from '../profile-image-accent';

export default function AboutSection({ id }) {
    return (
        <section className="py-[70px]" id={ id ? id : null}>
            <div className="container">
                <div className="lg:flex">
                    <div className="lg:w-[46.66%] mb-[50px] lg:mb-[0]">
                        <div className="relative min-[1480px]:ml-[-157px] min-[1201px]:ml-[-60px] max-w-[450px] lg:max-w-[unset] mx-auto">
                            <ProfileImageAccent
                                imageUrl={aboutProfileImage}
                                altText='Nicole Benedict G. Lim'/>
                        </div>
                    </div>s
                    <div className="lg:w-[53.34%] lg:pl-[50px] lg:pt-[120px]">
                        <div>
                            <h2 className="text-[#fff] mb-[40px] lg:mb-[70px]">About <span className="text-primary">Me</span></h2>
                            <div className="text-[#fff] text-[15px] xl:text-[18px] leading-[28px]">
                                <p className="mb-[20px] text-[15px] xl:text-[18px]"><strong>Hi! I&apos;m Peter Samuel Vergel from Binangonan Rizal, Philippines. I&apos;m a freelance and full-time Front-End Developer</strong>. As a developer, I translate design into a functional and responsive website. I also ensure that it is optimized and creatively done. I&apos;m always eager to learn and usually express it by keeping myself updated to the latest technologies. I do collaborate with other developers by joining communities and trainings so that I’ll be able to know how other developers write their codes and learn from them.</p>
                                <p className="mb-[20px] text-[15px] xl:text-[18px]">I started my career in my first company as a Front-End Web Developer, specialized in creating Real Estate Websites in 2019. After several years, I got promoted as a Full Stack Web Developer. As I always seek for career growth, after a year I have decided to look for another company that aligns with my career path. Currently, I have been working on my new company as a Front-End Developer focused on creating business websites.</p>
                                <p className=" text-[15px] xl:text-[18px]">Work Life Balance is very important specially on developers because most of the day, we think a lot of ways to figure out how to build things and to fix bugs. Therefore, to refresh my mind and to relax, I either play video games or spend time with my family and friends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}