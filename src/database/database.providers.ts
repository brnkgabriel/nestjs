import { DynamicModule } from "@nestjs/common";

export const createDatabaseProviders = (options: any, entities: any[]):DynamicModule[] => {
  return [
    {
      module: null,
      controllers: null,
      exports: null,
      global: null,
      imports: null,
      providers: null,
    }
  ]
}