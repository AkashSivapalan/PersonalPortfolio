import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import styled from "styled-components";



function Contact() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_txshaph",
        "template_hm8cwle",
        form.current,
        "Ti5r3ZOI2t8PF3awD"
      )
      .then(
        (result) => {
              alert("Messaged Sent!!!")
        },
        (error) => {
          alert("Send a proper message")
        }
      );
  };

  return (
    <div>
      <div className="page">
        <p className="mail">
          My inbox is open if you are interested in chatting or want to disucss project oppurutnities. My email is:
        </p>
        <p className="mail">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          akashsivapalan@gmail.com
        </p>

        <p className="mail">
          You can also send a message to me directly with the form below or
          check out my other socials to contact me!{" "}
        </p>
        <p className="mail">↓↓↓</p>
        <div className="mailForm">
          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </StyledContactForm>
        </div>
        <div className="button-group">
          <button
            className="LinkedIn"
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/akash-sivapalan-309a85186/"
              )
            }
          >
            <i class="fa-brands fa-linkedin fa-5x"></i>
          </button>
          <button
            className="GitHub"
            onClick={() => openInNewTab("https://github.com/AkashSivapalan")}
          >
            <i class="fa-brands fa-github fa-5x"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
export default Contact;
