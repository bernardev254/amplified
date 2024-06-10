import { Module } from "@nestjs/common";
import { MaintenanceManagementService } from "./maintenancemanagement.service";
import { MaintenanceManagementController } from "./maintenancemanagement.controller";
import { MaintenanceManagementResolver } from "./maintenancemanagement.resolver";

@Module({
  controllers: [MaintenanceManagementController],
  providers: [MaintenanceManagementService, MaintenanceManagementResolver],
  exports: [MaintenanceManagementService],
})
export class MaintenanceManagementModule {}
