import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Venues } from './venue';
import { Events } from './event';

@Table({
  modelName: 'cities',
  timestamps: false,
})
export class Cities extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER })
  city_id!: number;
  @Column
  title!: string;
  @HasMany(() => Venues)
  venues: Venues[];
}
