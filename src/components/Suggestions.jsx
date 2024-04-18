import React from 'react';
import '../index.css'

const Suggestions = ({suggestions, onClick}) => {
	return (
		<li className='title-list'>
			{suggestions
				.map(movie =>
				<div
					className='title'
					key={movie.imdbID}
					style={{
						cursor: 'pointer'
					}}
					onClick={() => onClick(movie.Title)}
				>
					{movie.Title}
				</div>)}
		</li>
	);
};

export default Suggestions;