import React from 'react';
import { PopupAd } from '../Component/Advertisement/PopupAd';
import Business from '../Component/Home/Business';
import Business2 from '../Component/Home/Business2';
import { NewsCard } from '../Component/Home/CommonNewsCard';
import { CoronaNewsCard } from '../Component/Home/CoronaNewsCard';
import { EditorCard } from '../Component/Home/EditorCard';
import Future from '../Component/Home/Future';
import {IndiaNewsCard} from '../Component/Home/IndiaNewsCard'
import { MoreAroundBBC } from '../Component/Home/MoreAroundBBC';
import Reel from '../Component/Home/Reel';
import Welcome from '../Component/Home/Welcome';
import World from '../Component/Home/World';
const Home = () => {

    return (
        <div>    
            {/* <Welcome/> */}
            <NewsCard />
            <CoronaNewsCard />
            {/* <Reel/> */}
            <IndiaNewsCard />
            <EditorCard />
            {/* <Future/> */}
            {/* <Business/> */}
            <MoreAroundBBC />
            {/* <Business2/> */}
            {/* <World/> */}
        </div>
    )
}

export {Home}