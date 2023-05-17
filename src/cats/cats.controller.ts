import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Request,
  SetMetadata,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/https-exception.filter';
import { ValidationPipe } from 'src/validation.pipe';
import { ParseIntPipe } from 'src/parse-int.pipe';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorator';
import { LoggingInterceptor } from 'src/logging.interceptor';
import { TransformInterceptor } from 'src/transform.interceptor';
import { User } from 'src/user.decorator';
import { UserEntity } from './entities';

@UseFilters(new HttpExceptionFilter())
@UseGuards(RolesGuard)
@UseInterceptors(TransformInterceptor)
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  createCat(@Body() createCatDto: CreateCatDto, @Request() request: Request) {
    console.log('controller dto', createCatDto as any);
    console.log('controller req', request.body as any);
    return `controller dto is ${JSON.stringify(
      createCatDto,
    )}, controller req is ${JSON.stringify(request.body as any)}`;
  }

  @Post('create')
  @Roles('admin')
  async createWithGuard(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Post('new')
  async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return this.catsService.findAll();
    // try {
    //   throw new ForbiddenException()
    // } catch (error) { 
    //   return error
    // }
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: string, @User() user: UserEntity) {
    console.log(`user is ${user.uid}`)
    return this.catsService.findOne(id);
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
