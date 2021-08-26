/* eslint-disable indent */
import React from 'react'
import { useParams } from 'react-router-dom'
import { getMyWine } from '../../lib/Api'

const WineDetails = () => {
    const { id } = useParams()
    const [state, setState] = React.useState({ wines: null })

    const getMyWineFromApi = async () => {
        try {
            const res = await getMyWine(id)
            setState({ wines: res.data })
        } catch (err) {
            console.error(`An error occured fetching your wine ${id}`, err)
        }
    }

    
    React.useEffect(() => {
        getMyWineFromApi()
    },[])
    
    console.log('state is', state)


    if (state.wines === null){
        return <p>Loading your wine...</p>
    } 

return (

<section className="section">
            <div className="container">
                <h2 className="title has-text-centered">{ state.wines.name }</h2>
                <hr />
                <div className="columns">
                    <div className="column is-half">
                        <h4 className="title is-4">
                            <span role="img" aria-label="plate">🍷 </span>
                            Grape
                        </h4>
                        <hr />
                        <p>
                            {state.wines.grape}
                        </p>
                        <hr />
                        <h4 className="title is-4">
                            <span role="img" aria-label="globe">🌍 </span>
                            Origin
                        </h4>
                            <p>{state.wines.origin}</p>
                            <hr />
                        <h4 className="title is-4">
                            <span role="img" aria-label="money">💰 </span>
                            Price
                        </h4>
                            <p>£{state.wines.price}</p>
                            <hr />
                    </div>
                    <div className="column is-half">
                        <figure className="image"><img src={state.wines.image} alt={state.wines.name} /></figure>
                    </div>
                </div>
            </div>
        </section>

)
}

export default WineDetails