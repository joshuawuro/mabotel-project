import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";
import ContactText from "./ContactText";

function Contact() {
  return (
    <>
      <ContactHero />
      <div className="max-w-[1240px] mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold py-2 text-[--text-gray]">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row max-w-[1000px] gap-20 items-center">
          <ContactText />
        </div>
      </div>
    </>
  );
}

export default Contact;
