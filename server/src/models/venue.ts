import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cities } from './cities';
import { Events } from './event';

@Table({
  modelName: 'venues',
  timestamps: false,
})
export class Venues extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER })
  venue_id!: number;
  @Column
  title!: string;
  @ForeignKey(() => Cities)
  @Column
  city_id_fk!: number;
  @BelongsTo(() => Cities)
  city: Cities;
  @Column
  address!: string;
  @Column
  google_address!: string;
  @Column
  alias!: string;
  @HasMany(() => Events)
  events: Events[];
}
