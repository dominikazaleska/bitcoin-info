import React from 'react';
import './Table.css';

const Table = ({ data }) => {

  const Addresses = (addressesArray) => {
    if(addressesArray) {
      return addressesArray.map((address) => (
        <li key={address.toString()} className='to-ell mw6 truncate'>{address}</li>        
      ));
    }
  }

  let inputs = data.inputs;
  let inputItems = [];
  if(inputs) {
    inputItems = inputs.map((input) => (
        <table key={JSON.stringify(input)} className='f5 w-100 mw8 center'>
          <tbody className='1h-copy pa4'>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate dark-blue' colSpan='2'>Input</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Previous Hash</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{input.prev_hash}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Output Index</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{input.output_index}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Script</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{input.script}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Output Value</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{input.output_value}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Sequence</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{input.sequence}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Script Type</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{input.script_type}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Age</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{input.age}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Addresses</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'><ul>{Addresses(input.addresses)}</ul></td>
            </tr>
          </tbody>
        </table>
      ));
  }

  let outputs = data.outputs;
  let outputItems = [];
  if(outputs) {
    outputItems = outputs.map((output) => (
        <table key={JSON.stringify(output)} className='f5 w-100 mw8 center'>
          <tbody className='1h-copy pa4'>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 truncate dark-blue' colSpan='2'>Output</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Value</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{output.value}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Script</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{output.script}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Spent by</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{output.spent_by}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Script type</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'>{output.script_type}</td>
            </tr>
            <tr>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-20 truncate'>Addresses</td>
              <td className='pv3 pl3 pr3 b--black-10 b--dashed bw1 mw4 w-80 truncate'><ul>{Addresses(output.addresses)}</ul></td>
            </tr>
          </tbody>
        </table>
      ));
  }

	return (
		<div key='main-table-div' className='pa4'>
      <div key='side-table-div' className='overflow-auto'>
			  <table key='main-table' className='f5 w-100 mw8 center'>
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
    					  <ul>{Addresses(data.addresses)}</ul>
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
        <table className='f5 w-100 mw8 center'>
          <tbody className='1h-copy pa4'>
            <tr>
              <td className='pv3 pl3 pr3 b b--black-10 b--dashed bw1 mw4 truncate' colSpan='2'>Inputs</td>
            </tr>
          </tbody>
        </table>
        {inputItems}
        <table className='f5 w-100 mw8 center'>
          <tbody className='1h-copy pa4'>
            <tr>
              <td className='pv3 pl3 pr3 b b--black-10 b--dashed bw1 mw4 truncate' colSpan='2'>Outputs</td>
            </tr>
          </tbody>
        </table>
        {outputItems}        
      </div>
		</div>
	);
}

export default Table;