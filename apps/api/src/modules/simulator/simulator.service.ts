import { Injectable } from '@nestjs/common';

@Injectable()
export class SimulatorService {
  simulatePayment(data: { sourceAsset: string; destAsset: string; amount: string }) {
    // TODO: query Horizon /paths, calculate fees, return step-by-step route
    return { message: 'Payment simulation — implementation pending', data };
  }
}
