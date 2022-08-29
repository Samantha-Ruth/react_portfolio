import React from "react";
import coverImage from '../../assets/cover/brick-background.jpg'

const About = () => {
  return (
    <section className="my5">
      <h1 id="about">About Me</h1>
      <img src = {coverImage} className='my-2' style={{width:'100%'}} alt='cover'/>
      <p>Front-end web developer with solid work experience and interest in real world applications, working to build a more intuitive and approachable user experience on the web.</p>
<p>Recently earned a certificate in full stack development from Columbia Engineering, and have newly developed skills in JavaScript, responsive web design, NODE, Express, SQL, MySql2, Sequelize, and Handlebars. Have intimate knowledge of ORMs and the MVC paradigm. I recently completed a full-stack development project, working on a team of five to create an application that helps users price out medical costs by provider. With each project, my aim is to best engage my audience for an impactful user experience.
I am an innovative problem solver passionate about developing apps to approach real world problems and help users make their lives easier, with a focus on mobile-first design and development. I'm excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>
    </section>
  );
};

export default About;