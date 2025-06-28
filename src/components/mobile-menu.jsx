import Button from "./ui/button";
import IconDownload from "./ui/icon-download";
import PropTypes from 'prop-types';
import CloseButton from "./ui/close-button";
import { scrollToSection } from "../utils";

export default function MobileMenu({ onClose, isActive }) {

    const menuStyle = {
        transform: isActive ? 'translateX(0)' : 'translateX(100%)',
        pointerEvents: isActive ? 'auto' : 'none'
    };

    const backDropStyle = {
        opacity: isActive ? 0.8 : 0,
        pointerEvents: isActive ? 'auto' : 'none'
    };

    const handleMenuScroll = event => {

        event.preventDefault();

        const target = event.target;
        const id = target.getAttribute('href');
        
        scrollToSection(id);

        // close mobile menu before scrolling
        onClose();
        
    };

    return (
        <>
            <div style={backDropStyle} className="fixed top-0 left-0 w-full h-full bg-[#000] opacity-[0.8] z-[199] transition ease-in-out lg:hidden"></div>
            <aside className="fixed top-0 right-0 bg-[#141414] w-[400px] h-[100vh] z-[200] max-w-[80%] transition ease-in-out lg:hidden" style={menuStyle}>
                <div className="py-[80px] px-[30px]">
                    <CloseButton className="absolute top-[20px] right-[20px] z-10" onClick={onClose}/>
                    <nav>
                        <ul className=" list-none">
                            <li className="text-[#fff] text-[20px] font-bold mb-[20px]"><a onClick={e => { handleMenuScroll(e) }} href="#hero-banner" className="relative inline-block">Home</a></li>
                            <li className="text-[#fff] text-[20px] font-bold mb-[20px]"><a onClick={e => { handleMenuScroll(e) }} href="#featured-propjects" className="relative inline-block">Projects</a></li>
                            <li className="text-[#fff] text-[20px] font-bold mb-[20px]"><a onClick={e => { handleMenuScroll(e) }} href="#skills" className="relative inline-block">Skills</a></li>
                            <li className="text-[#fff] text-[20px] font-bold mb-[20px]"><a onClick={e => { handleMenuScroll(e) }} href="#experience" className="relative inline-block">Experience</a></li>
                            <li className="text-[#fff] text-[20px] font-bold mb-[20px]"><a onClick={e => { handleMenuScroll(e) }} href="#about" className="relative inline-block">About</a></li>
                            <li className="text-[#fff] text-[20px] font-bold"><a onClick={e => { handleMenuScroll(e) }} href="#contact" className="relative inline-block">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="pt-[30px]">
                        <Button className="!text-[14px] !inline-flex !px-[15px]">Download my CV <IconDownload className="ml-[10px]"/></Button>
                    </div>
                </div>
            </aside>
        </>
    );
}


MobileMenu.propTypes = {
    onClose: PropTypes.func,
    isActive: PropTypes.bool
};