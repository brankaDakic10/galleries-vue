import {
    authService
} from './../services/AuthService'

//    handler
export function requiresAuth(to) {


    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authService.isAuthenticated()) {
            // return window.location.href = '/login'
            return Promise.reject({
                name: 'login'
            })
        }

        authService.setAxiosDefaultAuthorizationHeader()
    }

    return Promise.resolve(to)
}

//    handler

export function guestOnly(to) {


    if (to.matched.some(record => record.meta.guestOnly) &&
        authService.isAuthenticated()
    ) {
        return Promise.reject({
            name: 'home'
        })
    }

    return Promise.resolve(to)
}