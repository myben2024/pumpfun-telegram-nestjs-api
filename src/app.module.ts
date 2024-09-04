import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegrafModule } from 'nestjs-telegraf';
import { GreeterModule } from './pumpbot/greeter.module';
import { PumpFunService } from './pump-services/pump-fun.service';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '5033616776:AAEeKOea9t4VN47iouCg0oNpfM-FuJmALSo', // process.env.GREETER_BOT_TOKEN,
      include: [GreeterModule],
    }),
    GreeterModule,
  ],
  controllers: [AppController],
  providers: [PumpFunService],
})
export class AppModule {}
