import { ApiPromise,HttpProvider } from '@polkadot/api';

const chain_api = async () =>{
    const provider = new HttpProvider('http://localhost:9933');
    const api = await ApiPromise.create({ provider });
    return api;
}

export default chain_api

