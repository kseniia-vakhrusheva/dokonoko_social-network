import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY":"9339e7f5-caac-4b6a-a68f-2fcf26ed3823"}
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    setUnfollow (id) {
        return instance.delete(`follow/${id}`, )
        .then(response => response.data)
    },
    setFollow (id) {
        return instance.post(`follow/${id}`, {})
        .then(response => response.data)
    }

}