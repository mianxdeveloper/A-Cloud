import React from "react";
import "../css/Form.css";

const Form = ({ sideContent, sideClassName = "", formNextClass="" }) => {
    return (
        <>
            <section className={`FormPlus ${formNextClass}`}>
                <div className={`sideFormSection ${sideClassName}`}>{sideContent}</div>
                <form className="Form">
                    <span className="Formheading">
                        <h1>Let's <span>Work Together</span></h1>
                        <p>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
                    </span>
                    <div className="ActualForm">
                        <span className="Formname">
                            <input type="text" name="fname" placeholder="First Name" required />
                            <input type="text" name="lname" placeholder="Last Name" />
                        </span>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="subject" placeholder="Subject" required />
                        <select className="select" required defaultValue="">
                            <option className="options" value="" disabled>Select Budget</option>
                            <option className="options" value="$50">$50</option>
                            <option className="options" value="$50 - $100">$50 - $100</option>
                            <option className="options" value="$100 - $200">$100 - $200</option>
                            <option className="options" value="$200+">$200+</option>
                        </select>
                        <textarea placeholder="Enter your Message.." ></textarea>
                        <button type="submit" name="submit">Send Message <i className="ri-arrow-right-up-long-line"></i></button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Form;