import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { WalletService } from './wallet.service';

@ApiTags('wallet')
@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('generate')
  @ApiOperation({ summary: 'Generate a new Stellar keypair' })
  generate() {
    return this.walletService.generate();
  }

  @Post('fund')
  @ApiOperation({ summary: 'Fund a testnet account via Friendbot' })
  fund(@Body('publicKey') publicKey: string) {
    return this.walletService.fund(publicKey);
  }
}
