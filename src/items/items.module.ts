import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { ItemSchema } from './schemas/item.schema';

@Module({
  //all imports made for this controller
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  //name of the controller
  controllers: [ItemsController],
  //services
  providers: [ItemsService],
})
export class ItemsModule {}
