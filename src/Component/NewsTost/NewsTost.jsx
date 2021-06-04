import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchNewsData} from "../../Redux/app/action";
import styles from '../Styles/NewsTost.module.css';

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
        const news =  {
            "id": 100001,
            "headline": "India rebukes UK MPs over farmers' protest debate",
            "description": "India has rebuked UK MPs for criticising its handling of long-running farmers' protests in Delhi. Several Labour, Liberal Democrat and Scottish National Party MPs on Monday expressed concern over the safety of protesters and the status of press freedom in India. But India's High Commission in London said the parliamentary discussion was full of 'false assertions'. Indian farmers have been protesting for months against agricultural reforms. Thousands of them have been camped on the outskirts of the capital Delhi, demanding the government repeal the laws, which seek to further open up India's farming sector to private players. Prime Minister Narendra Modi and his Bharatiya Janata Party-led government insist the laws will improve farmers' incomes. But farmers say the opposite will happen since the reforms give corporate companies greater bargaining power. The protests - which have lasted for more than 100 days - have dominated headlines and social media feeds, and the government's response has drawn international attention and even rebuke. India's government has shut down the internet around the protest sites for brief spells, arrested protesters, sympathetic activists and even journalists covering the strike. Citing these instances, UK MPs said human rights and democratic freedoms were not being upheld in India, reports the BBC's Yogita Limaye. 'Water cannons and tear gas and repeated clashes between police and farmers and interruption in internet connectivity have been matters of concern. Several farmers have reportedly committed suicide,' SNP MP Martin Day said.",
            "published_at": "09/03/2021",
            "category": "Asia",
            "sub_category": "India",
            "img": [{
                "img_url": "https://ichef.bbci.co.uk/news/976/cpsprodpb/BE3B/production/_117499684_gettyimages-1231599814.jpg",
                "img_tag": "Thousands of farmers are protesting at Delhi's borders"
              },
              {
                "img_url": "https://ichef.bbci.co.uk/news/976/cpsprodpb/2CB9/production/_116994411_cdf9330b-a82b-47d0-bd03-0ee13eb28d3d.jpg",
                "img_tag": "The farmers are demanding the repeal of three farm laws"
              }
            ],
            "article_data": [
              {
                "sub_title": "When Prime Minister Boris Johnson will visits the country",
                "sub_description": "They demanded that UK officials address these concerns with India when Prime Minister Boris Johnson visits the country, which is expected later this year. The UK government has said they have already raised these issues and will continue to do so while respecting that the farm laws are a domestic matter. We deeply regret that rather than a balanced debate, false assertions - without substantiation or facts - were made, casting aspersions on the largest functioning democracy in the world and its institutions, India's High Commission said in a statement."
              },
              {
                "sub_title": "Monday's debate in the UK parliament",
                "sub_description": "When aspersions are cast on India by anyone, irrespective of their claims of friendship and love for India or domestic political compulsions, there is a need to set the record straight,' it added. Monday's debate in the UK parliament follows a recent report on global political rights and liberties that changed India's status from a free country to 'partly free'. It attributed the downgrade to increased pressure on human rights groups, journalists and activists, and targeting of minorities, since 2014, when Mr Modi swept to power. But the Indian government's response to the protest - which has included criminal charges against eight journalists, the controversial arrest of a 22-year-old activist and a spat with pop star Rihanna - has sparked anger and criticism in India as well."
              }
            ]
          }
        // console.log(news)
        return news && (
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