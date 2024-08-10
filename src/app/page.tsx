import Image from "next/image";
import { Sidebar } from "react-pro-sidebar";
import MySidebar from "./components/sidebar";
import Display from "./components/display";

import { MdAppRegistration } from "react-icons/md";
import RegistrationForm from "./components/registrationform";

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-200">
    <div className="h-full">
      <MySidebar />
    </div>
    <div className="flex flex-1 p-5">
      <div className="w-1/2 bg-slate-100 rounded-l-3xl">
        <Display />
      </div>
      <div className="h-full bg-slate-100 rounded-r-3xl pr-8">
        <RegistrationForm />
      </div>
    </div>
  </div>
  );
}


// const [qwerty, setQwerty] = useState({
//   Address: '',
//   Block: '',
//   CourseFee: '',
//   CourseInterestedIn: '',
//   FatherName1: '',
//   FatherName2: '',
//   General: '',
//   MotherName1: '',
//   MotherName2: '',
//   Name1: '',
//   Name2: '',
//   OBC: '',
//   PH: '',
//   SC: '',
//   ST: '',
//   State: '',
//   Timin: '',
//   Village: '',
//   day: '',
//   district: '',
//   email: '',
//   employed: false,
//   employedorganization: '',
//   female: false,
//   male: false,
//   mobile: '',
//   month: '',
//   others: '',
//   others_occupation: '',
//   payscale: '',
//   phone: '',
//   pincode: '',
//   school: '',
//   student: false,
//   subdivision: '',
//   unemployed: false,
//   year: ''
// });


// const handleChange = (e: any) => {
//   const { name, value, type, checked } = e.target;
//   setQwerty((prevState) => ({
//     ...prevState,
//     [name]: type === 'checkbox' ? checked : value
//   }));
// };