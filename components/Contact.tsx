import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:albertorapu@gmail.com?subject=${formData.subject} from ${formData.name}&body=${formData.message}`
    };

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

            <div className="flex flex-col space-y-10">
                <h4 className="text-3xl font-semibold text-center ">
                    {`Would you like my help? Let's `}
                    <span className=" text-[#F7AB0A]">Talk</span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p>contact@albertocastel.com</p>
                    </div>
                </div>
                {/* Remember to change this for a mail server */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
                        <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
                    </div>

                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

                    <textarea {...register("message")} placeholder="Message" className="contactInput" />
                    <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
