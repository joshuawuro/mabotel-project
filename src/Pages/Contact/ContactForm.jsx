import { useState } from "react";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/wassamanyea@gmail.com", {
        method: "POST",
        body: formData,
      });
      setPopupVisible(true);
      e.target.reset();
    } catch (error) {
      console.error("Form submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[--white] border shadow-md rounded-lg p-6 md:w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="text-[--header-gray] block font-medium mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full border-gray-300 shadow-sm px-3 py-2 border sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="text-[--header-gray] block font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border-gray-300 shadow-sm px-3 py-2 border sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="text-[--header-gray] block font-medium mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            className="w-full border-gray-300 shadow-sm px-3 py-2 border sm:text-sm active:border-[--color-red]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md text-white font-bold ${
            isSubmitting
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[--orange-light] hover:bg-[--orange]"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {popupVisible && (
        <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
          Thank you for reaching out to us! We will get back to you soon.
        </div>
      )}
    </div>
  );
}

export default ContactForm;
