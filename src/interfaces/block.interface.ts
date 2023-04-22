import Transaction from "../resources/transaction";


export default interface IBlock{
    prevHash: string;
    ts: number;
    transactions: Transaction[]
    nonce: number;

}