import Block from "./block";
import Transaction from "./transaction";
import * as crypto from 'crypto';
import Chain from "./chain";
import IMiner from "../interfaces/miner.interface";

class Miner implements IMiner{
    private transactions: Transaction[] = []
    
    mine(block: Block){
        let solution: number = 1;
        console.log('⛏️  mining...')

        while(true){
            block.nonce = solution;
            const attempt = block.hash;
            console.log(`Attempting: ${attempt}`);
            if(attempt.substring(0,4) === '0000'){
                console.log(`Solved: ${solution}`);
                return
            }
            solution += 1;
        }
    }


    processTransaction(transaction: Transaction, senderPublicKey: string, signature: Buffer){
        const verify = crypto.createVerify('SHA256');
        verify.update(transaction.toString());

        const isValid = verify.verify(senderPublicKey, signature);
        if(isValid){
            if(this.transactions.length < 5){
                this.transactions.push(transaction)
            }
            else{
                const newBlock = new Block(Chain.instance.lastBlock.id+1, Chain.instance.lastBlock.hash, this.transactions)
                this.mine(newBlock)
                Chain.instance.chain.push(newBlock);
                this.transactions = []
            }
        }
    }

}


export default Miner;