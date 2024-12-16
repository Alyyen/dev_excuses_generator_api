import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ExcusesService } from './excuses.service';
import { Tag } from './tag.enum';

@Controller('excuses')
export class ExcusesController {
  constructor(private readonly excusesService: ExcusesService) {}

  @Post()
  create(
    @Body()
    datas: {
      http_code: number;
      tag: Tag;
      message: string;
    },
  ) {
    return this.excusesService.create(datas);
  }

  @Get()
  findAll() {
    return this.excusesService.findAll();
  }

  @Get('/any')
  findAny(@Query('http_codes') http_codes: string) {
    const httpCodeArray = http_codes
      .split(',')
      .map((code) => parseInt(code, 10))
      .filter((code) => !isNaN(code));
    return this.excusesService.findAny(httpCodeArray);
  }

  @Get(':http_code')
  findByHttpCode(@Param('http_code') http_code: number) {
    return this.excusesService.findByHttpCode(http_code);
  }
}