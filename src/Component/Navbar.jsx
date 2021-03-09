import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import style from "./Styles/navbar.module.css"

const linkLeft = [
  {
    to: "/",
    title: "BBC",
  },
  {
    to: "/",
    title: "Your account",
  },
];

const linkMiddle = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/news",
    title: "News",
  },
  {
    to: "/sport",
    title: "Sport",
  },
  {
    to: "/reel",
    title: "Reel",
  },
  {
    to: "/worklife",
    title: "Worklife",
  },
  {
    to: "/travel",
    title: "Travel",
  },
  {
    to: "/future",
    title: "Future",
  },
  {
    to: "/culture",
    title: "Culture",
  },
  {
    to: "/more",
    title: "More",
  },
];

export default function Navbar() {
  return (
    
    <div className={style.navBar__wrap}>
      <div>
        {linkLeft?.map(({ to, title }, index) => (
          <Link className={style.navBar__left} to={to}>{title}</Link>
        ))}
      </div>
      <div>
        {linkMiddle?.map(({ to, title }, index) => (
          <Link className={style.navBar__right} to={to}>{title}</Link>
        ))}
      </div>
      <SearchBar></SearchBar>
    </div>
  );
}
