import React from "react";
import "../css/subscribe.css";

const Subscribe =()=>{
    return (
        <>
          <section className="subscribe-Container">
            <div className="subscribe">
                <p><i className="ri-mail-check-line"></i> Wants to get updates. Subscribe here!</p>
                <form className="subscribeForm">
                    <input className="subscribeFormEmail" type="email" placeholder="Email" name="email" required />
                    <button className="subscribeFormBtn" type="submit" name="submit">Subscribe</button>
                </form>
            </div>
          </section>
        </>
    );
};

export default Subscribe;