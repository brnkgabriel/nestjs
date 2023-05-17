import { IsString, IsInt } from 'class-validator'

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number
}


export class ListAllEntities {
  readonly limit: string;
}

export class UpdateCatDto {
  readonly name: string;
}
 