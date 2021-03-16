import React from "react";
import { Link } from "react-router-dom";
import style from "../Styles/footer.module.css";

const links1 = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/future",
    title: "Future",
  },
];
const links2 = [
  {
    to: "/news",
    title: "News",
  },
  {
    to: "/culutre",
    title: "Culture",
  },
];
const links3 = [
  {
    to: "/sport",
    title: "Sport",
  },
  {
    to: "/music",
    title: "Music",
  },
];
const links4 = [
  {
    to: "/reel",
    title: "Reel",
  },
  {
    to: "/tv",
    title: "Tv",
  },
];
const links5 = [
  {
    to: "/worklife",
    title: "Worklife",
  },
  {
    to: "/weather",
    title: "Weather",
  },
];
const links6 = [
  {
    to: "/travel",
    title: "Travel",
  },
  {
    to: "/sounds",
    title: "Sounds",
  },
];
const linkTerms = [
  "Terms of Use",
  "About the BBC",
  "Privacy Policy",
  "Cookies",
  "Accessibility Help",
  "Parental Guidance",
  "Contact the BBC",
  "Get Personalised Newsletters",
  "Advertise with us"]
const linkAdvertise = [ "AdChoices / Do Not Sell My Info"];
export default function Footer() {
  return (
    <div className={style.footer}>
      <h2>Explore the BBC</h2>
      <div className={style.footer__table}>
        <div className={style.footer__unit} >
          {links1.map(({ to, title }) => (
             
            <Link key={title} className={style.footer__table__link} to={to}>
              {title}
            </Link>
        
          ))}
        </div>
        <div className={style.footer__unit} >
          {links2.map(({ to, title }) => (
             
            <Link className={style.footer__table__link2} to={to}>
              {title}
            </Link>
        
          ))}
        </div>
        <div className={style.footer__unit} >
          {links3.map(({ to, title }) => (
             
            <Link className={style.footer__table__link2} to={to}>
              {title}
            </Link>
        
          ))}
        </div>
        <div className={style.footer__unit} >
          {links4.map(({ to, title }) => (
             
            <Link className={style.footer__table__link2} to={to}>
              {title}
            </Link>
        
          ))}
        </div>
        <div className={style.footer__unit} >
          {links5.map(({ to, title }) => (
             
            <Link className={style.footer__table__link2} to={to}>
              {title}
            </Link>
        
          ))}
        </div>
        <div className={style.footer__unit} >
          {links6.map(({ to, title }) => (
             
            <Link className={style.footer__table__link2} to={to}>
              {title}
            </Link>
        
          ))}
        </div>
        
      </div>
      <div className={style.footer__line}></div>
      <div className={style.footer__terms__wrap}>
        {linkTerms?.map((item) => (
          <Link className={style.footer__terms__link}>{item}</Link>
        ))}
      </div>
      <div className={style.footer__terms__wrap}>
        {linkAdvertise?.map((item) => (
          <Link className={style.footer__terms__link}>{item}</Link>
        ))}
      </div>
      
      <div className={style.copyright}>
        Copyright © 2021 BBC. The BBC is not responsible for the content of
        external sites.<span><Link className={style.copyright__link} to={"/read"}> Read about our approach to external linking.</Link></span>
      </div>
    </div>
  );
}
