import * as graphql from "@nestjs/graphql";
import { PaymentRequest } from "../payments/PaymentRequest";
import { PaymentsService } from "./payments.service";

export class PaymentsResolver {
  constructor(protected readonly service: PaymentsService) {}

  @graphql.Mutation(() => String)
  async HandlePayment(
    @graphql.Args()
    args: PaymentRequest
  ): Promise<string> {
    return this.service.HandlePayment(args);
  }

  @graphql.Query(() => String)
  async ProcessPayment(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ProcessPayment(args);
  }
}
