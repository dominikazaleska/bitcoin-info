import React from 'react';
import './Table.css';

const Table = ({ data }) => {
	console.log("Table data", data)
	let numbers = data.addresses
	console.log(numbers)

	let listItems = [];
	if(numbers) {
		listItems = numbers.map((number) => (
  			<li key={number.toString()}>{number}</li>
  		));		
	}
	return (
		<div className='pa2'>
			<table styleName='overflow-x:auto'>
  				<tr>
    				<td>Addresses</td>
    				<td>
    					<ul>{listItems}</ul>
    				</td>
  				</tr>
  				<tr>
    				<td>Transaction hash</td>
    				<td>{data.block_hash}</td>
  				</tr>
  				<tr>
    				<td>Block height</td>
    				<td>{data.block_height}</td>
  				</tr>
  				<tr>
    				<td>Block index</td>
    				<td>{data.block_index}</td>
  				</tr>
  				<tr>
    				<td>Confidence</td>
    				<td>{data.confidence}</td>
  				</tr>
  				<tr>
    				<td>Confirmations</td>
    				<td>{data.confirmations}</td>
  				</tr>
  				<tr>
    				<td>Confirmed</td>
    				<td>{data.confirmed}</td>
  				</tr>
  				<tr>
    				<td>Double spend</td>
    				<td>{data.double_spend}</td>
  				</tr>
  				<tr>
    				<td>Fees</td>
    				<td>{data.fees}</td>
  				</tr>
  				<tr>
    				<td>Hash</td>
    				<td>{data.hash}</td>
  				</tr>
  				<tr>
    				<td>Lock Time</td>
    				<td>{data.lock_time}</td>
  				</tr>
  				<tr>
    				<td>Preference</td>
    				<td>{data.preference}</td>
  				</tr>
  				<tr>
    				<td>Received</td>
    				<td>{data.received}</td>
  				</tr>
  				<tr>
    				<td>Relayed by</td>
    				<td>{data.relayed_by}</td>
  				</tr>
  				<tr>
    				<td>Size</td>
    				<td>{data.size}</td>
  				</tr>
  				<tr>
    				<td>Vin sz</td>
    				<td>{data.vin_sz}</td>
  				</tr>
  				<tr>
    				<td>Vout sz</td>
    				<td>{data.vout_sz}</td>
  				</tr>
			</table>
		</div>
	);
}

export default Table;