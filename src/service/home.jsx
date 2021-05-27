import { endpoint } from './config'

const HomeApi = {
    list() {
        return fetch(`${endpoint}/elearning/v4/home`, {
            method: 'GET',

        }).then(res => res.json())
    }
}

export default HomeApi