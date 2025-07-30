export class WrongTaskStatusException extends Error {
  constructor() {
    super('Wrong Task Status Exception');
    this.name = 'WrongTaskStatusException';
  }
}