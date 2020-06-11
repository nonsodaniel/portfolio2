import React from 'react'
import Helmet from 'react-helmet'


import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/netflix.jpg'
import thumb02 from '../assets/images/thumbs/landing.jpg'
import thumb03 from '../assets/images/thumbs/owh.jpg'
import thumb04 from '../assets/images/thumbs/farm.jpg'
// import thumb05 from '../assets/images/thumbs/05.jpg'
// import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/netflix.jpg'
import full02 from '../assets/images/fulls/landing.jpg'
import full03 from '../assets/images/fulls/owh.jpg'
import full04 from '../assets/images/fulls/farm.jpg'
// import full05 from '../assets/images/fulls/05.jpg'
// import full06 from '../assets/images/fulls/06.jpg'



const DEFAULT_IMAGES = [
    { id: '1', src: 'https://nonsonetflix.herokuapp.com', source: full01, thumbnail: thumb01, caption: 'Netflix Home page', description: 'Netflix Home page clone.' },
    { id: '2', src: 'https://acadalanding.herokuapp.com', source: full02, thumbnail: thumb02, caption: 'Landing Page', description: 'A sample landing page of a mobile app that direct users to the app.' },
    { id: '3', src: 'https://owhnonso.herokuapp.com', source: full03, thumbnail: thumb03, caption: 'HR Management system', description: "OWH Hackathon's project" },
    { id: '4', src: 'https://farmsavvy.tech', source: full04, thumbnail: thumb04, caption: 'Farm Savvy', description: `Naija Hack Hackathon's Project.` },
    // { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' },
    // { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.' }
];

class HomeIndex extends React.Component {
    state = { isLoading: false }

    handleSubmit = async (e) => {
        e.preventDefault()
        alert("here")
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
                            <li><a href="github.com/nonsodaniel" className="button">Full Portfolio</a></li>
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