import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageFormatterService {
  public formatMessage(message: string): string {
    return `[${new Date().toLocaleString()}] ${message}`;
  }
}
