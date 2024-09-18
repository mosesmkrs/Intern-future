import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer1 = () => {
  return (
    <footer className="bg-[#002E5F] p-12 text-white">
      <div className="grid mx-auto lg:flex md:grid-cols-2 gap-8 px-4 lg:justify-around">
        {/* About Us Section */}
        <div className="lg:w-1/4 ">
          <h2 className="text-lg font-semibold mb-1">ABOUT US</h2>
          <div className="border-b-2 border-white w-16 mb-4"></div>
          <ul className="space-y-2">
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Home
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                About Us
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Our Services
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Terms & Conditions
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="lg:w-1/4 ">
          <h2 className="text-lg font-semibold mb-1">USEFUL LINKS</h2>
          <div className="border-b-2 border-white w-16 mb-4"></div>
          <ul className="space-y-2">
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Success Stories
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Team
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Career
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                Contact
              </a>
            </li>
            <li className="flex items-center border-b">
              <span className="mr-2"><ArrowForwardIosIcon className="w-4 h-4 mb-2"/></span>
              <a href="/" className="hover:underline mb-2">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="lg:w-1/4 ">
          <h2 className="text-lg font-semibold mb-1">CONTACT US</h2>
          <div className="border-b-2 border-white w-16 mb-4"></div>
          <div className="not-italic space-y-1">
            <p>Near I BUS STOP</p>
            <p>Vishnupuri Main</p>
            <p>INDORE MP</p>
            <p>
              <strong>Phone:</strong> +91 8889367841
            </p>
            <p>
              <strong>Email:</strong> Info@Campus2career.In
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
             <LinkedInIcon className="w-8 h-8 bg-white text-blue-500 p-1 rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300"/>
             </a>
          </div>
        </div>
        <div className="lg:w-1/4 ">
          <h2 className="text-lg font-semibold mb-1">LIFE AT CAMPUS2CAREER</h2>
          <div className="border-b-2 border-white w-16 mb-4"></div>
          <p>
            At Campus2Career, we foster a culture of collaboration, innovation, and growth. Our dynamic team thrives on productive work and mutual support, creating an environment where everyone can excel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
