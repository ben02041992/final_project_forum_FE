import React from 'react';
import "./Footer.css"
import { DiGithubBadge } from "react-icons/di";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer'>
      <p>A project by <a href="https://github.com/ben02041992" target="_blank">Ben Townsend</a>, <a href="https://github.com/QuinnGreen" target="_blank">Quinn Greenwood</a>, <a href="https://github.com/rocoriyan" target="_blank">Ryan Corrigan</a> and <a href="https://github.com/Farwahi" target="_blank">Syeda Ume Farwa Naqvi</a></p>
      <div className='footer-ico'>
        <a href="https://github.com/ben02041992/final_project_forum_FE" target="_blank"><DiGithubBadge className='icos'/></a>
        <a href="https://twitter.com/wearecodenation" target="_blank"><FaSquareXTwitter className='icos'/></a>
      </div>
    </div>
  )
}

export default Footer
