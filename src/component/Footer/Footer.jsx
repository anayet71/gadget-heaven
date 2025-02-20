
const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto rounded-t-2xl bg-base-200">


            <footer className="   max-w-6xl mx-auto ">
                <div className=" text-center pt-10 ">
                    <h1 className="text-3xl block">Gadget Heaven</h1>
                    <p className="text-gray-400 pt-2.5"> Leading the way in cutting-edge technology and innovation.</p>

                </div>
                <div className=" footer sm:flex sm:justify-around bg-base-200  p-10">
                    <nav> 
                        <h6 className="uppercase font-bold text-black pb-4 ">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="uppercase font-bold text-black pb-4">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="uppercase font-bold text-black pb-4">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>

            </footer>

        </div>
    );
};

export default Footer;