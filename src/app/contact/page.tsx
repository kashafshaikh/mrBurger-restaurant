
"use client"; 
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Us: Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:billushaikhshaikh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section>
    <div className="text-white relative top-[100px] px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl text-center text-yellow-400 font-bold mb-[50px] md:mb-[100px]">
        CONTACT <span className="text-white">US</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[500px] w-full gap-8 md:gap-0">
        <div className="flex justify-center md:block w-full md:ml-24"> {/* Margin left only on medium and larger screens */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57930.30859148095!2d66.98057454863284!3d24.8418355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd2b3d4f88b%3A0xc57cf100a6cedc05!2sMr.%20Burger%20Dha%20phase%202!5e0!3m2!1sen!2s!4v1727799225270!5m2!1sen!2s"
            style={{ width: '100%', height: '100%', border: '0' }} 
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="bg-zinc-950 shadow-2xl p-6 md:p-4 md:mr-[50px] lg:mr-[100px] flex flex-col justify-center">
          <h1 className="font-bold text-4xl md:text-5xl mt-4 md:mt-6 text-center">
            GET IN TOUCH
          </h1>
          
          <form className="gap-5 grid grid-cols-1 m-12" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-950 border-yellow-400 border-[3px] px-6 py-4 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-zinc-950 border-yellow-400 border-[3px] px-8 py-4 rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-zinc-950 border-yellow-400 border-[3px] px-9 py-8 rounded-lg"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 py-2 px-9 rounded-lg font-semibold shadow-lg hover:bg-yellow-800 transition-all mb-6"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="pb-20"></div>
    </div>
    </section>
  );
}



