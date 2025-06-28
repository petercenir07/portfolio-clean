import { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import {  isValidEmail, isValidPhone } from "../../utils";
import emailjs from '@emailjs/browser';
import Spinner from "../ui/spinner";
import MessageBox from "../ui/message-box";

const SERVICE_ID = 'service_8bbj47q';
const TEMPLATE_ID = 'template_qtgpndw';
const PUBLIC_KEY = 'N0ytmOxlm6U5lRUTy';

export default function GetInTouchForm() {
    const [isMessageActive, setIsMessageActive] = useState(false);
    const [formData, setFormData] = useState({
        name: {
            value: '',
            error: '',
            label: 'Name',
            required: true,
        },
        email: {
            value: '',
            error: '',
            label: 'Email',
            required: true
        },
        phoneNumber: {
            value: '',
            error: '',
            label: 'Phone number',
            required: true
        },
        message: {
            value: '',
            error: '',
            label: 'Message',
            required: true
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const emailParams = {
        to_name: 'Nicole Benedict G. Lim',
        from_name: formData.name.value,
        from_message: formData.message.value,
        from_phone_number: formData.phoneNumber.value,
        from_email: formData.email.value
    };

    const validateInput = (inputField) => {
        let error = '';

        switch(inputField.type) {

            case 'email': {

                error = !isValidEmail(inputField.value) ? `${inputField.value} is not valid email.` : '';

                break;
            }

            case 'tel': {

                error = !isValidPhone(inputField.value) ? `${inputField.value} is not a valid phone number.` : '';

                break;
            }

            case 'textarea': {

                let minimumChar = 20;

                error = inputField.value.length < minimumChar ? `You must input more than ${minimumChar} characters.` : '';

                break;
            }


        }

        return error;
    };

    const handleChange = event => {
        const inputField = event.target;
        const value = event.target.value;
        const name = event.target.name;
        const placeholder = event.target.placeholder;

        setFormData(prevState => {
            let error = prevState[name].required ? value === '' ? `${placeholder} is required.` : validateInput(inputField) : validateInput(inputField);

            return {
                ...prevState,
                [name]: {
                    ...prevState[name],
                    value: value,
                    error,
                }
            }
        });
        
    };

    const clearFormData = () => {
        
        setFormData(prevState => {
            const currentFormData = {...prevState};

            for(let key in currentFormData) {

                currentFormData[key].value = '';
                currentFormData[key].error = '';
            }

            return currentFormData;
        });

    };

    const handleSubmit = async event => {
        event.preventDefault();
        
        setIsLoading(true);

        const currentFormData = {...formData};
        let hasError = false;

        for (let key in currentFormData) {

           if(currentFormData[key].value === '' && currentFormData[key].required) {

                currentFormData[key].error = `${currentFormData[key].label} is required.`;
                
                hasError = true;

            } else if(currentFormData[key].error != '') {

                hasError = true;

            }

        }

        if(hasError) {

            setFormData(currentFormData);

            setIsLoading(false);
            return;
        
        } 

        try {

            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY);

            if(response.status != 200) {

                setIsLoading(false);

                throw new Error(`Error occured: ${response.text}`);
                
            }

            setIsLoading(false);
            setIsMessageActive(true);

            setTimeout(() => {

                setIsMessageActive(false);

            }, 3000);


        } catch(error) {

            console.log(error);

            setIsLoading(false);

        }

        setTimeout(() => {

            clearFormData();

        }, 3000);

    };

    return (
        <form onSubmit={handleSubmit}>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <Input
                    label={formData.name.label}
                    type="text"
                    name="name"
                    id="name"
                    placeholder={formData.name.label}
                    value={formData.name.value}
                    error={formData.name.error}
                    onChange={handleChange}/>
            </div>

            <div className="lg:flex lg:mx-[-15px] mb-[15px] lg:mb-[30px]"> 

                <div className="relative lg:w-1/2 mb-[15px] lg:mb-0 lg:px-[15px]">
                    <Input
                        label={formData.email.label}
                        type="email"
                        name="email"
                        id="email"
                        placeholder={formData.email.label}
                        value={formData.email.value}
                        error={formData.email.error}
                        onChange={handleChange}/>
                </div>

                <div className="relative lg:w-1/2 lg:px-[15px]">

                    <Input
                        label={formData.phoneNumber.label}
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder={formData.phoneNumber.label}
                        value={formData.phoneNumber.value}
                        error={formData.phoneNumber.error}
                        onChange={handleChange}/>
                </div>
            </div>

            <div className="relative mb-[15px] lg:mb-[30px]">
                <Textarea
                    label={formData.message.label}
                    name="message" 
                    id="message"
                    placeholder={formData.message.label}
                    value={formData.message.value}
                    error={formData.message.error}
                    onChange={handleChange}/>
            </div>

            <div className=" text-right">
                {isLoading ? <Spinner/> : <Button type='submit'>Submit</Button>}
            </div>

            {isMessageActive && <MessageBox className="mt-[20px]" color="#1dd1a1"><p>Your message has been sent successfully!</p></MessageBox>}
            
        </form>
    );
}