import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer wf-section">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-logo-column">
                        <a href="index.html" aria-current="page" className="w-inline-block w--current">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Acme Outdoors Logo" />
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/webflow" target="_blank" className="social-footer-link w-inline-block">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407a25b6234aeec960fb9_Twitter_Social_Icon_Rounded_Square_White.svg" width="30" alt="Twitter Logo" />
                        </a>
                        <a href="https://www.facebook.com/webflow" className="social-footer-link w-inline-block">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e8407aa3fb6cf5576f1658b_Facebook Logo.svg" width="30" alt="Facebook Logo" />
                        </a>
                        <a href="https://www.instagram.com/webflow/" target="_blank" className="social-footer-link w-inline-block">
                            <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e840774014326b74bbeeeb6_Insta.svg" width="30" alt="Instagram Logo" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom-wrapper">
                    <div className="small footer-small">Made In <a href="https://webflow.com/" target="_blank">Webflow</a>. © 2020.</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;