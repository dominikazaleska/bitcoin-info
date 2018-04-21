import React from 'react';

const SearchBox = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='pa10'>
			<input className='f4 pa3 w-50 center bn bg-washed-blue truncated' type='text' placeholder="Transaction Hash" onChange={onInputChange}/>
			<button 
				className='w-30 f4 link ph3 pv3 dib white bg-blue b--none'
				onClick={onButtonSubmit}>Check</button>								
		</div>
	);
}

export default SearchBox;