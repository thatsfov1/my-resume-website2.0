import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { TbAlertOctagon } from "react-icons/tb";

const ContactSection = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (data: any) => {
    if (form.current) {
      setIsLoading(true);
      toast.loading("Please wait...", {
        id: "loading",
      });
      try {
        await emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          data,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
        setIsLoading(false);
        toast.dismiss("loading");
        toast.success("Successfully sent");
        setTimeout(() => {
          reset();
        }, [2000]);
      } catch (e) {
        setIsLoading(false);
        console.log(form.current);

        console.log(e);
        toast.dismiss("loading");
        toast.error("I didn't receive your message");
      }
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <div className="h-screen max-w-[1280px] p-16 flex justify-center ">
      <div className="bg-blue-palette-100 pt-5 px-4 rounded-xl flex flex-col items-center relative">
        <h1 className="text-4xl font-extrabold  text-blue-palette-600 mb-3">
          Contact me
        </h1>
        <form
          ref={form}
          className="flex flex-col gap-4 p-8 bg-white "
          onSubmit={handleSubmit(sendEmail)}
        >
          {errors.name && (
            <div className="validation-error">
              <TbAlertOctagon /> <>{errors.name?.message}</>
            </div>
          )}
          <input
            {...register("name", { required: "Name is required" })}
            className="focus-border"
            type="text"
            placeholder="Name"
            name="name"
          />
          {errors.email && (
            <div className="validation-error">
              <TbAlertOctagon /> <>{errors.email?.message}</>
            </div>
          )}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Email is incorrect",
              },
            })}
            className="focus-border"
            type="email"
            placeholder="john@gmail.com"
            name="email"
          />
          {errors.message && (
            <div className="validation-error">
              <TbAlertOctagon /> <>{errors.message?.message}</>
            </div>
          )}
          <textarea
            {...register("message", { required: "Type your message" })}
            className="focus-border h-[200px] resize-none "
            placeholder="Your message"
            name="message"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-palette-600 text-blue-palette-100 p-3 w-[310px] transition-all duration-[0.3s] ease-[ease] rounded-lg mt-6
             hover:scale-105 active:scale-95"
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
