import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SimulatorService } from './simulator.service';

@ApiTags('simulator')
@Controller('simulator')
export class SimulatorController {
  constructor(private readonly simulatorService: SimulatorService) {}

  @Post('payment')
  @ApiOperation({ summary: 'Simulate a Stellar payment path and estimate fees' })
  simulatePayment(
    @Body() body: { sourceAsset: string; destAsset: string; amount: string },
  ) {
    return this.simulatorService.simulatePayment(body);
  }
}
