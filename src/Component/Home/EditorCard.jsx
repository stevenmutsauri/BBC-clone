import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNewsData, fetchTopStories} from "../../Redux/app/action"
import styles from './Home.module.css'
import { EditorBox } from './EditorBox';
import { LatestNews } from './LatestNews';


const EditorCard = () => {

    const dispatch = useDispatch()
    const newsData = useSelector(state => state.app.data)
    const topStories = useSelector(state => state.app.topStories)
    const newsDataSet = newsData.splice(1,6)
    // const mainNews = newsData.splice(6,1)
    // console.log(topStories);
    console.log();
    useEffect(()=> {
        dispatch(fetchNewsData())
        dispatch(fetchTopStories())
    }, [dispatch])

    return (
        <div className={styles.editor__div}>
            <p className={styles.editor__name}>Editor's corner</p>
            <div className={styles.editor__bottom_section}>
                <div className={styles.editor__left}>
                    {/* <div className={styles.test}>
                        <p>{mainNews[0].id}</p>
                    </div> */}
                    {
                        newsDataSet?.map((el) => <EditorBox key={el.id} data={el}/>)
                    }
                </div>
                <div className={styles.editor__right}></div>
            </div>
        </div>
        
    )
}

export {EditorCard}