import React from 'react';
import profile from './ichigoProfile.png';
import './home.css';
import Akash from './AkashProfile.jpg';


function Home() {
    return (
        <div className='container'>
            <div className='home'>
        <div className='profilepage'>
            <img className='profile'
                style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid green",
                        }} src={Akash} alt="" />
                    <label style={{ fontSize: 25, fontWeight:"bold"}} htmlFor="" className='nametag'>Akash Sivapalan</label>

                </div>
                <div style={{ fontSize: 25 }} className='bio'>
                                    <p >I am a recent graduate in Computer Engineering from TMU (formerly Ryerson), specializing in software development. From small-scale web applications to large-scale API testing, I have gained experience in a diverse range of projects. My programming expertise encompasses Python, Java, Spring, React, Node, SQL, and C, alongside proficiency in essential tools such as JUnit, AWS, Azure, Docker, multi-threading, fastAPI, and Tensorflow.
                </p>
                <p>
                    In my free time, I enjoy honing my coding skills through Leetcode challenges and exploring new programming frameworks to stay abreast of the latest advancements in the software field. My passion lies in crafting elegant solutions for complex problems, and I thrive in dynamic and challenging environments. Check out the portfolio section to see some of works.
                   </p>
                <p>    I am always eager to engage in conversations about any topic and looking for oppurtunities to work on new projects. Whether you have exciting project ideas or simply wish to discuss shared interests, I welcome you to reach out to me. Feel free to contact me by checking out the contact section. I look forward to meeting fellow peers in the tech field!
                </p>
                </div>

            </div>
            <br />
            <div className='bio'>
                         
            </div>
  
            </div> 
);
}

export default Home;