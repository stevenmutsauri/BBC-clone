import React from 'react'
import { FacebookButton, FacebookCount } from "react-social";

export default function SocialShare({shareId}) {
    let url =shareId
    console.log(shareId)
    return (
        <div>
           
             <FacebookButton url={shareId} appId={174187634357778}>
        <FacebookCount url />
        {" Share " + url}
        </FacebookButton>
        </div>
    )
}
