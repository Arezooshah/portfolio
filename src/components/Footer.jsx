import React from "react";
import logoWhite from "../assets/freepik/logoDark.png";
import {
  FiShoppingCart,
  FiDribbble,
  FiLinkedin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiFileText,
  AiFillFileText,
} from "../assets/icons/vander";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

import FooterSocial from "./FooterSocial";

// data

const Data = [
  // {
  //   id: 1,
  //   Http: "https://1.envato.market/muvico-react",
  //   icons: <FiShoppingCart />,
  // },
  {
    id: 2,
    Http: "http://linkedin.com/in/arezoo-shahabi",
    icons: <FiLinkedin />,
  },
  {
    id: 3,
    Http: "https://www.facebook.com/shreethemes",
    icons: <FiFacebook />,
  },
  {
    id: 4,
    Http: "https://www.instagram.com/Arezoo__shah/",
    icons: <FiInstagram />,
  },
  {
    id: 5,
    Http: "https://twitter.com/arezooshah",
    icons: <FiTwitter />,
  },
  {
    id: 6,
    Http: "mailto:arezooshahabi@gmail.com",
    icons: <FiMail />,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <div className="border-slate-800 px-0 py-1 border-t">
        <div className="relative mx-auto text-center container">
          <div className="items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12">
            <div className="lg:col-span-3 text-center md:text-start">
              <Link to="#" className="text-[22px] focus:outline-none">
                <img
                  src={logoWhite}
                  className="mx-auto w-24 md:me-auto md:ms-0"
                  alt=""
                />
              </Link>
            </div>

            <div className="lg:col-span-5 mt-6 md:mt-0 text-center">
              <p className="mb-0 text-gray-400">
                {/* © {new Date().getFullYear()} Muvico. Design with{" "} */}
                Copyright @ 2024 Arezoo .All Rights Reserved
                <i className="text-red-600 mdi mdi-heart"></i>
                by{" "}
                <Link
                  to="https://github.com/Arezooshah"
                  target="_blank"
                  className="text-reset"
                >
                  Arezoo
                </Link>
                .
              </p>
            </div>
            <ul className="space-x-1 lg:col-span-4 mt-6 md:mt-0 text-center md:text-end list-none">
              {/* **********   map  ********** */}

              {Data.map((items, index) => (
                <div className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 dark:border-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle">
                  {
                    <FooterSocial
                      Http={items.Http}
                      icons={items.icons}
                      key={index.id}
                    />
                  }
                </div>
              ))}

              {/* items before map */}
              {/* <li className="inline">
                <Link
                  to="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="inline-flex justify-center items-center border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 dark:border-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 border rounded-xl w-8 h-8 text-[15px] text-center text-slate-300 hover:text-white tracking-wide duration-500 align-middle"
                >
                  <FiFacebook className="w-[14px] h-[14px] align-middle" />
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
