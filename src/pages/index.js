import React from 'react'
import Helmet from 'react-helmet'
import '../pages/pages.scss'



import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'


import thumb01 from '../assets/images/thumbs/provider.png'
import thumb02 from '../assets/images/thumbs/client.png'
import thumb03 from '../assets/images/thumbs/pandemic.png'
import thumb04 from '../assets/images/thumbs/owh.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/provider.png'
import full02 from '../assets/images/fulls/client.png'
import full03 from '../assets/images/fulls/pandemic.png'
import full04 from '../assets/images/fulls/owh.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'



const DEFAULT_IMAGES = [
    { id: '1', src: 'https://provider.bookme.com.ng/', source: full01, thumbnail: thumb01, caption: 'BookMe Provider', description: 'A pair-to-pair platform for Service Providers where Service providers put in the various services they offer for their clients to see and connect with them.' },
    { id: '2', src: 'https://bookme.com.ng/', source: full02, thumbnail: thumb02, caption: 'BookMe Client', description: `A pair-to-pair platform for Client to make requests for services from their various Service Providers and make reviews based on performance.` },
    { id: '3', src: 'https://fightpandemics.com/', source: full03, thumbnail: thumb03, caption: 'FightPandemic', description: `A platform for connecting those who need help with those who can provide it.` },
    { id: '4', src: 'https://owhnonso.herokuapp.com', source: full04, thumbnail: thumb04, caption: 'HR Management system(Hackathon Project)', description: "A basic HR management system for tracking activities and transactions that are been carried out in a structured Organization." },

];

class HomeIndex extends React.Component {
    state = { isLoading: false }

    handleSubmit = async (e) => {
        return
        e.preventDefault()
        // alert("here")
    }

    render() {
        const siteTitle = "Ihedioha Chinonso - nonsodaniel"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p>I’m a self-taught Full stack Software Developer with the skills to deliver Responsive designs and Web
                            applications that meets accessibility standards. I engage myself mostly in community development
                            programmes like contributing to open source projects, organizing tech meetups to create awareness and
                            empower students and also ensure products are being delivered in the best possible way to meet user’s
                            requirements and maximize profit.</p>
                        {/* <ul className="actions">
                            <li><a href="" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, src, thumbnail, caption, description }) => ({
                            src,
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li>
                                <a
                                    href="https://docs.google.com/document/d/1BhNmaDTbJAiYqfiteMYZVfPfu5pqpwc9iQR21GaMwZY/edit?usp=sharing"
                                    className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Please always feel free to request for my services and other Tech related activites. <b>I'm ever Ready! <h3>Always.</h3></b></p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                    <ul className="actions actions-send-message" style={{ margin: "20px 0" }}>
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </form>

                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Magodo, Lagos.<br />
                                        Nigeria.<br />
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +234-909-654-6815
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">nonsodaniel07@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex