import './App.css'
import Banner from './components/banner'
import FeaturedProject from './components/featured-project'
import Button from './components/ui/button'
import SkillsSection from './components/container/skills-section';
import ExperiencesSection from './components/container/experiences-section';
import { featuredProjectsData } from './data/featured-projects-data';
import AboutSection from './components/container/about-section';
import Footer from './components/footer';
import Header from './components/header';
import { useEffect, useState } from 'react';
import { scrollToSection } from './utils';

function App() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  useEffect(() => {

    const mainRoot = document.querySelector('html');

    if(isMobileMenuActive) {

      mainRoot.classList.add('no-scroll');

    } else {

      mainRoot.classList.remove('no-scroll');

    }
   

  }, [isMobileMenuActive]);

  return (
    <>
      <Header mobileMenuHandler={setIsMobileMenuActive} isMobileMenuActive={isMobileMenuActive}/>
        
        <main className="bg-dark pt-[104px]">

          <Banner id="hero-banner">
            <h1 className="text-[#fff] text-center font-bold accent-font leading-[45px] xl:leading-[70px]">Hey there! I&apos;m <span>Peter</span>,  a Web Developer who converts designs into interactive, responsive websites with strong focus on performance, SEO, and usability.</h1>
            <div className="text-center items-center justify-center mt-5 block lg:flex">
              <p className="text-[#fff] mb-5 lg:mb-0">Need a help to make your ideal website turn into reality?</p>
              <Button className="ml-5" onClick={e => { e.preventDefault(); scrollToSection('#contact') }}>Lets talk!</Button>
            </div>                 
          </Banner>

          <section id="featured-propjects" className="py-[70px]">
            <div className="container">
              <h2 className="text-[#fff] mb-[40px] text-center lg:text-left">My <span className="text-primary">Projects</span></h2>
            </div>
              {featuredProjectsData &&
                featuredProjectsData.map((project, index) => {
                  return (
                    <FeaturedProject 
                      key={project.id}
                      isEven={index % 2 !== 0} 
                      title={project.title}
                      imageUrl={project.imageUrl}
                      technologies={project.technologies}
                      description={project.description}
                      demoLink={project.demoLink}/>
                  );
                })
              }
            
          </section>

          <SkillsSection id="skills"/>

          <ExperiencesSection id="experience"/>

          <AboutSection id="about"/>

        </main>

      <Footer/>
    </>
  )
}

export default App
