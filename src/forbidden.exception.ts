import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden resource from custom exception', HttpStatus.FORBIDDEN)
  }
}