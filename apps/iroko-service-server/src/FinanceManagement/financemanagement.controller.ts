import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FinanceManagementService } from "./financemanagement.service";

@swagger.ApiTags("financeManagements")
@common.Controller("financeManagements")
export class FinanceManagementController {
  constructor(protected readonly service: FinanceManagementService) {}

  @common.Post("/handle-invoice")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleInvoice(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HandleInvoice(body);
      }
}
