import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  createCat(@Body() createCatDto: CreateCatDto, @Request() request: Request) {
    console.log('controller dto', createCatDto as any);
    console.log('controller req', request.body as any);
    return `controller dto is ${JSON.stringify(
      createCatDto,
    )}, controller req is ${JSON.stringify(request.body as any)}`;
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} with #${updateCatDto.name} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
