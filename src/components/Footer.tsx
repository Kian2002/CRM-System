import React from "react";
import Link from "next/link";
import Image from "next/image";

import { GitHubLogo, LinkedinLogo } from "../../public";

const Footer = () => {
  const year = new Date().getFullYear();
  const github = "https://github.com/Kian2002/CRM-System";
  const linkedin = "https://www.linkedin.com/in/kianabd";

  return (
    <footer className="bg-slate-800 text-white absolute bottom-0 w-full">
      <div className="flex text-center text-xs p-3 justify-center items-center">
        <p>&copy; {year} Kian Abdollahzadeh. All rights reserved. </p>

        <div className="flex ml-3 gap-3">
          <Link href={linkedin} target="_blank">
            <Image
              src={LinkedinLogo}
              alt="Linkedin"
              width={20}
              height={20}
              className="invert"
            />
          </Link>

          <Link href={github} target="_blank">
            <Image src={GitHubLogo} alt="Github" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
