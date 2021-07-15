export const getLocalToken = () => localStorage.getItem('token')
export const removeLocalToken = () => localStorage.removeItem('token')
export const setLocalToken = (token) => localStorage.setItem('token', token)

export const getLocalUserId = () => localStorage.getItem('userId')
export const removeLocalUserId = () => localStorage.removeItem('userId')
export const setLocalUserId = (userId) => localStorage.setItem('userId', userId)

export const getLocalTutor = () => localStorage.getItem('tutor')
export const removeLocalTutor = () => localStorage.removeItem('tutor')
export const setLocalTutor = (tutor) => localStorage.setItem('tutor', tutor)
