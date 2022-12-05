import { ApiPromise,HttpProvider } from '@polkadot/api';

const chain_api = async () =>{
    const provider = new HttpProvider('https://devnet.web3games.org/evm');
    const api = await ApiPromise.create({ provider });
    return api;
}

export default chain_api

