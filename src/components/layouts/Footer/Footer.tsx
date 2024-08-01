import logo from "../../../assets/logos/nursylogo.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-secondary text-primary-content p-10">
                <aside>
                    <img src={logo} alt="" />
                    <p className="font-bold">
                        Nursy Industries Ltd.
                        <br />
                        <span className="text-gray-400 font-extralight">Since 2023</span>
                    </p>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
