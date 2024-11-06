

const Footer = () => {
    return (
      <div className="bg-white text-black p-10">
          <div className="text-center mx-16">
            <div className="w-4/5 mx-auto">
            <div className="hero-content text-center ">
                <div className="">
                   <h1  className="font-bold text-2xl my-4">Gadget Heaven</h1>
                   <p>Leading the way in cutting-edge technology and innovation.</p> 
                </div>
            </div>
            <hr/>
             
            <footer className="footer flex justify-between p-10">
                
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                   
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            </div>
        </div>
      </div>
    );
};

export default Footer;