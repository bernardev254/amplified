import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MaintenanceRequestResolverBase } from "./base/maintenanceRequest.resolver.base";
import { MaintenanceRequest } from "./base/MaintenanceRequest";
import { MaintenanceRequestService } from "./maintenanceRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MaintenanceRequest)
export class MaintenanceRequestResolver extends MaintenanceRequestResolverBase {
  constructor(
    protected readonly service: MaintenanceRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
