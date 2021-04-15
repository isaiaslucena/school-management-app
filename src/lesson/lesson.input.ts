import { Field, InputType } from "@nestjs/graphql";
import { IsDateString, IsEmpty, MinLength } from "class-validator";

@InputType()
export class CreateLessonInput {
  @IsEmpty()
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @Field()
  endDate: string;
}