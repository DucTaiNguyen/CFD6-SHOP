import useFormValidate from "../../../hook/useFormValidate"
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from '../../../redux/actions/authAction'
import reactDom from 'react-dom'

export default function SignIn() {
    let { inputChange, check, error, form } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                required: true,
                pattern: 'email'
            },
            password: {
                required: true,
                min: 6,
                max: 32
            }
        }
    })



    let dispatch = useDispatch()
    // let { handleLogin } = useAuth()
    function close() {
        document.querySelector('.popup-login').style.display = 'none'
    }


    let { loginError } = useSelector(store => store.auth)

    async function loginHandle() {
        let error = check()
        if (Object.keys(error).length === 0) {
            // let res = await Auth.login({
            //     username: form.username,
            //     password: form.password

            // })




            dispatch(loginAction({
                username: form.username,
                password: form.password
            }, close))

            // if (res.data) {

            // dispatch({
            //     type: "LOGIN",
            //     payload: res.data
            // })
            //     dispatch(loginAction(res.data))
            //     close()
            // } else if (res.error) {
            //     setLoginError(res.error)
            // }
            // if (res.success) {
            //     close()
            // } else if (res.error) {
            //     setLoginError(res.error)
            // }

        }
    }

    let st = useSelector(store => store)
    console.log(st)
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">Returning Customer</h6>
                    {/* Form */}
                    <form>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginEmail">
                                        Email Address *
          </label>                   {loginError && <p className='error-text'>{loginError}</p>}
                                    <input value={form.username} name='username' onChange={inputChange} className="form-control form-control-sm" id="loginEmail" type="email" placeholder="Email Address *" required />


                                    {
                                        error.username && <p className="error-text">{error.username}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="loginPassword">
                                        Password *
          </label>
                                    <input value={form.password} name='password' onChange={inputChange} className="form-control form-control-sm" id="loginPassword" type="password" placeholder="Password *" required />

                                    {
                                        error.password && <p className="error-text">{error.password}</p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Remember */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="loginRemember" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="loginRemember">
                                            Remember me
            </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group">
                                    <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
            Password?</a>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-sm btn-dark" onClick={loginHandle} type="submit">
                                    Sign In
        </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}