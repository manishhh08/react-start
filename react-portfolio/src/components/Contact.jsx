import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contactme">
        <div className="contacthere">Contact Me</div>
        <div className="contactlogo">
          <span>
            <a href="https://www.linkedin.com/in/manishlama99/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
          <span>
            <a href="https://github.com/manishhh08" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </span>
          <span>
            <a href="#home">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </span>
          <span>
            <a href="#home">
              <i className="fa-solid fa-mobile"></i>
            </a>
          </span>
        </div>
        <div>
          <h3>OR</h3>
        </div>
        <div className="contactinput">
          <div className="inputarea" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="abcd@gmail.com"
              required=""
              style={{
                color: "white",
                background: "transparent",
                border: "0px",
                height: "40px",
                background: "black",
                borderRadius: "40px",
                paddinLeft: "10px",
                content: "wrap",
              }}
            />
            <button
              style={{
                background: "transparent",
                border: "0px",
                position: "absolute",
                right: "5px",
                color: "orange",
                top: "7px",
                fontSize: "1.5rem",
              }}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
            <label htmlFor="input"></label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
