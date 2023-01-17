import React from "react";

// import social data
import { social } from "../data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contact us
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          doloribus quam beatae dignissimos quisquam sint. Dolorum nihil
          recusandae fugit, itaque amet molestiae doloribus distinctio, maxime
          minima quam debitis. Deleniti, impedit.
        </p>

        {/* form */}
        <form className="px-8 lg:px-0 max-w-[600px] mx-auto flex-col space-y-6 mb-[46px]">
          <input className="form-control" placeholder="Full name" type="text" />
          <input
            className="form-control"
            placeholder="Email address"
            type="email"
          />
          <textarea className="textarea" placeholder="Message"></textarea>
          <button className="btn bg-accent hover:bg-accent-hover transition-all duration-300">
            Send Message
          </button>
        </form>

        {/* socials */}
        <div className="flex justify-between items-center max-w-[300px] mx-auto">
          {social.map((item, index)=>{
            return (
              <a href="#home" key={index}>
                <img src={item.icon} alt="social" />
              </a> 
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
