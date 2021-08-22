import React from 'react'
import { getAllWines } from '../Api'
import WineCard from './WineCard2'

const WineIndex = () => {
  const [state, setState] = React.useState({ wines: [] })

  const getWineFromApi = async () => {
    try {
      const res = await getAllWines()
      setState({ wines: res.data })
    } catch (err) {
      console.error('Could not get you all the wines because', err)
    }
  }

  console.log(state)

  React.useEffect(() => {
    getWineFromApi()
  }, [] )

  return ( 
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {state.wines.map((wines) => (
            <WineCard key={wines._id} _id={wines._id} name={wines.name} origin={wines.origin} grape={wines.grape} price={wines.price} tastingNotes={wines.tastingNotes} image={wines.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WineIndex