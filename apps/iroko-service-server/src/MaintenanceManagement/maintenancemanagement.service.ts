import { Injectable } from "@nestjs/common";

@Injectable()
export class MaintenanceManagementService {
  constructor() {}
  async ManageMaintenanceRequest(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
