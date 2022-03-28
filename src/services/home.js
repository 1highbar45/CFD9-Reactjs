import api from "../constants/api"

export const homeService = {
    gallery() {
        return api.get('/elearning/v4/gallery')
    },
    review() {
        return api.get('/elearning/v4/review')
    },
}