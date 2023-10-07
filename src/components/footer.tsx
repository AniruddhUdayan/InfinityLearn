import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function Footer() {
  return (
    <div
      className={`${poppins.className} bg-white w-full mb-0 py-4 text-black text-sm`}
    >
      <div className="w-[90%] m-auto">
        <div className="flex md:flex-row flex-col">
          <div className="md:basis-2/4 my-4">
            <Image
              src="/images/footer-logo.svg"
              width="250"
              height="250"
              alt="brand logo"
              className="my-image-footer"
            />
            <div className="md:w-[80%] mt-6 flex flex-col gap-4 text-[16px] font-[500]">
              <div className="flex flex-row gap-4">
                <FaPhoneAlt className="" />
                <p>+91 9999999999</p>
              </div>
              <hr></hr>
              <div className="flex flex-row gap-4">
                <FaEnvelope className="mt-1" />
                <p>info@infinitylearn.com</p>
              </div>
              <hr></hr>
              <div className="flex flex-row gap-4">
                <ImLocation className="min-w-[15px] mt-1 p-0" />
                <p>
                  6th Floor, NCC Building, Durgamma Cheruvu Road, Vittal Rao
                  Nagar, HITEC City, Hyderabad, Telangana 500081.
                </p>
              </div>

              {/* <div className="flex flex-row gap-4">
                <BsFillBuildingFill className="min-w-[12px] mt-1" />
                <p>Sri Chaitanya College Admission Enquiries 040-66060606</p>
              </div>

              <div className="flex flex-row gap-4">
                <BsFillBuildingFill className="min-w-[12px] mt-1" />
                <p>
                  Sri Chaitanya School Admission Enquiries 040-71045045 &
                  040-44600600 Ext 401, 402 & 425
                </p>
              </div> */}
            </div>

            <div className="flex flex-row gap-4 mt-4">
              <Link href="https://www.facebook.com/InfinityLearn.SriChaitanya/">
                {" "}
                <Image
                  src="/images/facebook.png"
                  alt="Your Logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2FInfinityLearn_">
                {" "}
                <Image
                  src="/images/twitter.png"
                  alt="Your Logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.youtube.com/c/InfinityLearnEdu">
                {" "}
                <Image
                  src="/images/youtube.png"
                  alt="Your Logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/pintrest.png"
                  alt="Your Logo"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://www.linkedin.com/company/infinity-learn-by-sri-chaitanya/">
                {" "}
                <Image
                  src="/images/linkdin.png"
                  alt="Your Logo"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div className="md:basis-2/4 mb-4 mt-6">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row  text-[16px]  font-normal mt-4">
                <div className="flex flex-col gap-3">
                  <div className="font-[600] text-[18px]">company</div>
                  <Link href="https://infinitylearn.com/about">
                    <p>about us</p>
                  </Link>
                  <Link href="https://infinitylearn.com/leadership">
                    <p>our team</p>
                  </Link>
                  <Link href="https://infinitylearn.com/life-at-infinitylearn">
                    <p>Life at Infinity Learn</p>
                  </Link>
                  <Link href="https://infinitylearn.com/life-at-infinitylearn">
                    <p>IL in the news</p>
                  </Link>
                  <Link href="https://infinitylearn.com/surge/blog/">
                    <p>blog</p>
                  </Link>
                  <Link href="https://infinitylearn.skillate.com/">
                    <p>careers</p>
                  </Link>
                  <Link href="https://infinitylearn.com/teacher">
                    <p>become a Teacher</p>
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-[600] text-[18px]">support</div>
                  <Link href="/">
                    <p>get in touch</p>
                  </Link>
                  <Link href="https://infinitylearn.com/privacy">
                    <p>privacy policy</p>
                  </Link>
                  <Link href="https://infinitylearn.com/refund-policy">
                    <p>refund policy</p>
                  </Link>
                  <Link href="/">
                    <p>takedown policy</p>
                  </Link>
                  <Link href="https://infinitylearn.com/terms">
                    <p>terms and conditions</p>
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-[600] text-[18px]">courses</div>
                  <Link href="/">
                    <p>IIT JEE</p>
                  </Link>
                  <Link href="/">
                    <p>JEE Main</p>
                  </Link>
                  <Link href="/">
                    <p>JEE Advanced</p>
                  </Link>
                  <Link href="/">
                    <p>IIT JEE Foundation</p>
                  </Link>
                  <Link href="/">
                    <p>NEET</p>
                  </Link>
                  <Link href="/">
                    <p>NEET Foundation</p>
                  </Link>
                  <Link href="/">
                    <p>CUET</p>
                  </Link>
                  <Link href="/">
                    <p>CBSE tutions</p>
                  </Link>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-[600] text-[18px]">more</div>
                  <Link href="/">
                    <p>IL for schools</p>
                  </Link>
                  <Link href="/">
                    <p>knowledge hubs</p>
                  </Link>
                  <Link href="/">
                    <p>scholarships</p>
                  </Link>
                  <Link href="/">
                    <p>hall of fame</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 flex flex-col gap-[40px]">
          <h2 className={`md:text-2xl sm:text-xl text-lg font-[700]`}>
            free study <span className="text-[#007BFF]">material</span>
          </h2>
          <div className="flex md:flex-row flex-col gap-2 justify-between text-[16px] font-light">
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">JEE</div>

              <Link href="/">
                <p>JEE Mock Tests</p>
              </Link>
              <Link href="/">
                <p>JEE study guide</p>
              </Link>
              <Link href="/">
                <p>JEE Revision Notes</p>
              </Link>
              <Link href="/">
                <p>JEE Important Questions</p>
              </Link>
              <Link href="/">
                <p>JEE Sample Papers</p>
              </Link>
              <Link href="/">
                <p>{`JEE Previous Year's Papers`}</p>
              </Link>
            </div>
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">NEET</div>

              <Link href="/">
                <p>NEET previous year’s papers</p>
              </Link>
              <Link href="/">
                <p>NEET important questions</p>
              </Link>
              <Link href="/">
                <p>NEET sample papers</p>
              </Link>
              <Link href="/">
                <p>NEET revision notes</p>
              </Link>
              <Link href="/">
                <p>NEET study guide</p>
              </Link>
              <Link href="/">
                <p>NEET mock tests</p>
              </Link>
            </div>
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">CUET</div>

              <Link href="/">
                <p>CUET previous year’s papers</p>
              </Link>
              <Link href="/">
                <p>CUET important questions</p>
              </Link>
              <Link href="/">
                <p>CUET sample papers</p>
              </Link>
              <Link href="/">
                <p>CUET revision notes</p>
              </Link>
              <Link href="/">
                <p>CUET study guide</p>
              </Link>
              <Link href="/">
                <p>CUET mock tests</p>
              </Link>
            </div>
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">CBSE</div>

              <Link href="/">
                <p>CBSE previous year’s papers</p>
              </Link>
              <Link href="/">
                <p>CBSE important questions</p>
              </Link>
              <Link href="/">
                <p>CBSE sample papers</p>
              </Link>
              <Link href="/">
                <p>CBSE revision notes</p>
              </Link>
              <Link href="/">
                <p>CBSE study guide</p>
              </Link>
              <Link href="/">
                <p>CBSE mock tests</p>
              </Link>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-2 justify-between text-[16px] font-light">
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">
                Popular Books
              </div>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/">
                HC Verma Part 1
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/">
                HC Verma Part 2
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/maths/">
                RS Agarwal
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/biology/">
                RD Sharma
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/physics/">
                Lakhmir Singh
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/chemistry/">
                DK Goel
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/">
                Sandeep Garg
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/maths/">
                TS Grewal
              </a>
            </div>
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">
                NCERT solutions
              </div>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/">
                Class 12 NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/maths/">
                Class 11 NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/biology/">
                Class 10 NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/physics/">
                Class 9 NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/chemistry/">
                Class 8 NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/">
                Class 7 NCERT Solutions
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/maths/">
                Class 6 NCERT Solutions
              </a>
            </div>
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">
                NCERT exempler
              </div>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/">
                Class 12 NCERT Exemplar
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/">
                Class 11 NCERT Exemplar
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/maths/">
                Class 10 NCERT Exemplar
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/biology/">
                Class 9 NCERT Exemplar
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/physics/">
                Class 8 NCERT Exemplar
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/">
                Class 7 NCERT Exemplar
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-11/maths/">
                Class 6 NCERT Exemplar
              </a>
            </div>
            <div className="flex flex-col gap-1 font-[400]">
              <div className="font-[600] text-[18px] mb-[20px]">
                State Board
              </div>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/">
                Rajasthan State Board
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/">
                West Bengal State Board
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/maths/">
                Gujarat State Board
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/biology/">
                Telengana State Board
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/physics/">
                Andhra Pradesh State Board
              </a>
              <a href="https://infinitylearn.com/surge/study-materials/ncert-solutions/class-12/chemistry/">
                Uttar Pradesh State Board
              </a>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-2 justify-between text-[16px] font-light">
          <div className="flex flex-col gap-1 font-[400]">
            <div className="font-[600] text-[18px] mb-[20px]">Subject</div>
            <a href="">Maths</a>
            <a href="">Science</a>
            <a href="">Physics</a>
            <a href="">Chemistry</a>
            <a href="">Economics</a>
            <a href="">Accounting</a>
            <a href="">Business Studies</a>
          </div>
        </div>

        <hr className="mt-[40px] h-px border-0 bg-slate-500" />
        <p className="text-xs m-auto mt-[20px] text-center font-extralight">
          Copyright &copy; 2021. All Rights Reserved 2021
        </p>
      </div>
    </div>
  );
}

export default Footer;
