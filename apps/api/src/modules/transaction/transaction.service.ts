import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TransactionService {
  async inspect(hash: string) {
    // TODO: fetch from Horizon, decode XDR, annotate operations
    throw new NotFoundException(`Transaction ${hash} — implementation pending`);
  }
}
