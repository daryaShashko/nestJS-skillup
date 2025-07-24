import { Injectable } from '@nestjs/common';
import { MessageFormatterService } from '../message-formatter/message-formatter.service';

@Injectable()
export class LoggerService {
  constructor(
    private readonly messageFormatterService: MessageFormatterService,
  ) {}

  public log(message: string) {
    return console.log(this.messageFormatterService.formatMessage(message));
  }
}
