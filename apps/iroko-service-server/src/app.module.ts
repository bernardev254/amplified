import { Module } from "@nestjs/common";
import { TenantModule } from "./tenant/tenant.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { MaintenanceRequestModule } from "./maintenanceRequest/maintenanceRequest.module";
import { PropertyModule } from "./property/property.module";
import { ExpenseModule } from "./expense/expense.module";
import { UserModule } from "./user/user.module";
import { FinanceManagementModule } from "./FinanceManagement/financemanagement.module";
import { MaintenanceManagementModule } from "./MaintenanceManagement/maintenancemanagement.module";
import { NotificationsModule } from "./Notifications/notifications.module";
import { PaymentsModule } from "./Payments/payments.module";
import { TenantScreeningModule } from "./TenantScreening/tenantscreening.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    TenantModule,
    InvoiceModule,
    MaintenanceRequestModule,
    PropertyModule,
    ExpenseModule,
    UserModule,
    FinanceManagementModule,
    MaintenanceManagementModule,
    NotificationsModule,
    PaymentsModule,
    TenantScreeningModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
