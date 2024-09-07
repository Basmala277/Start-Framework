import React from 'react';
import './About.css';

function AboutComponent() {
    return (
        <div className="about-section bg-green text-white">
            <div className="container">
                <h2 className="text-center mb-4 about-heading">
                    ABOUT COMPONENT
                </h2>
                <div className="text-center mb-4">
                    <span className="line"></span>
                    <span className="star">&#9733;</span>
                    <span className="line"></span>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-center">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center">
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
