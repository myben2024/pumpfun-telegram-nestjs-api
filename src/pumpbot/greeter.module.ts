import { Module } from '@nestjs/common';
import { GreeterUpdate } from './greeter.update';
import { RandomNumberScene } from './scenes/random-number.scene';
import { GreeterWizard } from './wizard/greeter.wizard';
import { PumpFunService } from 'src/pump-services/pump-fun.service';

@Module({
  providers: [GreeterUpdate, RandomNumberScene, GreeterWizard, PumpFunService],
})
export class GreeterModule {}
