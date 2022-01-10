import NewHeader from "../ExtraUtility/newheader";
import  Footer  from "../Footer/footer";
import Logo from "../Logo/logo";
import ScrollTop from "../ScrollTop/scrollTop";
import PolicyContent  from "./policyContent";

export default function PrivacyPolicy(){
  //useScrollRestoration(); //scroll restoration;

  return (
    <div>
      <header className="bg-gray-900 p-4">
        <Logo/>
      </header>
      <PolicyContent />
      <Footer />
      <ScrollTop/>
    </div>
  );
};
