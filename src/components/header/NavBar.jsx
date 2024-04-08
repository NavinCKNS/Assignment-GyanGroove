import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

import "./navBarStyle.css";
export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">BookUsNow</h1>
        <div className="nav-container">
          <button className="category">
            <GiHamburgerMenu className="cat-icon" /> Categories
          </button>
          <div className="search-container">
            <input className="search" type="search" placeholder="Search" />
            <IoIosSearch className="subtitle search-icon" />
          </div>

          <a className="subtitle fav" href="#">
            <FaHeart className="fav-icon" />
            &nbsp;Favorites
          </a>
          <button className="subtitle sign-in"><VscAccount className="sign-icon"/>Sign In</button>
        </div>
      </nav>
      <div className="nav-adjacent">
        <p className=" location"><FaLocationDot className="subtitle" /> Mumbai,India&nbsp;&gt; </p>
        <div className="media-container">
          <a href="" className="subtitle medium">
            Live&nbsp;shows
          </a>
          <a href="" className="subtitle medium">
            Streams
          </a>
          <a href="" className="subtitle medium">
            Movies
          </a>
          <a href="" className="subtitle medium">
            Plays
          </a>
          <a href="" className="subtitle medium">
            Events
          </a>
          <a href="" className="subtitle medium">
            Sports
          </a>
          <a href="" className="subtitle medium">
            Activities
          </a>
        </div>
      </div>
    </>
  );
}
