import React from 'react';
import {FaGithub, FaRegEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from "next/link";

interface FooterProps {
  socialLinks: { twitter: string, github: string, email: string, instagram: string};
}

const Footer: React.FC<FooterProps> = ({ socialLinks}) => {
  return (
      <footer className="footer glass items-center p-4">
        <div className="items-center grid-flow-col hidden md:flex">
          {/*<Avatar path={avatar}/>*/}
          {/*<p>Copyright © 2023 - All right reserved</p>*/}
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link href={socialLinks.twitter}>
            <FaTwitter size={24}/>
          </Link>
          <Link href={socialLinks.github}>
            <FaGithub size={24}/>
          </Link>
          <Link href={socialLinks.instagram}>
            <FaInstagram size={24}/>
          </Link>
          <Link href={socialLinks.email}>
            <FaRegEnvelope size={24}/>
          </Link>
        </div>
      </footer>
  );
};
export default Footer;
