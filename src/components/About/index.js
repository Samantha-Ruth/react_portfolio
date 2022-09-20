import React from "react";
// import coverImage from "../../assets/cover/brick-background.jpg";
import profileImage from "../../assets/cover/profile_image2.JPG";

const About = () => {
  return (
    <div>
      <section className="my-5">
        <div className="hero">
          <h1 id="about">About Me</h1>
        </div>
      </section>
      <section>
        <h1
          id="about-me"
          className="title is=size-1 mt-6 mb-5 has-text-centered"
        >
          About Me
        </h1>
        <div className="flex-row">
          <div className="column is-3 is-8-mobile is-offset-2-mobile">
            <img
              src={profileImage}
              className="py-1 my-2"
              style={{ width: "25%" }}
              alt="profile"
            />
          </div>
          <div>
            <p className="px-2 my-5" style={{ width: "55%" }}>
              Front-end web developer with solid work experience and interest in
              real world applications, working to build a more intuitive and
              approachable user experience on the web.
            </p>
            <p className="my-5" style={{ width: "90%" }}>
              Recently earned a certificate in full stack development from
              Columbia Engineering, and have newly developed skills in
              JavaScript, responsive web design, NODE, Express, SQL, MySql2,
              Sequelize, and Handlebars. Have intimate knowledge of ORMs and the
              MVC paradigm. I recently completed a full-stack development
              project, working on a team of five to create an application that
              helps users price out medical costs by provider. With each
              project, my aim is to best engage my audience for an impactful
              user experience. I am an innovative problem solver passionate
              about developing apps to approach real world problems and help
              users make their lives easier, with a focus on mobile-first design
              and development. I'm excited to leverage my skills as part of a
              fast-paced, quality-driven team to build better experiences on the
              web.
            </p>
            <div className="is-flex flex-direction-column is-flex-wrap-wrap is-justify-content-space-around columns mt-1 wow">
              {/* <div className="column is-1 is-3-mobile"> */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="mongodb icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                    alt="npm icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="express icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="react icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
                    alt="graphql icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="nodejs icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="github icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    alt="redux icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                    alt="webpack icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="javascript icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                    alt="jquery icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="html5 icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="css3 icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
                    alt="bootstap icon"
                    style={{ width: "10%" }}
                    className="img-icon"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
                    alt="git icon"
                    style={{ width: "9%" }}
                    className="img-icon"
                  />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
