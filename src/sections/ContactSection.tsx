import { useState } from "react";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const ContactSection = () => {
    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
  
    const handleChange = (e) => {
      setForm({...form, [e.target.name]:e.target.value})
    }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    toast.loading('Please wait...',{
      id:"loading"
    })
    
    try {
       await emailjs.send(
           import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
           import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name:form.name,
                to_name:'Yevhenii',
                from_email:form.email,
                to_email:'evgkulikovskyy@gmail.com',
                message:form.message
            },
           import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
           
        )

        setIsLoading(false)
        
        toast.success('Successfully sent')
        setTimeout(()=>{
            setForm({name:'', email:'', message: ''})
        },[2000])

    }catch (e) {
        setIsLoading(false)
        console.log(e)
        toast.dismiss("loading")
        toast.error("I didn't receive your message")
    }
  }
  
    return (
        <div className="bg-blue-palette-100 py-5 px-2 rounded-xl">
        <h1 className="text-4xl font-extrabold  text-blue-palette-600 mb-3">Contact me</h1>
        <form className="flex flex-col gap-4 p-8 bg-white" onSubmit={handleSubmit}>
          <input 
          className="p-2 rounded-lg" type="text"
           placeholder="Name" 
           required
           name='name'
           value={form.name}
            onChange={handleChange}/>
          <input className="p-2 rounded-lg"
           type="email" placeholder="john@gmail.com" required
           name='email'
           value={form.email} onChange={handleChange}/>
          <textarea className="p-2 rounded-lg h-[200px] resize-none"
           placeholder="Your message" required name='message' value={form.message}
           onChange={handleChange}/>
          <button disabled={isLoading} type="submit" className="bg-blue-palette-600 text-blue-palette-100 p-5 w-full rounded-lg">
          {isLoading ? 'Sending...' : 'Send message'}
            </button>
        </form>
        </div>
    );
  };
  
export default ContactSection;