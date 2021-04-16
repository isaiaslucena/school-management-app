import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity('student')
export class StudentEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  createdAt: string;
}
