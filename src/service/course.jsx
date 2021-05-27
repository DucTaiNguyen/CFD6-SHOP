import Auth, { tokenHandle } from './auth'
import { endpoint } from './config'

const CourseApi = {
    list() {
        return fetch(`${endpoint}/elearning/v4/courses`, {
            method: 'GET',

        }).then(res => res.json())
    },
    async register(slug, data) {
        let token = JSON.parse(localStorage.getItem('token'))?.accessToken
        return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => tokenHandle(res, () => {
            let token = JSON.parse(localStorage.getItem('token'))?.accessToken

            return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => res.json())
        }))



    }
}

export default CourseApi