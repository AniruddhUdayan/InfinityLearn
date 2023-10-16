// import Footer from "@/components/footer";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "@/components/homePage";
import { Metadata } from 'next';
export const metadata:Metadata = {
  title:"Infinity Learn Online & Offline Courses for Class 6 to 12, NEET/Medical, JEE Main, Advanced, NEET & Olympiad",
  description:"India's Best online & offline Coaching for NEET (UG), IIT JEE Main, JEE Advanced, Class 6 to 12, NTSE, KVPY Olympiad & Other Competitive Exams. Enroll Now! Unlock Your Academic Potential with Infinity Learn",
  openGraph:{
    title: "Infinity Learn Online & Offline Courses for Class 6 to 12, NEET/Medical, JEE Main, Advanced, NEET & Olympiad",
    description:"India's Best online & offline Coaching for NEET (UG), IIT JEE Main, JEE Advanced, Class 6 to 12, NTSE, KVPY Olympiad & Other Competitive Exams. Enroll Now! Unlock Your Academic Potential with Infinity Learn",
    type:"website",
    siteName:"Infinity Learn",
  }
};
export default function Home() {
  return (
    <>
      <div className=" no-scrollbar poppins max-md:w-full">
        <HomePage />
      </div>
    </>
  );
}
