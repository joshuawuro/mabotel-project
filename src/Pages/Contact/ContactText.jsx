import {
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTikTok,
} from "react-icons/ai";

function ContactText() {
  return (
    <>
      <div>
        <p className="text-[--text-light-gray]">
          We'd love to hear from you! Whether you have questions about the
          Wassaman Youth Excellence Awards, want to nominate a young achiever,
          or are interested in sponsorship opportunities, please feel free to
          reach out. Our team is here to assist you.
        </p>
        <div className="pt-5">
          <div className="flex items-top gap-5">
            <AiFillMail size={25} className="text-[--orange]" />
            <div>
              <h1 className="uppercase font-semibold text-[--orange]">
                Email Address
              </h1>
              <p className="text-[--text-light-gray]">Wassamanyea@gmail.com</p>
            </div>
          </div>
          <div className="flex items-top gap-5 my-6">
            <AiFillPhone size={25} className="text-[--orange]" />
            <div>
              <h1 className="uppercase font-semibold text-[--orange]">
                phone Nunmber
              </h1>
              <p className="text-[--text-light-gray] ">
                054 0387567 || 020 140 7917
              </p>
            </div>
          </div>
          <div className="flex items-top gap-5">
            <AiFillEnvironment size={25} className="text-[--orange]" />
            <div>
              <h1 className="uppercase font-semibold text-[--orange]">
                Locate us
              </h1>
              <p className="text-[--text-light-gray] ">
                Our office is located at: <br />
                Address: Mabotel Honours <br />
                Network,1234 Youth Avenue, <br />
                Wassa Central, Wassaman <br />
                Region, Ghana.
              </p>
            </div>
          </div>
          <div className="pt-6">
            <h1 className="uppercase font-semibold text-[--orange]">
              Follow us on social media
            </h1>
            <div className="flex">
              <AiFillFacebook size={25} className="text-[--orange]" />
              <AiFillInstagram size={25} className="text-[--orange]" />
              <AiFillTikTok size={25} className="text-[--orange]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactText;
