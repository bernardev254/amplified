import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentsService } from "./payments.service";

@swagger.ApiTags("payments")
@common.Controller("payments")
export class PaymentsController {
  constructor(protected readonly service: PaymentsService) {}

  @common.Post("/handle-payment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandlePayment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HandlePayment(body);
      }

  @common.Get("/:id/process-payment")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessPayment(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProcessPayment(body);
      }
}
