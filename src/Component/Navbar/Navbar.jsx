import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/navbar.module.css"
import SearchBar from "../Search/SearchBar";
import { RiArrowDropDownFill } from "react-icons/ri";
import Dropdown from "./Dropdown";
import { useSelector } from "react-redux";

export default function Navbar() {
const {data_auth,isAuth}=useSelector(state=>state.login)
const linkLeft = [
  {
    to: "/",
    title: "",
  },
  {
    to: !isAuth?"/Sign":"/Account",
    title:!isAuth? "Your account":data_auth[0].category=="admin"?`${data_auth[0].name} *`:`${data_auth[0].name}`,
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
              {index==0 && <img className={style.bbclogo} src="/bbclogo.png" alt=""/>}
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
