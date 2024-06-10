import * as graphql from "@nestjs/graphql";
import { NotificationsService } from "./notifications.service";

export class NotificationsResolver {
  constructor(protected readonly service: NotificationsService) {}

  @graphql.Mutation(() => String)
  async SendRentReminder(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendRentReminder(args);
  }
}
