import * as graphql from "@nestjs/graphql";
import { MaintenanceManagementService } from "./maintenancemanagement.service";

export class MaintenanceManagementResolver {
  constructor(protected readonly service: MaintenanceManagementService) {}

  @graphql.Mutation(() => String)
  async ManageMaintenanceRequest(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ManageMaintenanceRequest(args);
  }
}
