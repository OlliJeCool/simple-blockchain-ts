import IWallet from "../interfaces/wallet.interface";
import * as crypto from 'crypto';
import Transaction from "./transaction";
import { transactionBroadcast } from "../definitions/definitions";

class Wallet implements IWallet{
    public publicKey: string;
    private privateKey: string;
    
    constructor(){
        const keypair = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
            publicKeyEncoding: { type: 'spki', format: 'pem' },
            privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
          });

        this.publicKey = keypair.publicKey;
        this.privateKey = keypair.privateKey;
    }


    sendMoney(amount: number, payeePublicKey: string): transactionBroadcast {
        const transaction = new Transaction(amount, this.publicKey, payeePublicKey)

        const sign = crypto.createSign('SHA256');
        sign.update(transaction.toString()).end();

        const signature = sign.sign(this.privateKey)
        return { transaction: transaction, senderPublicKey: this.publicKey, signature: signature }
    }
}

export default Wallet