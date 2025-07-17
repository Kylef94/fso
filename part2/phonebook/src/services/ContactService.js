import axios from 'axios'

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(resp => resp.data)
}

const create = newContact => {
    const request = axios.post(baseUrl, newContact)
    return request.then(resp => resp.data)
}

const update = (id, contact) => {
    const request = axios.put(`${baseUrl}/${id}`, contact)
    return request.then(resp => resp.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(resp => resp.data)
}

export default {getAll, create, update, remove}