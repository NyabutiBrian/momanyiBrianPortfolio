import React, { useState } from 'react'
import whiteFullLogo from '../../assets/images/navLogos/whiteLogoFull.png'

function ContactInput() {

    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullNameValue = event.target.elements.fullName.value;
        const messageValue = event.target.elements.message.value;
        const emailValue = event.target.elements.email.value;

        fetch('https://msavvy-backend.onrender.com/api/portfoliomessage/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name: fullNameValue,
                email: emailValue,
                message: messageValue,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    // Assuming the presence of an 'id' property indicates a successful submission
                    setSuccessMessage('Message submitted successfully');
                    setFullName('');
                    setEmail('');
                    setMessage('');
                } else {
                    // Handle error, e.g., show an error message
                    setSuccessMessage('Failed to submit message');
                }
            })
            .catch(error => {
                console.error('Error submitting message:', error);
                setSuccessMessage('An error occurred while submitting message');
                setFullName('');
                setEmail('');
                setMessage('');
            });
    };

  return (
    <footer class="up-effect bg-darky pt-32 -mt-24">
        <div class="max-w-screen-xl mx-auto px-4 flex flex-col">
            <div class="py-8">
                <div>
                    <img src={whiteFullLogo} alt="momanyi logo" class="w-3/4 md:w-1/2" />
                </div>
                <div>
                    <h2 class="text-4xl sm:text-7xl text-white font-normal">Let's start a project together</h2>
                </div>
            </div>
            <hr class="bg-secondary h-0.5" />

            <form onSubmit={handleSubmit} class="py-6 md:py-12">
            {successMessage && 
                <div id="popup-modal" role="alert" class="absolute top-1/4 right-0 left-0 z-30 max-w-md mx-auto">
                    <div class="bg-secondary p-8 md:p-14 rounded-xl whitespace-nowrap flex flex-col items-center">
                        <i class="fa-regular fa-circle-check text-darky text-5xl"></i>
                        <h3 class="my-5 text-lg font-normal text-darky">{successMessage}</h3>
                        <a href="/contact" class="text-whity bg-darky hover:bg-primary focus:ring-4 focus:outline-none focus:ring-darky font-medium rounded-lg text-sm px-5 py-2.5 text-center">OK</a>
                    </div>
                </div>
            }
                <div class="px-4 relative z-0 w-full mb-5 group">
                    <input type="text" name="fullName" id="fullName" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" placeholder=" " required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <label for="fullName" class="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">My name is...</label>
                </div>
                <div class="px-4 relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" placeholder=" " required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label for="email" class="peer-focus:font-medium absolute text-sm text-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">You can reach me on this email...</label>
                </div>
                <div class="px-4 relative z-0 w-full mb-5 group">
                    <label for="message" class="block mb-2 text-sm font-medium text-secondary">Message</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-secondary focus:ring-secondary focus:border-secondary" placeholder="Write your thoughts here..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                
                <div class="relative my-16 md:my-24">
                    <div class="absolute -top-12 md:-top-20 right-20 md:right-40 z-30 text-white flex items-center justify-center">
                        <button type="submit" class="magneticButton bg-primary p-8 md:p-14 rounded-full whitespace-nowrap" data-modal-target="popup-modal" data-modal-toggle="popup-modal">Send Message</button>
                    </div>
                    <hr class="bg-secondary h-0.5 w-full absolute top-1/2 transform -translate-y-1/2" />
                </div>
            </form>
            
            <div class="flex items-center justify-center md:justify-start space-x-8 mb-20 mt-10">
                <div class="text-white p-4 md:p-6 border rounded-full text-xs md:text-base">
                    <p>momanyiturner@gmail.com</p>
                </div>
                <div class="text-white p-4 md:p-6 border rounded-full text-xs md:text-base">
                    <p>(+254) 700 013 897</p>
                </div>
            </div>

            <div class="flex items-center justify-between py-4">
                <div class="">
                    <h6 class="text-secondary text-xs md:text-sm py-2">LOCAL TIME</h6>
                    <div class="text-white text-sm md:text-md flex space-x-4">
                        <p>17:00 PM</p>
                        <p>EAT</p>
                    </div>
                </div>
                <div class="">
                    <h6 class="text-secondary text-xs md:text-sm py-2">SOCIALS</h6>
                    <ul class="text-white text-sm md:text-md flex space-x-4">
                        <li><a href="https://github.com/MomanyiPoet" target='LinkedIn'>LinkedIn</a></li>
                        <li><a href="https://github.com/MomanyiPoet" target='GitHub'>GitHub</a></li>
                        <li><a href="https://github.com/MomanyiPoet" target='TikTok'>TikTok</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default ContactInput
