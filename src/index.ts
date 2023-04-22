import Chain from "./resources/chain";
import Miner from "./resources/miner";
import Wallet from "./resources/wallet";

const bob = new Wallet();
const alice = new Wallet();
const miner = new Miner();


for (let i = 0; i <= 5; i++) {
  const transaction = bob.sendMoney(10, alice.publicKey);
  miner.processTransaction(transaction.transaction, transaction.senderPublicKey, transaction.signature);
}


console.log(Chain.instance.chain);
