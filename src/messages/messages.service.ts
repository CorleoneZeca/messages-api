import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  // public means messagesRepo is automaticly assing to this class
  constructor(public messagesRepo: MessageRepository) {}

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    this.messagesRepo.create(content);
  }
}
