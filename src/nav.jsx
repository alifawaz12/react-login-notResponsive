import React from "react";
import logo from './logo.png';


const Hed = () => {
    return (
        <div className="nav">
            <div>
                <img src={logo} alt='not found' />
            </div>
            <div>
                <ul className="list">
                    <li className="serves">
                        Our Services
                    </li>
                    <li className="serves">
                        Gift Card Shop
                    </li>
                    <li className="serves">
                        Reviews
                    </li>
                    <li className="serves">
                        FAQs
                    </li>
                    <li className="serves">
                        About us
                    </li>
                    <li className="serves">
                        Support
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Hed;