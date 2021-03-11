import React from 'react';
import { NewsCard } from '../Component/Home/CommonNewsCard';
import { CoronaNewsCard } from '../Component/Home/CoronaNewsCard';
import { EditorCard } from '../Component/Home/EditorCard';
import {IndiaNewsCard} from '../Component/Home/IndiaNewsCard'
const Home = () => {

    return (
        <div>    
            <NewsCard />
            <CoronaNewsCard />
            <IndiaNewsCard />
            <EditorCard />
        </div>
    )
}

export {Home}