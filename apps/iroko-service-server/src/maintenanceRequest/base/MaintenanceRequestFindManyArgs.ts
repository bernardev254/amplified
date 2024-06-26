/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MaintenanceRequestWhereInput } from "./MaintenanceRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MaintenanceRequestOrderByInput } from "./MaintenanceRequestOrderByInput";

@ArgsType()
class MaintenanceRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MaintenanceRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MaintenanceRequestWhereInput, { nullable: true })
  @Type(() => MaintenanceRequestWhereInput)
  where?: MaintenanceRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [MaintenanceRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MaintenanceRequestOrderByInput], { nullable: true })
  @Type(() => MaintenanceRequestOrderByInput)
  orderBy?: Array<MaintenanceRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MaintenanceRequestFindManyArgs as MaintenanceRequestFindManyArgs };
