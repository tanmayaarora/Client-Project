import "./Header.css";

const Header = () => {
    return (
        <div data-collapse="medium" data-animation="over-right" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="/" aria-current="page" className="brand w-nav-brand w--current">
                        <img src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg" alt="Acme Outdoors Logo"/></a>
                        <div className="cart-nav-wrapper">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <a href="/" aria-current="page" className="nav-link w-nav-link w--current">Home</a>
                                <a href="/about" className="nav-link w-nav-link">About</a>
                                <a href="/shop" className="nav-link w-nav-link">Shop</a>
                                <a href="/donations" className="nav-link w-nav-link">Donate</a>
                                <a href="/contact" className="nav-link w-nav-link">Contact</a>
                            </nav>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Header;