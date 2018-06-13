import axios from 'axios'

export default class GalleriesService {
    constructor () {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }
    getAll () {
        return axios.get()
    }
    getGallery(id) {
        return axios.get(`galleries/${id}`)
    }
    getUser(id) {
        return axios.get(`authors/${id}`)
    }
    add (gallery) {
        return axios.post('create', gallery)
    }
    edit (gallery) {
        return axios.put(`edit-gallery/${gallery.id}`, gallery) 
    }
    remove (id) {
        return axios.delete(`galleries/${id}`) 
    }
  

}
export const galleriesService = new GalleriesService()