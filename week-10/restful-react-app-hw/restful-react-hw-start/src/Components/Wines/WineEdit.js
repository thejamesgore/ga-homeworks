/* eslint-disable indent */
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { editWine, getMyWine } from '../../lib/Api'

import  WineNameField  from '../Fields/WineNameField'
import  TastingNotesField  from '../Fields/TastingNotesField'
import  OriginField  from '../Fields/OriginField'
import  ImgUrlField  from '../Fields/ImgUrlField'

const WineEdit = () => {
    const { id } = useParams()
    const history = useHistory()
    const [state, setState] = React.useState({
      formData: null
    })
  
    
    const getSingleWineFromApi = async () => {
      try {
        const res = await getMyWine(id)
        
        setState({ formData: res.data })
      } catch (err) {
        console.error(`An error occurred fetching cheese ${id}`, err)
      }
    }
  
    React.useEffect(() => {
      getSingleWineFromApi()
    }, [])
  
    console.log('state is', state)
  
    if (state.formData === null) {
      return <p>Loading...</p>
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      try {
        console.log(state.formData)
        const result = await editWine(id, state.formData)
        console.log(result.data._id)
        history.push(`/wines/${result.data._id}`)
      } catch (err) {
        console.error('Error registering user', err)
      }
    }
  
    const handleChange = (e) => {
      const formData = {
        ...state.formData,
        [e.target.name]: e.target.value
      }
  
      setState({ formData })
    }

    return (
        
        <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">Edit cheese</h2>
          <hr />
  
          <div className="columns">
            <form
              onSubmit={handleSubmit}
              className="column is-half is-offset-one-quarter box"
            >
              <WineNameField
                handleChange={handleChange}
                name={state.formData.name}
              />
              <TastingNotesField
                handleChange={handleChange}
                tastingNotes={state.formData.tastingNotes}
              />
              <OriginField
                handleChange={handleChange}
                origin={state.formData.origin}
              />
              <ImgUrlField
                handleChange={handleChange}
                image={state.formData.image}
              />
              <div className="field">
                <input
                  className="button is-fullwidth is-warning"
                  type="submit"
                  value={`Edit ${state.formData.name || 'new wine'}`}
                />
              </div>
            </form>
          </div>
        </div>
      </section>

    )
}

export default WineEdit