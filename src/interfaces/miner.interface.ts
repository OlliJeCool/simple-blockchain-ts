import Block from "../resources/block";
import Transaction from "../resources/transaction";

interface IMiner{
    mine(block: Block): void;
    processTransaction(
        transaction: Transaction,
        senderPublicKey: string,
        signature: Buffer
        ): void;
}


export default IMiner;