import { useState } from 'react'

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phonePattern = /(\+84|0)+(3[2-9]|5[6|8|9]|9\d(?!5)|8[1-9]|7[0|6-9])+([0-9]{7})\b/i,
    urlPattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;


export default function useFormValidate(initialForm, validate) {
    let [form, setForm] = useState(initialForm)
    let [error, setError] = useState({})

    function inputChange(e) {
        let name = e.target.name
        let value = e.target.value

        setForm({
            ...form,
            [name]: value
        })
    }
    function check() {
        let errorObj = {}
        let { rule, message } = validate
        if (!message) {
            message = {}
        }
        for (let i in rule) {
            let r = rule[i]
            let m = message[i] || {}
            if (r.required && !form[i]) {
                errorObj[i] = m?.required || "Trường này không được để trống"
                continue;
            }
            if (r.pattern && form[i]) {
                let { pattern } = r
                if (pattern === 'email') pattern = emailPattern
                if (pattern === 'phone') pattern = phonePattern

                if (pattern === 'url') pattern = urlPattern

                if (!pattern?.test(form[i])) {
                    errorObj[i] = m?.pattern || "Trường này không đúng định dạng"
                }

            }
            if (r.min) {
                if (form[i].length < r.min) {
                    errorObj[i] = m?.min || `Trường này không được ít hơn ${r.min} ký tự`;
                }
            }
            if (r.max) {
                if (form[i].length > r.max) {
                    errorObj[i] = m?.max || `Trường này không được nhiều hơn ${r.max} ký tự`;
                }
            }
        }


        // if (!form.name.trim()) {
        //     errorObj.name = "Name bắt buộc"

        // }

        // if (!form.phone.trim()) {
        //     errorObj.phone = "Phone bắt buộc"

        // }
        // if (!/(\+84|0)+(3[2-9]|5[6|8|9]|9\d(?!5)|8[1-9]|7[0|6-9])+([0-9]{7})\b/.test(form.phone)) {
        //     errorObj.phone = "Phone không đúng định dạng"


        // }
        // if (!form.email.trim()) {
        //     errorObj.email = "Email bắt buộc"

        // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
        //     errorObj.email = "Email không đúng định dạng"


        // }


        // if (form.website.trim() && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.website.trim())) {
        //     errorObj.website = "Website không đúng định dạng"


        // }

        // if (!form.title.trim()) {
        //     errorObj.title = "Title bắt buộc"

        // }
        // if (!form.content.trim()) {
        //     errorObj.content = "Content bắt buộc"

        // }

        setError(errorObj)
        return errorObj
    }

    return {
        form,
        error,
        inputChange,
        check
    }
}