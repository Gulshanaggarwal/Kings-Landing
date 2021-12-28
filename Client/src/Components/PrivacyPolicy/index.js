import NewHeader from "../ExtraUtility/newheader";
import  Footer  from "../Footer/footer";
import ScrollTop from "../ScrollTop/scrollTop";
import PolicyContent  from "./policyContent";

export default function PrivacyPolicy(){
  //useScrollRestoration(); //scroll restoration;

  return (
    <div>
      <NewHeader />
      <PolicyContent />
      <Footer />
      <ScrollTop/>
    </div>
  );
};
