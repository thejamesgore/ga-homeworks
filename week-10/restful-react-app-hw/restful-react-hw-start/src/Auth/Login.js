/* eslint-disable indent */
import React from 'react'
import { loginUser } from '../Api'
import { setToken } from '../Auth'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
    const history = useHistory()
    const [state, setState] = React.useState({
        formData: {
            email: '',
            password: ''
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await loginUser(state.formData)
            console.log('response from api is', res)
            // eslint-disable-next-line quotes
            if (res.status === 200) {
                setToken(res.data.token)
                history.push('/wines')
            }
        } catch (err) {
            console.error('Error logging in user', err)
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
          <div className="columns">
            <form
              onSubmit={handleSubmit}
              className="column is-half is-offset-one-quarter box"
            >
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={state.formData.email}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password"
                    name="password"
                    value={state.formData.password}
                    type="password"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="field">
                <input
                  className="button is-fullwidth is-warning"
                  type="submit"
                  value="Login"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}

export default Login