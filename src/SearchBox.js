import React from 'react';

const SearchBox = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<input className='f4 pa3 w-50 center bn bg-washed-blue truncated' type='text' placeholder="Transaction Hash" onChange={onInputChange}/>
			<button 
				className='w-30 f4 link pv3 white bg-blue b--none'
				onClick={onButtonSubmit}>Check</button>								
		</div>
	);
}

export default SearchBox;