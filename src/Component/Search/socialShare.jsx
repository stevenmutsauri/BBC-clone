import React from "react";
import { FacebookButton } from "react-social";
import { FaFacebook } from "react-icons/fa";
import style from "../Styles/socialShare.module.css"

export default function SocialShare({ shareId }) {
    let iconStyles = { color: "white", fontSize: "1.5em" };
  let url = shareId;
  return (
    <div>
      <FacebookButton className={style.shareBtn} url={shareId} appId={174187634357778}>
       <FaFacebook style={iconStyles} />
      </FacebookButton>
    </div>
  );
}