export const debounce = (func, delay) => {
    let debounceTimer;

    return function () {
        const context = this;
        const args = arguments;

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
            
    }
};

export const isValidEmail = value => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value);

};

export const isValidPhone = value => {
    const telRegex = /^\d+$/;

    return telRegex.test(value);
};

export const scrollToSection = id => {
    
    if(!id) { return; }

    const targetSection = document.querySelector(id);

    if(!targetSection) {
        return;
    }

    targetSection.scrollIntoView({ behavior: 'smooth' });
};