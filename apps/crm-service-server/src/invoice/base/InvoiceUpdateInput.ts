/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { InvoiceItemUpdateManyWithoutInvoicesInput } from "./InvoiceItemUpdateManyWithoutInvoicesInput";

@InputType()
class InvoiceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: () => InvoiceItemUpdateManyWithoutInvoicesInput,
  })
  @ValidateNested()
  @Type(() => InvoiceItemUpdateManyWithoutInvoicesInput)
  @IsOptional()
  @Field(() => InvoiceItemUpdateManyWithoutInvoicesInput, {
    nullable: true,
  })
  invoiceItems?: InvoiceItemUpdateManyWithoutInvoicesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  invoiceNumber?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;
}

export { InvoiceUpdateInput as InvoiceUpdateInput };
