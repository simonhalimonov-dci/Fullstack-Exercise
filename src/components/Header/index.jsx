import React from "react";
import "./index.scss";

import { Facebook } from "./facebook";
import { Soundcloud } from "./soundcloud";
import { Twitter } from "./twitter";
import { Youtube } from "./youtube";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a className="facebook" href="/">
              <Facebook />
            </a>
          </li>
          <li>
            <a className="youtube" href="/">
              <Youtube />
            </a>
          </li>
          <li>
            <a  className="soundcloud" href="/">
              <Soundcloud />
            </a>
          </li>
          <li>
            <a className="twitter" href="/">
              <Twitter />
            </a>
          </li>
        </ul>
      </nav>

      <span>App loads 2018</span>
    </header>
  );
};

export default Header;
