import React, { useState, useRef } from 'react';
import { loadComplete, updateSuggestions } from '../functions/autocomplete';
import Suggestions from './Suggestions';

const Input = () => {
	const [value, setValue] = useState('')
	const [suggestions, setSuggestions] = useState([])
	const ref = useRef(0)

	const onChange = (event) => {
		ref.current++
		const refCounter = ref.current;
		console.log('ref.current: ', ref.current, 'refCounter: ', refCounter);
		setValue(event.target.value)
		updateSuggestions(event.target.value, setSuggestions)
	}

	const onSelectSuggestions = (title) => {
		setValue(title)
		setSuggestions([])
	}

	return (
		<div>
			<input className='input' placeholder='Введите текст' onChange={e => onChange(e)} value={value} />
		 	{Boolean(suggestions) && <Suggestions suggestions={suggestions} onClick={onSelectSuggestions}/>}
		</div>
	);
};

export default Input;