/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Expense } from "./Expense";
import { ExpenseCountArgs } from "./ExpenseCountArgs";
import { ExpenseFindManyArgs } from "./ExpenseFindManyArgs";
import { ExpenseFindUniqueArgs } from "./ExpenseFindUniqueArgs";
import { DeleteExpenseArgs } from "./DeleteExpenseArgs";
import { ExpenseService } from "../expense.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Expense)
export class ExpenseResolverBase {
  constructor(
    protected readonly service: ExpenseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async _expensesMeta(
    @graphql.Args() args: ExpenseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Expense])
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "any",
  })
  async expenses(
    @graphql.Args() args: ExpenseFindManyArgs
  ): Promise<Expense[]> {
    return this.service.expenses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Expense, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "read",
    possession: "own",
  })
  async expense(
    @graphql.Args() args: ExpenseFindUniqueArgs
  ): Promise<Expense | null> {
    const result = await this.service.expense(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Expense)
  @nestAccessControl.UseRoles({
    resource: "Expense",
    action: "delete",
    possession: "any",
  })
  async deleteExpense(
    @graphql.Args() args: DeleteExpenseArgs
  ): Promise<Expense | null> {
    try {
      return await this.service.deleteExpense(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
