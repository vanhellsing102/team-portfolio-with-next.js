"use client"
import React, { FormEvent } from 'react';

const Contact = () => {
    const handleSendMessage = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const message = form.get("message");
        const contactEmail = form.get("contactEmail");
        console.log(name, email, message, contactEmail);
    }
    return (
        <div id='contact' className='md:w-[80%] w-full mx-auto'>
            <h2 className="text-4xl font-semibold text-center mb-5">Contact Us</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className='hover:shadow-sky-900 transition-all duration-300 p-5 shadow-xl ring-1 ring-sky-900/50 backdrop-blur-lg md:w-1/2 rounded-xl text-center shadow-sky-700'>
                    <h2 className='text-3xl font-semibold text-center mt-3 text-fuchsia-500'>Get In Touch</h2>
                    <p className='text-slate-300'>Whether you have an idea, a project, or simply want to say hi, we’re just a message away. Fill out the form, and we’ll get back to you as soon as possible!</p>
                </div>
                <div className='md:w-1/2 hover:shadow-sky-900 transition-all duration-300 p-5 shadow-xl shadow-sky-700 ring-1 ring-sky-900/50 backdrop-blur-lg rounded-xl'>
                    <form onSubmit={handleSendMessage}>
                        <div>
                            <label className='block text-[16px] text-fuchsia-500'>Name:</label>
                            <input type="text" name='name' placeholder='Enter your name' className='w-full rounded-lg px-5 py-1 active:bg-transparent text-slate-200 border border-sky-800 outline-none appearance-none' required/>
                        </div>
                        <div className='mt-3'>
                            <label className='block text-[16px] text-fuchsia-500'>Your Email:</label>
                            <input name='email' type="email" placeholder='example@gmail.com' className='w-full rounded-lg px-5 py-1 text-slate-200 border border-sky-800 outline-none appearance-none' required/>
                        </div>
                        <div className='mt-3'>
                            <label className='block text-[16px] text-fuchsia-500'>Contact Email:</label>
                            <select name="contactEmail" id="contactEmail" className='w-full rounded-lg px-5 py-1 border border-sky-800 outline-none appearance-none text-slate-400' defaultValue="choose-email" required>
                                <option value="choose-email" disabled className='text-slate-300'>Choose Email</option>
                                <option className='bg-sky-700' value="vvanhellsing30@gmail.com">vvanhellsing30@gmail.com</option>
                                <option className='bg-sky-700' value="nifaduzzaman2005@gmail.com">nifaduzzaman2005@gmail.com</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <label className='block text-[16px] text-fuchsia-500'>Message:</label>
                            <textarea name="message" id="messsage" placeholder='Enter your message' className='w-full rounded-lg px-5 py-1 text-slate-200 border border-sky-800 outline-none min-h-[150px]' required></textarea>
                        </div>
                        <button type='submit' className='w-full border border-sky-900 rounded-lg py-1 cursor-pointer hover:scale-[103%] transition-all duration-300 hover:bg-blue-400 mt-3'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;