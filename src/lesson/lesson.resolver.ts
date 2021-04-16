/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(type => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Query(type => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation(type => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
