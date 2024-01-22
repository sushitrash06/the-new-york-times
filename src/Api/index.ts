import axios from "axios"

const API_KEY = 'naQsYhBi81QJwHSKRZjVryogCGAdcEzC'

export const ApiSearch = async (keyword:string) => { 
    try {
        const response = await axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&api-key=${API_KEY}`
        )
        return response
    } catch (error) {
        console.log('ERROR FETCH DATA :', error)
        throw error
    }
}

export const ApiSection = async (section:string) => { 
    try {
        const response = await axios.get(
            `https://api.nytimes.com/services/xml/rss/nyt/${section}.xml&api-key=${API_KEY}`
        )
        return response
    } catch (error) {
        console.log('ERROR FETCH DATA :', error)
        throw error
    }
}