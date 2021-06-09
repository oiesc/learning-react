import React from 'react';
import MyCat from './myCat.jpg';
import './About.css'

function About() {
    return (
        <>
            <div className="container" data-v-0004>
                <div className="main" data-v-0004>
                    <h4>About</h4>
                    <p>Hi, how are you doing? My name is Emanoel Aleixo, I'm Brazilian developer and now I'm studying React.</p>
                    <p>This project is just for me, i guess.</p>
                    <p>Why?</p>
                    <p>'Cause I learning React, and I like to practice with easy and cool things, so i'm here.</p>
                    <p>By the way, this page is about this site, so there's nothing to see here.</p>
                    <p>Thank's and goodbye.</p>
                    <div className="img">
                        <img alt="My Cat, Buda" src={MyCat} />
                    </div>
                    <p style={{ textAlign: 'center' }}>Buda, I miss you, my friend.</p>
                </div>
            </div>

        </>
    )
}
export default About;