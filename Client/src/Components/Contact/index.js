import React, { useState } from "react";
import doodle from "../../Images/doodle.svg";
import { createAlert } from "../../features/notificationSlice"
import { useDispatch } from 'react-redux'
import { createLoaders, destroyLoaders } from "../../features/loadingSlice"


let emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

export default function Contact() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();


  // handle Form submit


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (fullName.length > 0 && email.length > 0 && message.length > 0 && emailRegex.test(email)) {

      // apply loading action

      dispatch(createLoaders())

      window.grecaptcha.ready(() => window.grecaptcha.execute('6LcfsV0dAAAAACYTpiAYDzxLT1ZnhsBL5JjGEFdK', { action: 'submit' }).then(async function (token) {

        // Add your logic to submit to your backend server here.


        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fullName,
            email,
            message,
            token

          })
        }

        try {
          const response = await fetch("http://localhost:5000/contact-form", option);
          const data = await response.json();
          // destroy loaders

          dispatch(destroyLoaders());

          if (data.status === "ok") {
            dispatch(createAlert({
              message: "Success! we will contact you very soon!",
              type: "success"
            }))
          }
          else {
            dispatch(createAlert({
              message: "server error, Try again!",
              type: "error"
            }))
          }

        } catch (error) {
          //destro loaders
          dispatch(destroyLoaders());
          dispatch(createAlert({
            message: "Oops! server error, Try again",
            type: "error"
          }))

        }
      }))




    }
    else {
      if (fullName.length === 0 || email.length === 0 || message.length === 0) {
        dispatch(createAlert({
          message: "Fields cannot be empty!",
          type: "info"
        }))
      }
      else if (!emailRegex.test(email)) {
        dispatch(createAlert({
          message: "Enter a valid email address!",
          type: "info"
        }))
      }
    }

  }








  return (
    <section
      className="grid max-w-screen-xl  grid-cols-1 gap-8 px-4 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
      id="contact"
    >
      <div className="flex flex-col justify-between space-y-10">
        <div className="space-y-2">
          <h2 className="text-base font-bold leading-tight after260px:text-2xl HomePageAfter330px:text-3xl lg:text-5xl">
            Get In Touch
          </h2>
          <div className="text-sm HomePageAfter330px:text-xl">
            We are always open!
          </div>
        </div>
        <img
          src={doodle}
          alt="Contact our customer support"
          className="p-6 h-52 transform scale-125 md:h-64"
        />
      </div>
      <form className="space-y-6 ng-untouched ng-pristine ng-valid">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full px-2 py-1 rounded text-sm after260px:py-2 border-2 outline-none focus:border-gray-900"
            required
            onChange={(event) => setFullName(event.target.value.trim())}

          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-2 py-1 rounded text-sm after260px:py-2 border-2 outline-none focus:border-gray-900"
            required
            onChange={(event) => setEmail(event.target.value.trim())}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-2 py-2 rounded  text-sm border-2 outline-none focus:border-gray-900"
            required
            onChange={(event) => setMessage(event.target.value.trim())}
          ></textarea>
        </div>
        <button
          type="submit"
          className="g-recaptcha w-full p-3 text-xs font-bold tracking-wide uppercase rounded bg-gray-900 text-white HomePageAfter330px:text-sm"
          onClick={handleSubmit}
          data-sitekey="6LcfsV0dAAAAACYTpiAYDzxLT1ZnhsBL5JjGEFdK"

        >
          Send Message
        </button>
      </form>
    </section>
  );
};
