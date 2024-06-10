import { Injectable } from "@nestjs/common";

@Injectable()
export class FinanceManagementService {
  constructor() {}
  async HandleInvoice(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
