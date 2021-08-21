/* eslint-disable indent */
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import { getMeDrunkOnWine } from './Api'

const WineIndex = () => {
    const [wineData, setWineData] = React.useState({ wines: [] })

    const getWineFromApi = async () => {
        try {
            const res = await getMeDrunkOnWine()
            setWineData({ wines: res.data })
        } catch (err) {
            console.log('Could not get you all the wines because', err)
        }
    }

    console.log(wineData)

    React.useEffect(() => {
            getWineFromApi()
        },[])

   return ( 

// I get an error while trying to access the api 
// "Access to XMLHttpRequest at 'https://winebored.herokuapp.com/wines' 
//from origin 'http://localhost:3000' has been blocked by CORS policy:
// No 'Access-Control-Allow-Origin' header is present on the requested resource."

// The good thing is I know it's getting called!, I have a similar issue if I try from the browser
// Also tried using a vpn and tethering via my phone to see if I called the api too many times while trying to
// code up this project but have the same application error.

       <div>
           {wineData.wines.map((wine) => (
               <div key={wine._id}></div>
           ) )}
       </div>
   )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default WineIndex