import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import perts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} className="rounded-lg shadow-2xl w-4/5" />
                    <img src={perts} className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-5 top-2/3 border-8 border-white" />
                </div>
                <div className="lg:w-1/2 p-4">
                    <h4 className="text-2xl text-orange-500 font-semisbold">About Us</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;