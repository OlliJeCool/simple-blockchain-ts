import { randomUUID } from "crypto";
import ITransaction from "../interfaces/tranasction.interface";

class Transaction implements ITransaction{
    public secret: string = randomUUID()

    constructor(
        public amount: number,
        public payer: string,
        public payee: string
    ){}


    toString(): string {
        return JSON.stringify(this);
    }
}



export default Transaction