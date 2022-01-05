import React from "react";
import Contact from "../Contact";
import Footer from "../Footer/footer";
import About from "./about";
import Gallery from "./gallery";
import Header from "./header";
import GalleryPreview from "./preview";
import SideNav from "./sideNav";
import Testimonial from "./testimonial";
import Loader from "../Loading";
import Notification from "../Notifications";
import Services from "./services";
import Howitworks from "./howitworks";
import ScrollTop from "../ScrollTop/scrollTop";
import Login from "../LoginRegister/login";
import Register from "../LoginRegister/Register/register"
import RegisterOTP from "../LoginRegister/Register/registerOTP";
import { useSelector } from "react-redux";
import useVerifyJwt from "../../Hooks/verifyJwt";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const isLoginWindow = useSelector((state) => state.login.LoginWindow);
  const isSideNav = useSelector((state) => state.sidenavbar.sideNav);
  const isRegisterWindow = useSelector((state) => state.register.registerWindow);
  const isregisterOTPWindow = useSelector((state) => state.registerOTP.registerOTPWindow)

  const { isLoading, data, error } = useVerifyJwt();
  const navigate = useNavigate("");
  if (isLoading) return <h1>Loading....</h1>

  if (data && data.status === "ok") {
    navigate("/dashboard");
  }

  return (
    <div className="bg-gray-200 overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Howitworks />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
      {isSideNav && (<SideNav />)}
      <GalleryPreview />
      {isLoginWindow && (<Login />)}
      {isRegisterWindow && (<Register />)}
      {isregisterOTPWindow && (<RegisterOTP />)}
      <Loader />
      <Notification />
      <ScrollTop />
    </div>
  );
}
