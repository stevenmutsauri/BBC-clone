import React from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { getWeather } from "../../Redux/weather/action"
import styles from "../Styles/weather.module.css"

const WeatherForecast =() => {
    const [query,setQuery] = React.useState("Mumbai")
    const [city,setCity] = React.useState("MUMBAI")
    const [show,setShow] = React.useState(false)
    const [prevData,setPrevData] = React.useState(null)
    const {isLoading,isError,weather} = useSelector(state => state.weather,shallowEqual)
    const dispatch = useDispatch()
    

    React.useEffect(() => {
        dispatch(getWeather(query))
    },[dispatch])

    const handleClick = (e) => {
        dispatch(getWeather(query))
        .then((res) => {
            if(res ){ 
                setCity(res.q) 
                setPrevData(res.data)
            }
            else {
                 setCity((prev) => prev) 
            }
        })
        .catch(err => {
            return 
        })
    }
  
    return (
            <div className={styles.weather__wrapper}>
                <div className={styles.weather__topBox}>
                    <h3>{city.toUpperCase()} WEATHER </h3>
                    <div className={styles.weather__topBox__btn_1} onClick={e => setShow(!show)}>{!show ? "EDIT" : "CLOSE"}</div>
                </div>
                {show && (
                    <div>
                        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter city"/>
                        <button  onClick={handleClick}>EDIT</button>
                    </div>
                )}
                {isLoading ? <div>...load</div>  : isError ? (
                    <>
                        <div>Location Not Found</div>
                        <div>
                            <img src={weather.condition.icon} alt="logo"/>
                            <h1>{weather.temp_c} °C</h1>
                        </div>
                    </>
                    ) : weather ? (
                    <div>
                        <img src={weather.condition.icon} alt="logo"/>
                        <h1>{weather.temp_c} °C</h1>
                    </div>
                ): null}
            </div>
    )
}

export {WeatherForecast}