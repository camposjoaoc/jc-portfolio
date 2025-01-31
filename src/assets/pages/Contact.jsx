import { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import '../styles/contact.scss';
import SubmitButton from "../components/SubmitButton";

function Contact() {
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [state, handleSubmit] = useForm("mnnjvpdb"); //formspree data
    const [copied, setCopied] = useState(false); // copy mail

    useEffect(() => {
        if (state.succeeded) {
            console.log("Ok");
            setShowForm(false); // form ocult
            setFeedbackMessage("Message sent successfully!");

            const timer = setTimeout(() => {
                setShowForm(true); // After 10 seconds, form showing
                setFeedbackMessage(""); //remove feedback message
            }, 10000);

            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    // Função para copiar o e-mail ao clicar
    const handleCopyEmail = () => {
        const email = "joaocanabarrocampos@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Resetar "Copiado!" após 2s
        });
    };

    return (
        <div className="container mid-container">
            <section>
                <div className="container-contact">
                    <h1 className="h1-title">CONTACT</h1>
                    <p className="p-info">Feel free to reach out to me at:</p>
                    {/* Paragraph that copies the email when clicked*/}
                    <p
                        className="p-mail"
                        onClick={handleCopyEmail}
                        title="Click to copy"
                    >
                        {copied ? "Copied!" : "joaocanabarrocampos@gmail.com"}
                    </p>
                    <p className="p-info">or fill out the form below:</p>
                    {showForm ? (
                        <form onSubmit={handleSubmit} className="form-content">
                            <label htmlFor="name" className="label-style">Name</label>
                            <input type="text" id="name" name="name" placeholder="Name" className="input-style" required />

                            <label htmlFor="email" className="label-style">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email" className="input-style" required />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />

                            <label htmlFor="message" className="label-style">Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="Your message" className="input-style" required></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />

                            <SubmitButton label={state.submitting ? "Sending..." : "Send Message"} disabled={state.submitting} />
                        </form>
                    ) :
                        (
                            <p className="feedback-message">{feedbackMessage}</p>
                        )}
                </div>
            </section>
        </div>
    );
}

export default Contact;
