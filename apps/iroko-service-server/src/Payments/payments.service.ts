import { Injectable } from "@nestjs/common";
import { PaymentRequest } from "../payments/PaymentRequest";

@Injectable()
export class PaymentsService {
  constructor() {}
  async HandlePayment(args: PaymentRequest): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProcessPayment(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
