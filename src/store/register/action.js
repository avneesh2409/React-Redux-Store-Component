import { STORE_USERNAME, STORE_DOB, STORE_EMAIL, STORE_PASSWORD } from "./constant";

export const storeUsername = (username) => ({ type: STORE_USERNAME, username })
export const storeEmail = (email) => ({ type: STORE_EMAIL, email })
export const storePassword = (password) => ({ type: STORE_PASSWORD, password })
export const storeDob = (dob) => ({ type: STORE_DOB, dob })
