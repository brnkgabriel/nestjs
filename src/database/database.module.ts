import { DynamicModule, Module } from '@nestjs/common';
import { Connection } from './connection.provider';
import { createDatabaseProviders } from './database.providers';

@Module({
  providers: [Connection]
})
export class DatabaseModule {}
