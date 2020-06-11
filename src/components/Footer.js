import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/chinonso-ihedioha-732665112/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                        {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
                        <li><a href="https://github.com/nonsodaniel" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Ihedioha Chinonso Daniel</li><li>Email: <a href="#">nonsodaniel07@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
