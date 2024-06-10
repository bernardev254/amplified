import { Injectable } from "@nestjs/common";

@Injectable()
export class TenantScreeningService {
  constructor() {}
  async ScreenTenant(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
