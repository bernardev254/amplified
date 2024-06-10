import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MaintenanceManagementService } from "./maintenancemanagement.service";

@swagger.ApiTags("maintenanceManagements")
@common.Controller("maintenanceManagements")
export class MaintenanceManagementController {
  constructor(protected readonly service: MaintenanceManagementService) {}

  @common.Post("/manage-maintenance")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageMaintenanceRequest(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ManageMaintenanceRequest(body);
      }
}
