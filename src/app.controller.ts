import { Controller, Get, Query } from '@nestjs/common';
import { PumpFunService } from './pump-services/pump-fun.service';
import { PublicKey } from '@solana/web3.js';
import { BaseResponse } from './share/base-response';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@ApiTags('API')
@Controller()
export class AppController {
  constructor(private readonly appService: PumpFunService) {}

  @ApiOperation({ summary: 'Return a hello message' })
  @ApiResponse({ status: 200, description: 'Returns a hello message.' })
  @Get()
  getHello(): string {
    return 'Hello';
  }

  @ApiOperation({ summary: 'Get wallet address' })
  @ApiResponse({ status: 200, description: 'Returns the wallet address.' })
  @Get('/my-address')
  async getMyAddress() {
    const address = await this.appService.getMyWallet();
    return BaseResponse.succeed(address);
  }

  @ApiOperation({ summary: 'Get SOL balance' })
  @ApiResponse({ status: 200, description: 'Returns the SOL balance.' })
  @Get('/sol-balance')
  async getSOLBalance() {
    const sol = await this.appService.getSOLBalance();
    return BaseResponse.succeed(sol);
  }

  @ApiOperation({ summary: 'Get token balance' })
  @ApiQuery({
    name: 'contract',
    required: true,
    description: 'Contract address as a string',
  })
  @ApiResponse({ status: 200, description: 'Returns the token balance.' })
  @Get('/token-balance')
  async getTokenBalance(@Query('contract') contract: string) {
    const publicKey = new PublicKey(contract); // Convert contract address to PublicKey
    const balance = await this.appService.getTokenBalance(publicKey);
    return BaseResponse.succeed(balance);
  }

  @ApiOperation({ summary: 'Buy tokens' })
  @ApiQuery({
    name: 'contract',
    required: true,
    description: 'Contract address as a string',
  })
  @ApiQuery({
    name: 'amount',
    required: true,
    description: 'Amount of tokens to buy',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the result of the buy operation.',
  })
  @Get('/buy')
  async Buy(
    @Query('contract') contract: string,
    @Query('amount') amount: number,
  ) {
    const publicKey = new PublicKey(contract); // Convert contract address to PublicKey
    const result = await this.appService.buy(publicKey, amount);
    return BaseResponse.succeed(result);
  }

  @ApiOperation({ summary: 'Sell tokens' })
  @ApiQuery({
    name: 'contract',
    required: true,
    description: 'Contract address as a string',
  })
  @ApiQuery({
    name: 'amount',
    required: true,
    description: 'Amount of tokens to sell',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the result of the sell operation.',
  })
  @Get('/sell')
  async Sell(
    @Query('contract') contract: string,
    @Query('amount') amount: number,
  ) {
    const publicKey = new PublicKey(contract); // Convert contract address to PublicKey
    const result = await this.appService.sell(publicKey, amount);
    return BaseResponse.succeed(result);
  }
}
