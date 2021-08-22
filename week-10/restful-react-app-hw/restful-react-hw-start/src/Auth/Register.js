/* eslint-disable indent */
import React from 'react'
import { registerUser } from '../Api'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const Register = () => {
    const history = useHistory()
    const [state, setState] = React.useState({
        formData: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await registerUser(state.formData)
            console.log('response from api is', res)
            // eslint-disable-next-line quotes
            if (res.status === 200)
            history.pushState('/login')
        } catch (err) {
            console.error('Error registering the user', err)
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
      <div className="containers">
        <div className="columns">
          <form
            onSubmit={handleSubmit}
            className="column is-half is-offset-one-quarter box"
          >
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="username"
                  name="username"
                  value={state.formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="email"
                  name="email"
                  value={state.formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="password"
                  name="password"
                  type="password"
                  value={state.formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="password confirmation"
                  name="passwordConfirmation"
                  type="password"
                  value={state.formData.passwordConfirmation}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <input
                className="button is-fullwidth is-warning"
                type="submit"
                value="Register"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}

export default Register