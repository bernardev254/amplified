import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TenantScreeningService } from "./tenantscreening.service";

@swagger.ApiTags("tenantScreenings")
@common.Controller("tenantScreenings")
export class TenantScreeningController {
  constructor(protected readonly service: TenantScreeningService) {}

  @common.Post("/screen-tenant")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScreenTenant(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ScreenTenant(body);
      }
}
