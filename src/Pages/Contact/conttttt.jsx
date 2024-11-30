import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import PopupMessage from "./PopupMessage"; // Import the PopupMessage component

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      const userId = process.env.REACT_APP_EMAIL_SERVICE_ID;
      const TemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
      const UserId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;

      setIsSubmitting(true);
      emailjs
        .send(
          userId, // Replace with your EmailJS service ID
          TemplateId, // Replace with your EmailJS template ID
          values,
          UserId // Replace with your EmailJS user ID
        )
        .then(
          () => {
            setIsSubmitting(false);
            setPopupVisible(true);
            resetForm();
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            setIsSubmitting(false);
          }
        );
    },
  });

  return (
    <div className="bg-[--white] border shadow-md rounded-lg p-6 md:w-full">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full border-[--text-light-gray] shadow-sm px-3 py-2 border sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-[--color-red] text-sm border-[--color-red]">
              {formik.errors.name}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-[--text-light-gray] shadow-sm px-3 py-2 border sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-[--color-red] border-[--color-red] text-sm">
              {formik.errors.email}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border-[--text-light-gray] shadow-sm px-3 py-2 border sm:text-sm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <p className="text-[--color-red] border-[--color-red] text-sm">
              {formik.errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md text-[white] font-bold ${
            isSubmitting
              ? "bg-[--text-light-gray] cursor-not-allowed"
              : "bg-[--orange-light] hover:bg-[--orange]"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {popupVisible && (
        <PopupMessage
          message="Thank you for reaching out to us! We will get back to you soon."
          onClose={() => setPopupVisible(false)}
        />
      )}
    </div>
  );
};

export default ContactForm;
