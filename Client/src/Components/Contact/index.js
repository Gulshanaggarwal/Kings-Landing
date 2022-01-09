import React, { useState } from "react";
import { useMutation } from "react-query";
import doodle from "../../Images/doodle.svg";
import { createAlert } from "../../features/notificationSlice"
import { useDispatch } from 'react-redux'
import { createLoaders, destroyLoaders } from "../../features/loadingSlice"


const handleForm = (body) => {
  return fetch("http://localhost:5000/contact-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(res=>res.json())
}

export default function Contact() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();


  const mutation = useMutation((body) => handleForm(body), {
    onSuccess(data) {
      dispatch(destroyLoaders());
      const { message, status } = data;
      if (status === "ok") {

        // set field values to empty
        setFullName("");
        setEmail("");
        setMessage("");

        // send a notification
        dispatch(createAlert({
          message,
          type: "success"
        }))
      }
      else {
        dispatch(createAlert({
          message,
          type: "error"
        }))
      }
    },
    onError() {
      dispatch(destroyLoaders());
      dispatch(createAlert(
        {
          message: "Error occurred try again!",
          type: "error"
        }
      ))
    }
  })



  // handle Form submit


  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(createLoaders());
    await mutation.mutate({ fullName, email, message })


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
          className="w-full p-3 text-xs font-bold tracking-wide uppercase rounded bg-gray-900 text-white HomePageAfter330px:text-sm"
          onClick={handleSubmit}

        >
          Send Message
        </button>
      </form>
    </section>
  );
};
