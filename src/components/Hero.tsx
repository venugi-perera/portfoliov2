import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.9.87/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: #0c0c1d;
          color: #e7e7e7;
          min-height: 100vh;
          line-height: 1.5;
        }

        .image-gradient {
          position: absolute;
          top: 0;
          right: 0;
          opacity: 0.5;
          z-index: -1;
        }

        .layer-blur {
          height: 0;
          width: 30rem;
          position: absolute;
          top: 20%;
          right: 0;
          box-shadow: 700px 15px white;
          rotate: -30deg;
          z-index: -1;
        }

        .container {
          width: 100%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .btn-signing {
          background-color: #a7a7a7;
          color: black;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }

        .btn-signing:hover {
          background-color: white;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: calc(90vh - 6rem);
        }

        .content {
          max-width: 40rem;
          margin-left: 5%;
        }

        .tag-box {
          position: relative;
          width: 18rem;
          height: 2.5rem;
          border-radius: 50px;
          background: linear-gradient(to right, #656565, #7f42a7, #6600c5, #530050);
          background-size: 200%;
          animation: animationGradient 2.5s linear infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }

        @keyframes animationGradient {
          to {
            background-position: 200%;
          }
        }

        .tag-box .tag {
          position: absolute;
          inset: 3px;
          background-color: black;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s ease;
        }

        .tag-box .tag:hover {
          color: #5300a0;
        }

        .content h1 {
          font-size: 4rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin: 2rem 0;
          line-height: 1.2;
          text-shadow: 0 0 10px rgba(128, 128, 128, 0.418);
        }

        .description {
          font-size: 1.2rem;
          letter-spacing: 0.05em;
          max-width: 35rem;
          color: gray;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
        }

        .btn-get-started {
          text-decoration: none;
          border: 1px solid #2a2a2a;
          padding: 0.7rem 1.2rem;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: background-color 0.2s ease;
          color: white;
        }

        .btn-get-started:hover {
          background-color: #1a1a1a;
        }

        .btn-signing-main {
          text-decoration: none;
          background-color: lightgray;
          color: black;
          padding: 0.6rem 2.5rem;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: background-color 0.2s ease;
        }

        .btn-signing-main:hover {
          background-color: gray;
        }

        .robot-3d {
          position: absolute;
          top: 0;
          right: -20%;
        }

        @media (max-width: 1300px) {
          header {
            padding: 1rem 0.5rem;
          }

          .content {
            margin-top: 85%;
          }

          .robot-3d {
            scale: 0.8;
            top: -20%;
            right: 2%;
          }
        }

        @media (max-width: 768px) {
          header {
            padding: 1rem 0.1em;
          }

          nav {
            display: none;
          }

          header h1 {
            font-size: 2rem;
          }

          .btn-signing {
            padding: 0.6rem 1.5rem;
          }

          .content {
            margin-top: 25rem;
          }

          .content h1 {
            font-size: 2.5rem;
          }

          .description {
            font-size: 1rem;
          }

          .btn-get-started {
            font-size: 0.8rem;
            padding: 0.5rem 1.2rem;
          }

          .btn-signing-main {
            font-size: 0.8rem;
            padding: 0.8rem 2rem;
          }
        }
      `}</style>

      <img className="image-gradient" src="gradient.png" alt="gradient" />
      <div className="layer-blur"></div>

      <div className="container">

        <main>
          <div className="content">
            <div className="tag-box">
              <div className="tag">VENUGI PERERA</div>
            </div>
            <h1>
            Welcome to 
            <br>
            </br>
            my Portofolio!
            </h1>
            <p className="description">
            Glimpse of my journey in the world of web development
            </p>
            <div className="buttons">
              <a href="#projects" className="btn-get-started">
                Projects &gt;
              </a>
              <a href="#about" className="btn-signing-main">
                About Me &gt;
              </a>
            </div>
          </div>
        </main>

        <spline-viewer
          class="robot-3d"
          url="https://prod.spline.design/se6Wg9aflk3NRWpo/scene.splinecode"
        ></spline-viewer>
      </div>
    </>
  );
};

export default Hero;
