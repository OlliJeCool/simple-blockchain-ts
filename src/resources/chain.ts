import IChain from "../interfaces/chain.interface";
import Block from "./block";
import Transaction from "./transaction";

class Chain implements IChain{
    public static instance = new Chain()

    chain: Block[];

    constructor(){
        this.chain = [
            new Block(1, '', [new Transaction(0.1, 'genesis', 'Oli')])
        ];
    }

    get lastBlock(){
        return this.chain[this.chain.length-1];
    }

    
}


export default Chain