import user_Ramesh from "../testmoUserImages/user_ramesh_meena.jpg";
import user_abhishek from "../testmoUserImages/user_abhishek.jpg";
import user_devraj from "../testmoUserImages/user_devraj.jpg";

export const testimonialData = [
    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 myslides">
      <img
        src={user_devraj}
        alt="user_devraj"
        className="w-10  rounded-full object- after260px:w-14 h-14"
      />
      <blockquote className="max-w-lg text-sm italic font-medium text-center after260px:text-base">
        "They provide preety decent facilities and my center was preety close to the coaching center hence save lot of time to commute!"
      </blockquote>
      <div className="text-center text-xs after260px:text-sm">
        <p>- Devraj</p>
      </div>
    </div>,
    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 myslides">
      <img
        src={user_abhishek}
        alt="user_abhishek"
        className="w-10  rounded-full object- after260px:w-14 h-14"
      />
      <blockquote className="max-w-lg text-sm italic font-medium text-center after260px:text-base">
        "Awesome place to stay, all amenities were provide like on time water, proper electricity and laundry services"
      </blockquote>
      <div className="text-center text-xs after260px:text-sm">
        <p>- Abhishek saini</p>
      </div>
    </div>,
    <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 myslides">
      <img
        src={user_Ramesh}
        alt="user_Ramesh"
        className="w-10  rounded-full object- after260px:w-14 h-14"
      />
      <blockquote className="max-w-lg text-sm italic font-medium text-center after260px:text-base">
        "I remember the guard were quite strict but maintained privacy of every student and not indulging in any other activity overall I would recommend this place as it is quite decent"
      </blockquote>
      <div className="text-center text-xs after260px:text-sm">
        <p>- Ramesh Meena</p>
      </div>
    </div>,
  ];