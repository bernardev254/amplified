import { Module } from "@nestjs/common";
import { FinanceManagementService } from "./financemanagement.service";
import { FinanceManagementController } from "./financemanagement.controller";
import { FinanceManagementResolver } from "./financemanagement.resolver";

@Module({
  controllers: [FinanceManagementController],
  providers: [FinanceManagementService, FinanceManagementResolver],
  exports: [FinanceManagementService],
})
export class FinanceManagementModule {}
