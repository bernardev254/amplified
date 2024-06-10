import * as graphql from "@nestjs/graphql";
import { TenantScreeningService } from "./tenantscreening.service";

export class TenantScreeningResolver {
  constructor(protected readonly service: TenantScreeningService) {}

  @graphql.Mutation(() => String)
  async ScreenTenant(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ScreenTenant(args);
  }
}
