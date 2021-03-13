import React from 'react';
import Business from '../Component/Home/Business';
import Business2 from '../Component/Home/Business2';
import { NewsCard } from '../Component/Home/CommonNewsCard';
import { CoronaNewsCard } from '../Component/Home/CoronaNewsCard';
import { EditorCard } from '../Component/Home/EditorCard';
import Future from '../Component/Home/Future';
import {IndiaNewsCard} from '../Component/Home/IndiaNewsCard'
import Reel from '../Component/Home/Reel';
import Welcome from '../Component/Home/Welcome';
import World from '../Component/Home/World';
const Home = () => {
    return (
        <div> 
            <Welcome/>   
            <NewsCard />
            <CoronaNewsCard />
            <IndiaNewsCard />
            <EditorCard />
            <Reel/>
            <Future/>
            <Business/>
            <Business2/>
            <World/>
        </div>
    )
}

export {Home}