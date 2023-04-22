import Transaction from "../resources/transaction";

export interface transactionBroadcast{
    transaction: Transaction;
    senderPublicKey: string;
    signature: Buffer;
}