import { Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }
  @Post()
  create(): string {
    return 'This action adds a new item';
  }
  
}
