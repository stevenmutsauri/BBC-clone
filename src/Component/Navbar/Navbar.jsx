import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import style from "../Styles/navbar.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";
import Dropdown from "./Dropdown";

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
  const [moreDrop, setMoreDrop] = React.useState(false);
  const showDropDown=()=>{
    setMoreDrop(!moreDrop)
  }
  return (
    <div>
      <div className={style.navBar__wrap}>
        <div>
          {linkLeft?.map(({ to, title }, index) => (
            <Link className={style.navBar__left} to={to}>
              {title}
            </Link>
          ))}
        </div>
        <div>
          {linkMiddle?.map(({ to, title }, index) => (
            <Link className={style.navBar__right} to={to}>
              {title}
            </Link>
          ))}
        </div>
        <div onClick={showDropDown} className={style.dropdown__icon}>
          <RiArrowDropDownFill />
        </div>
        <SearchBar></SearchBar>
      </div>
      {moreDrop && <Dropdown></Dropdown> }
      
    </div>
  );
}
