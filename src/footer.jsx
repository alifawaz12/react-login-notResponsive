import React from "react";
import logo from './logo.png';


const foot = () => {
    return(
        <div className="footerWrapper">
            <div className="logo-wrapper">
                <img src={logo} alt="no photo" />
            </div>
            <div className="sub-cont">
                <h3 className="foot-title">
                Subscribe to our newsletter:
                </h3>
                <input className="footer-input"  type="text" placeholder="Name" />
                <input className="footer-input" type="text" placeholder="Email" />
                <input className="footer-input sub-input" type="button" value='subscribe' />
            </div>
            <div className="sub-cont list-wrapper">
                <h3 className=" quick foot-title">
                    Quick Links:
                </h3>
                <div className="link-wrapper">
                    <ul className="lists">
                        <li className="links">About us</li>
                        <li className="links">Our Services</li>
                        <li className="links">Gift Card</li>
                        <li className="links">Reviews</li>
                    </ul>
                    <ul className="lists">
                        <li className="links">FAQs</li>
                        <li className="links">Work with us </li>
                        <li className="links">Refund Policy</li>
                    </ul>
                </div>
            </div>
            <div className="sub-cont list-wrapper">
                <h3 className="foot-title">
                    Contact us:
                </h3>
                <div className="last link-wrapper">
                    <ul className="lists">
                        <li className="links">Got any questions to ask?</li>
                        <li className="links">Feel free to reach out to us</li>
                    </ul>
                </div>
                <div className="socila-wrapper">

                </div>
            </div>

        </div>
    )
};

export default foot;