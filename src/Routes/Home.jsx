import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { CommonCard } from '../Component/Home/CommonCard';
import {fetchNewsData} from "../Redux/app/action"

const Home = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.app.data)
  console.log(data)

  useEffect(()=> {
      dispatch(fetchNewsData())
  }, [dispatch])

    return (
        <div>
            {/* <CommonCard /> */}
        </div>
    )
}

export {Home}