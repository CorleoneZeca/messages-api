import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { get } from 'http';
import { CreateMessageDto } from './dtos/create.message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageServices: MessagesService) {}

  @Get()
  listMessages() {
    return this.messageServices.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageServices.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageServices.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
