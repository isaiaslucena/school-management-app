import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(4)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;
}