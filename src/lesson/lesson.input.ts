import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @Field()
  @MinLength(4)
  name: string;

  @Field()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;

  @IsUUID('all', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
