import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ScoreService } from './score.service';

@Controller('scores')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    return this.scoreService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body('value') value: number, @Request() req: any) {
    // req.user.id vem do payload do JWT
    return this.scoreService.create(value, req.user.id);
  }
}
