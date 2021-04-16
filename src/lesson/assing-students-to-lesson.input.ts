/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ID, InputType } from "@nestjs/graphql";
import { IsUUID } from "class-validator";

@InputType()
export class AssignStudentsToLessonInput {
  @Field(type => ID)
  @IsUUID()
  lessonId: string;

  @Field(type => [ID])
  @IsUUID("all", { each: true })
  studentsIds: string[];
}