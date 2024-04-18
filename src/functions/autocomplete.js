import axios from 'axios';
import debounce from 'debounce';

const url = 'http://www.omdbapi.com/'
const apiKey = '4c798085'

// export const loadComplete = async (value) => {
// 	try {
// 		return await axios.get(`${url}?s=${value}&page1&apikey=${apiKey}`)
// 			.then(response => response.data.Search)
// 	} catch (error) {
// 		console.error('ERROR >>>', error);
// 	}
// } 

export const loadComplete = async (value) => {
	try {
		return await axios.get(`https://localhost:5000/`)
			.then(response => response.data.Search)
	} catch (error) {
		console.error('ERROR >>>', error);
	}
} 

export const updateSuggestions = debounce((value, setSuggestions) => {
	if (value.length <= 0) {
		setSuggestions([])
	} else {
			loadComplete(value)
				.then(result => result.filter(movie => movie.Title.includes(value)))
				.then(result => setSuggestions(result))
				.catch(error => console.warn(error))
	}
}, 1000)