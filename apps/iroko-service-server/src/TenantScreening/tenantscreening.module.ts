import { Module } from "@nestjs/common";
import { TenantScreeningService } from "./tenantscreening.service";
import { TenantScreeningController } from "./tenantscreening.controller";
import { TenantScreeningResolver } from "./tenantscreening.resolver";

@Module({
  controllers: [TenantScreeningController],
  providers: [TenantScreeningService, TenantScreeningResolver],
  exports: [TenantScreeningService],
})
export class TenantScreeningModule {}
