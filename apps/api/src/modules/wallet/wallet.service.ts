import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletService {
  generate() {
    // TODO: use @stellar/stellar-sdk Keypair.random()
    return { message: 'Wallet generation — implementation pending' };
  }

  async fund(publicKey: string) {
    // TODO: call Friendbot https://friendbot.stellar.org?addr=<publicKey>
    return { message: `Funding ${publicKey} — implementation pending` };
  }
}
