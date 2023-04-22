import IBlock from "../interfaces/block.interface";
import Transaction from "./transaction";
import * as crypto from 'crypto';

class Block implements IBlock{
    constructor(
        public id: number,
        public prevHash: string,
        public transactions: Transaction[],
        public ts = Date.now(),
        public nonce: number = 0
    ){}


    get hash(){
        const str = JSON.stringify(this);
        const hash = crypto.createHash('SHA256')
        hash.update(str).end();
        return hash.digest('hex');
    }
}

export default Block