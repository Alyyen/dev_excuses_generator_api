import { Module } from '@nestjs/common';
import { ExcusesService } from './excuses.service';
import { ExcusesController } from './excuses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExcuseSchema } from './schemas/excuse.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Excuse', schema: ExcuseSchema }]),
  ],
  controllers: [ExcusesController],
  providers: [ExcusesService],
})
export class ExcusesModule {}
