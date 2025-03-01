import { Helmet } from "react-helmet";
const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#58148f] text-center  py-12">
              <Helmet>
                <title>Contact - Gadget Heaven</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <div className="w-6/12 mx-auto bg-[#3d046b] rounded-t-2xl text-white">
                    
                <h1 className="  py-5 text-center text-2xl font-semibold ">Contact Us</h1>
                <p className=" w-10/12 mx-auto ">Any suggestion or complain regarding our products or other issue feel free to contact us.</p>
                </div>
                <div className="bg-[#3d046b] py-8 flex items-center justify-center gap-5 w-6/12 mx-auto ">
                   {/*  <div>
                        <h1 className="text-6xl text-white py-18  ">Gadget <br /> Heaven</h1>
                    </div> */}

                    <div className="grid gap-2">
                        <div>

                        <label className="input validator">
                            <input type="text" placeholder="You name" required />
                        </label>
                        </div>
                    <div>
                         <label className="input validator">
                            <input type="email" placeholder="mail@site.com" required />
                        </label>
                    </div>
                    <input type="submit" value="Submit" className="btn" />

                       
                 
                    </div>
                </div>
            </div>
                  
               {/*  <div className=" text-center flex justify-center pt-5 pb-12" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58430.04998846828!2d90.35113710725687!3d23.751725137961508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ada006262b%3A0xfff0a25a88a97427!2sSantoor%20Restaurant!5e0!3m2!1sen!2sbd!4v1740790115738!5m2!1sen!2sbd" width="500" height="350" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
        </div>
    );
};

export default Contact;