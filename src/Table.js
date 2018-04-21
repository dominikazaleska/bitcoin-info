import React from 'react';
import './Table.css';

const Table = ({ data }) => {
	let numbers = data.addresses;

	let listItems = [];
	if(numbers) {
		listItems = numbers.map((number) => (
  			<li key={number.toString()} className='to-ell mw6 truncate'>{number}</li>
  		));		
	}

	return (
		<div className='pa4'>
      <div className='overflow-auto'>
			  <table className='f4 w-100 mw8 center'>
          <tbody className='1h-copy pa4'>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Block index</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.block_index}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Transaction hash</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.block_hash}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Block height</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.block_height}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Hash</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.hash}</td>
            </tr>
  				  <tr>
    				  <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 w-20 mw4 truncate'>Addresses</td>
    				  <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 w-80 mw4 truncate'>
    					  <ul>{listItems}</ul>
    				  </td>
  				  </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Total</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.block_index}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Fees</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.fees}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Size</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.size}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Preference</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.preference}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Relayed by</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.relayed_by}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Confirmed</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.confirmed}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Received</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.received}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Ver</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.ver}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Lock Time</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{String(data.lock_time)}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Double spend</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{String(data.double_spend)}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate mw4 truncate'>Vin sz</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.vin_sz}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Vout sz</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.vout_sz}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Confirmations</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.confirmations}</td>
            </tr>
  				  <tr>
    				  <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>Confidence</td>
    				  <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate'>{data.confidence}</td>
  				  </tr>
          </tbody>
			  </table>
      </div>
		</div>
	);
}

export default Table;