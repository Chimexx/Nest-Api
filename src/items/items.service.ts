import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async create(item: Item): Promise<Item> {
    const savedItem = new this.itemModel(item);
    return await savedItem.save();
  }
  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete({ _id: id });
  }
  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
