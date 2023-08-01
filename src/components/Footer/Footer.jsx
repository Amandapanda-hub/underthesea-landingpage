

import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const SocialIcons = () => (
  <div className="flex justify-center space-x-3 mt-4 text-white">
    <BsFacebook className="w-6 h-6" />
    <BsTwitter className="w-6 h-6" />
    <BsInstagram className="w-6 h-6" />
  </div>
);

const Address = () => (
  <div className="text-white space-y-10">
    <h2 className="text-lg font-bold">Marine Mirage</h2>
    <p>1234 Street Name<br />City, State, ZIP</p>
  </div>
);

const Links = () => (
    <div className="text-white flex flex-col pt-10 pb-10 sm:pb-0 sm:pt-0 md:flex-row md:space-x-20 justify-center items-center gap-y-5 text-center">
      <div className="space-y-4">
        {['Link 1', 'Link 3'].map(link => (
          <a key={link} href="#!" className="hover:text-blue-300 block">{link}</a>
        ))}
      </div>
      <div className="space-y-4">
        {['Link 2', 'Link 4'].map(link => (
          <a key={link} href="#!" className="hover:text-blue-300 block">{link}</a>
        ))}
      </div>
    </div>
  );
  
  

export default function Footer() {
  return (
    <div className="bg-gray-800 lg:px-[20rem] md:px-10 sm:px-8 py-32 flex flex-col md:grid md:grid-cols-2 text-center md:items-center">
      <Address />
      <Links />
      <SocialIcons />
    </div>
  );
}
