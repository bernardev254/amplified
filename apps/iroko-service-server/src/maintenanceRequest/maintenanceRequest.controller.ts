import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaintenanceRequestService } from "./maintenanceRequest.service";
import { MaintenanceRequestControllerBase } from "./base/maintenanceRequest.controller.base";

@swagger.ApiTags("maintenanceRequests")
@common.Controller("maintenanceRequests")
export class MaintenanceRequestController extends MaintenanceRequestControllerBase {
  constructor(
    protected readonly service: MaintenanceRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
