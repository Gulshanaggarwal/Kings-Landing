import React from "react";
import { Link } from "react-router-dom";

export default function PolicyContent(){
  return (
    <section className="px-4 py-8  bg-gray-100 text-gray-900 sm:px-16">
      <div>
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <Link to="/" className="underline text-blue-500">
            Go back to main page
          </Link>
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-bold py-2">Privacy Policy</h2>
          <p className="leading-8">
            Kings Landing take cares of your privacy, We are always committed to
            protect your privacy.Our privacy policy shows how we collect, use
            your personal informations such as Name, PhoneNumber and Email etc.
          </p>
          <p className="py-2">
            {" "}
            <span className="text-red-500 font-medium leading-8">Note: </span>We do not
            sell your personal information such as your name and contact
            information - to third parties to use for their own marketing
            purposes.
          </p>
          <p className="py-2">
            We collect the information for following purposes:
          </p>
        </div>
        <ul className="space-y-4">
          <li>
            <span className="list-disc font-medium">To provide our services</span>
            <p className="py-2 leading-8">
              To provide you the services we offer on the kings landing Platform
              and make the kings landing Platform available to the public,
              communicate with you about your use of the kings landing Platform,
              respond to your inquiries, provide troubleshooting, and for other
              customer service purposes.
            </p>
          </li>
          <li>
            <span className="list-disc font-medium">Personalization</span>
            <p className="py-2 leading-8">
              To tailor the content and information that we may send or display
              to you in the kings landing Platform, to suggest followers and
              content, to offer location customization, and personalized help
              and instructions, and to otherwise personalize your experiences
              while using the kings landing Platform.
            </p>
          </li>
          <li>
            <span className="list-disc font-medium">Advertising</span>
            <p className="py-2 leading-8">
              To display interest-based advertising to you in the Quora
              Platform, to improve our advertising and measurement systems so we
              can show you relevant ads, to pre-fill forms in ads, and to
              measure the effectiveness and reach of ads and services. For more
              information.
            </p>
          </li>
          <li>
            <span className="list-disc font-medium">Marketing and Promotions</span>
            <p className="py-2 leading-8">
              For marketing and promotional purposes, such as to send you news
              and newsletters, special offers, and promotions, or to otherwise
              contact you about products or information we think may interest
              you, including information about third-party products and
              services.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
