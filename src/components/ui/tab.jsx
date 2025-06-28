import PropTypes from 'prop-types';
import Button from './button';

export default function Tab({ className, tabs, handleUpdate }) {

    return (
        <div className={`${ className ? className : '' } bg-[#141414]  px-[15px] md:px-[25px] py-[15px] rounded-[10px] shadow-[0_4px_4px_rgba(0,0,0,.25)]`}> 
            {tabs &&
                tabs.map((tab, index) => {
                    return (
                        <Button 
                            key={index}
                            className={`${ (index + 1) < tabs.length ? 'mr-[10px]' : '' }`}
                            variant={ !tab.isActive ? 'muted' : '' }
                            onClick={() => { handleUpdate(tab.id) }}
                            >{ tab.label }
                        </Button>
                    );
                })
            }   
        </div>
    );

}

Tab.propTypes = {
    className: PropTypes.string,
    tabs: PropTypes.array,
    handleUpdate: PropTypes.func
}