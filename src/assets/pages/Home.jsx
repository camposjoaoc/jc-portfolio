import "../styles/home.scss";
import imgProfile from "../img/img-profile.jpg";
function Home() {
    return (
        <div className="container mid-container">
            <section>
                <div className="container-home">
                    <div>
                        <h2 className="main-info">Hello 👨🏻‍💻</h2>
                        <h1 className="main-title-name">I'm João Canabarro Campos.</h1>
                        <h3 className="main-info">I design and build web experiences that are modern, efficient, and impactful.</h3>
                        <h4 className="main-info">Take a look around my portfolio using the menu above: explore my projects, skills, learn more about me, and find out how to get in touch!</h4>
                    </div>
                    <div>
                        <img src={imgProfile} alt="Profile photo" className="img-style" />
                    </div>
                </div>
            </section>
        </div >
    )
}
export default Home;