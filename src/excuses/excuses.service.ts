import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Excuse } from './schemas/excuse.schema';
import { Tag } from './enums/tag.enum';

@Injectable()
export class ExcusesService {
  constructor(
    @InjectModel(Excuse.name) private readonly excuseModel: Model<Excuse>,
  ) {}

  async create(datas: {
    http_code: number;
    tag: Tag;
    message: string;
  }): Promise<Excuse> {
    // Check if the tag is one of the predefined tags
    if (!Object.values(Tag).includes(datas.tag)) {
      throw new BadRequestException(
        'Invalid tag. Must be one of the predefined tags.',
      );
    }

    // Check if the message is valid
    if (!datas.message || datas.message.trim() === '') {
      throw new BadRequestException('Message cannot be empty.');
    }

    // Check if the suggested http_code is already in the database
    const httpCodeFound = await this.excuseModel
      .findOne({
        http_code: datas.http_code,
      })
      .exec();

    if (httpCodeFound) {
      throw new BadRequestException(
        'An excuse with this HTTP code already exists.',
      );
    }

    // Then, check if the suggested message is already in the database
    const messageFound = await this.excuseModel
      .findOne({
        message: datas.message,
      })
      .exec();

    if (messageFound) {
      throw new BadRequestException(
        'An excuse with this message already exists.',
      );
    }

    // If the http_code and message are unique, create the new excuse
    const newExcuse = new this.excuseModel(datas);
    return await newExcuse.save();
  }

  async findAll() {
    return await this.excuseModel.find().exec();
  }

  async findByHttpCode(http_code: number) {
    return await this.excuseModel.findOne({ http_code: http_code }).exec();
  }

  async findAny(http_codes: any): Promise<number> {
    const filteredExcuses = await this.excuseModel
      .find({ http_code: { $nin: [...http_codes, 404] } }) // Exclude http_codes
      .exec();

    // If no excuses are available after filtering, throw an error
    if (filteredExcuses.length === 0) {
      throw new BadRequestException(
        'No excuses available after excluding the given HTTP codes',
      );
    }

    const randomIndex = Math.floor(Math.random() * filteredExcuses.length);

    return filteredExcuses[randomIndex].http_code;
  }
}
