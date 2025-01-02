import { useState, useEffect } from "react";
import '../styles/contact.scss';
import SubmitButton from "../components/SubmitButton";
function Contact() {
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setFeedbackMessage("Message sent!"); // Define a mensagem de feedback
    };

    useEffect(() => {
        if (feedbackMessage) {
            const timer = setTimeout(() => setFeedbackMessage(""), 10000); // Remove a mensagem após 10 segundos
            return () => clearTimeout(timer); // Limpa o timer ao desmontar ou alterar o estado
        }
    }, [feedbackMessage]); // Executa sempre que feedbackMessage mudar
    return (
        <div className="container mid-container">
            <section>
                <div className="container-contact">
                    <h1 className="h1-title">CONTACT</h1>
                    <p className="p-info">Feel free to reach out to me at:</p>
                    <p className="p-mail"><a href="mailto:joaocampos963@icloud.com">joaocampos963@icloud.com</a></p>
                    <p className="p-info">or fill out the form below:</p>

                    <form action="mailto:joaocampos963@icloud.com" method="POST" encType="text/plain" className="form-content" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="label-style">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" className="input-style" required />

                        <label htmlFor="email" className="label-style">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" className="input-style" required />

                        <label htmlFor="message" className="label-style">Message</label>
                        <textarea id="message" name="message" rows="4" placeholder="Your message" className="input-style" required></textarea>

                        <SubmitButton label="Send Message" />
                    </form>
                    {feedbackMessage && (
                        <p className="feedback-message">{feedbackMessage}</p>
                    )}
                </div>
            </section>
        </div>
    )
}
export default Contact;