import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationsService {
  constructor() {}
  async SendRentReminder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
