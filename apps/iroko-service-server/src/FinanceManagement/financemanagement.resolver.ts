import * as graphql from "@nestjs/graphql";
import { FinanceManagementService } from "./financemanagement.service";

export class FinanceManagementResolver {
  constructor(protected readonly service: FinanceManagementService) {}

  @graphql.Mutation(() => String)
  async HandleInvoice(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.HandleInvoice(args);
  }
}
