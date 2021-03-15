import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNewsData} from "../../Redux/app/action";
import styles from './NewsTost.module.css';

import 'react-toastify/dist/ReactToastify.minimal.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify';


const NewsTost = () => {

    const dispatch = useDispatch()

    const displayMsg = async () => {
        dispatch(fetchNewsData())
        toast(<Msg />, {autoClose: false})
    }

    const Msg = () => {
        const newsData = useSelector(state => state.app.data)
        const news = newsData[1]
        return newsData.length !== 0 && (
            <div key={news.id} className={styles.toast__div}>
                <img className={styles.toast__logo} src="logo.png" alt="toast"/>
                <p key={news.id} className={styles.toast__title}>{news.headline}</p>
            </div>
        )
    }

    useEffect(() => {
        setTimeout(() => {
            displayMsg()
        }, 20000);
    }, []);
    return (
      <div>
        <ToastContainer  transition={Slide}/>
      </div>
    );
}

export {NewsTost}