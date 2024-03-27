import axios from "axios";
import React, {useEffect} from 'react'

/**
 * Executes side effects related to authorization based on the token provided.
 * @example 
 * ```
 * useAuthorization(appStore.authToken)
 * ```
 * @param {string} token - The authorization token to be used.
 */
function useAuthorization(token) {
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            console.log(`Bearer ${token}`);
        }
    })
}

export default useAuthorization