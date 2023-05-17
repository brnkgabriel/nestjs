import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
    return `Cat ${cat.name} successfully created`
  }

  findAll(): CreateCatDto[] {
    return this.cats;
  }

  findOne(id: number | string) {
    return `The cat id is #${id}`
  }
}
