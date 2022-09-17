import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import data from "../data/data.json";

export const Navigation = (props)  => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const current = paths[1] ? paths[1] : "home";
  const [menu, setMenu] = useState(current); 

  const [content, setContent] = useState({});
  useEffect(() => {
    setContent(data);
  }, []);

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <span className='navbar-brand page-scroll'>be-loved</span>{' '}
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li className={(menu === 'home') ? "active" : ""}>
              <Link to='/' state={{ data: content.home }} onClick={() => setMenu("home")}>Home</Link>
            </li>
            <li className={(menu === 'obituaries') ? "active" : ""}>
              <Link to='/obituaries' state={{ data: content.obituaries }} onClick={() => setMenu("obituaries")}>Obituaries</Link>
            </li>
            <li className={(menu === 'pricing') ? "active" : ""}>
              <Link to='/pricing' state={{ data: content.pricing }} onClick={() => setMenu("pricing")}>Pricing</Link>
            </li>
            <li className={(menu === 'contact') ? "active" : ""}>
              <Link to='/contact' state={{ data: content.contact }} onClick={() => setMenu("contact")}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
