import { endpoint } from './config'

const ProductApi = {
    list() {
        return fetch(`${endpoint}/product`, {
            method: 'GET',

        }).then(res => res.json())
    }
}

export default ProductApi