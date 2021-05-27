import useFormValidate from "../../../hook/useFormValidate";

export default function Register() {
    let { form, error, inputChange, check } = useFormValidate({
        last_name: '',
        first_name: '',
        email: '',
        fb: '',
        title: '',
        content: ''
    }, {
        rule: {
            last_name: {
                required: true
            },
            first_name: {
                required: true,
                // pattern: 'phone'
            },
            email: {
                required: true,
                pattern: 'email'
            },
            fb: {

                pattern: /^https?:\/\/www\.facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/i
            },
            title: {
                required: true,

            },
            content: {
                required: true,
                // pattern: 'content'
            }

        },
        message: {
            last_name: {
                required: "Họ không được để trống"
            },
            first_name: {
                required: 'Tên không được để trống',
                // pattern: 'Phải là số điện thoại Việt Nam'

            },
            fb: {
                pattern: "Phải là link facebook"
            }
        }
    })


    function onSubmit() {
        let errorObj = check();
        if (Object.keys(errorObj).length === 0) {
            console.log(form)
        }

    }
    return (
        <div className="col-12 col-md-6">
            {/* Card */}
            <div className="card card-lg">
                <div className="card-body">
                    {/* Heading */}
                    <h6 className="mb-7">New Customer</h6>
                    {/* Form */}
                    <form>
                        <div className="row">
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerFirstName">
                                        First Name *
          </label>

                                    <input value={form.first_name} name='first_name' onChange={inputChange} className="form-control form-control-sm" id="registerLastName" type="text" placeholder="Last Name *" required />
                                    {
                                        error.first_name && <p className="error-text">{error.first_name} </p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerLastName">
                                        Last Name *
          </label>

                                    <input value={form.last_name} name='last_name' onChange={inputChange} className="form-control form-control-sm" id="registerFirstName" type="text" placeholder="First Name *" required />

                                    {
                                        error.last_name && <p className="error-text">{error.last_name} </p>
                                    }
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Email */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerEmail">
                                        Email Address *
          </label>

                                    <input value={form.email} name='email' onChange={inputChange} className="form-control form-control-sm" id="registerEmail" type="email" placeholder="Email Address *" required />

                                    {
                                        error.email && <p className="error-text">{error.email} </p>
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPassword">
                                        Password *
          </label>
                                    <input className="form-control form-control-sm" id="registerPassword" type="password" placeholder="Password *" required />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                {/* Password */}
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="registerPasswordConfirm">
                                        Confirm Password *
          </label>
                                    <input className="form-control form-control-sm" id="registerPasswordConfirm" type="password" placeholder="Confrm Password *" required />
                                </div>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Link */}
                                <div className="form-group font-size-sm text-muted">
                                    By registering your details, you agree with our Terms &amp; Conditions,
                                    and Privacy and Cookie Policy.
        </div>
                            </div>
                            <div className="col-12 col-md">
                                {/* Newsletter */}
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                                        <label className="custom-control-label" htmlFor="registerNewsletter">
                                            Sign me up for the Newsletter!
            </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Button */}
                                <button className="btn btn-sm btn-dark" type="submit" onClick={onSubmit}>
                                    Register
        </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}