import "../styles/about.scss";
import DownloadButton from "../components/downloadButton";
import img_about_cl from "../img/img-about-cl.jpeg";
import img_about_hr from "../img/img-about-hr.jpeg";
import img_about_mc from "../img/img-about-mc.jpeg";
function About() {
    return (
        <div className="container mid-container">
            <div className="container-about">
                <h1 className="about-title">ABOUT ME</h1>
                <p className="about-info">
                    Hello! My name is João, and I&apos;m starting my journey in the exciting world of front-end development.
                    I recently completed a front-end development course at Sundsgården School in Sweden 🇸🇪, where I gained valuable hands-on experience and foundational knowledge in web technologies.
                    Now, I&apos;m actively seeking opportunities to contribute and grow as a front-end developer, bringing creativity and technical skills to impactful projects.
                </p>
                <h2 className="main-title">Work Experience</h2>
                <div>
                    <p className="text-info">Front-end Developer | Sweden | Freelancer | 2025 - present.</p>
                    <p className="text-info">Software Test Engineer | Brazil | Compass Uol | 2021 - 2023</p>
                </div>
                <h2 className="main-title">Education</h2>
                <div>
                    <p className="text-info">Back-end Developer | Sundsgården | Sweden | in progress.</p>
                    <p className="text-info">Front-end Developer | Sundsgården | Sweden | 2024 - 2025</p>
                    <p className="text-info">English for Professional Purpose | Malmö Universitet | Sweden | 2024 - 2025</p>
                    <p className="text-info">Bachelor Degree in Systems Analysis and Development | Brazil | 2016 - 2018</p>
                </div>
                <h2 className="main-title">Testimonials</h2>
                <div>
                    <img src={img_about_mc} alt="" className="img-person-style " />
                </div>
                <p className="text-info testimonials">
                    “João was one of my participants in the course IT: Front-end Developer during the fall semester 2024-2025.
                    During the course, Joao showed a great interest for learning to code. He was dedicated to his studies, eager to learn, and really invested his energy into learning as much as he could.
                    This dedication could easily be seen in his assignments. He turned in his assignments on time and with well written and thought-out code.
                    Even when the course got more difficult, Joao always approached each situation calmly and with a positive attitude.
                    He was happy to help any other participant that needed it and was patient with those who needed help.
                    It was an absolute joy to have Joao in my course and I wish him all the best in the future. I hope our paths cross again!”
                    <span className="span-style">Michelle Andersson, Course Coordinator, IT: Front-end Developer, Sundsgården Folkhögskola.</span>
                </p>
                <div>
                    <img src={img_about_cl} alt="" className="img-person-style " />
                </div>
                <p className="text-info testimonials">
                    “I had the pleasure of working alongside João at Compass UOL. As a software engineer, I collaborated closely with João in his role as a Quality Assurance Engineer.
                    His meticulous attention to detail was invaluable. He not only possessed a deep understanding of testing methodologies, but also brought a fresh perspective that often unearthed critical bugs we might have missed.
                    João&apos;s proactive approach to identifying potential issues early in the development cycle saved us countless headaches down the road.
                    Beyond his technical skills, he is an exceptional communicator. He have a knack for clearly documenting test cases, ensuring everyone is on the same page.
                    His positive attitude and willingness to collaborate effectively with developers fostered a strong working relationship across teams.
                    This open communication made debugging a smooth process and ultimately led to the release of high-quality software.”
                    <span className="span-style">Clair Luis Jevinski, Software Engineer at IKEA.</span>
                </p>
                <div>
                    <img src={img_about_hr} alt="" className="img-person-style " />
                </div>
                <p className="text-info testimonials">
                    “I am writing this recommendation with great enthusiasm for my former colleague, João, with whom I had the pleasure of working alongside during our time at UOL in the software testing department.
                    João is, without a doubt, an exceptional individual who would be a huge asset to any company.
                    He can brighten any work environment with his positive and cheerful energy, making even my most challenging days more enjoyable.
                    Beyond his positive spirit, João consistently demonstrates a meticulous approach to his work, making him the most organized and detail-oriented person I&apos;ve ever met in the workplace.
                    He was always going beyond the expected.
                    He readily offered assistance whenever our team needed, patiently explaining complex concepts, and helping others. In conclusion, João is a remarkable professional and would be an amazing addition to any team.”
                    <span className="span-style">Haime Reis, Digital Marketing Specialist.</span>
                </p>
                <div>
                    <DownloadButton
                        label="Download my CV"
                        fileUrl="https://1drv.ms/b/c/4feb6cf2efd996b0/ETI8jGbFbZdAq1eRFSzIbEkBtYGXOUQtJu5-ALQYjvjVQw?e=gBeKix"
                        fileName="joao-campos-cv.pdf"
                        openInNewTab={true}
                    />
                </div>
            </div>
        </div >
    )
}

export default About;