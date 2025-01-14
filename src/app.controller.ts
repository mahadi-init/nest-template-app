import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './utils/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('calculate/:id')
  calculateNumber(
    @Body() body: { val1: number; val2: number },
    @Query('search') search: string,
    @Query('limit') limit: number,
    @Param('id') id: string,
  ) {
    console.log('params', id);
    console.log('queries', search, limit);
    return this.appService.calculateData(body.val1, body.val2);
  }
}
