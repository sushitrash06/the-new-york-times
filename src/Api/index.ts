import axios from "axios"

const API_KEY = 'naQsYhBi81QJwHSKRZjVryogCGAdcEzC'

export const ApiSearch = async (keyword?:string,page?:number) => { 
    try {
        const response = await axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}&api-key=${API_KEY}`
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
            `https://api.nytimes.com/services/xml/rss/nyt/${section}.xml`
        )
        return response
    } catch (error) {
        console.log('ERROR FETCH DATA :', error)
        throw error
    }
}

export const ApiPopular = async () => { 
  try {
      const response = await axios.get(
          `https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=${API_KEY}`
      )
      return response
  } catch (error) {
      console.log('ERROR FETCH DATA :', error)
      throw error
  }
}