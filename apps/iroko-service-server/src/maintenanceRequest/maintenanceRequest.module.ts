import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceRequestModuleBase } from "./base/maintenanceRequest.module.base";
import { MaintenanceRequestService } from "./maintenanceRequest.service";
import { MaintenanceRequestController } from "./maintenanceRequest.controller";
import { MaintenanceRequestResolver } from "./maintenanceRequest.resolver";

@Module({
  imports: [MaintenanceRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceRequestController],
  providers: [MaintenanceRequestService, MaintenanceRequestResolver],
  exports: [MaintenanceRequestService],
})
export class MaintenanceRequestModule {}
