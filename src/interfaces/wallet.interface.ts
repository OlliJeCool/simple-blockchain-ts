export default interface IWallet{
    publicKey: string;

    sendMoney(amount: number, payeePublicKey: string): void;
}