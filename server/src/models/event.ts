import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Venues } from './venue';
import { Cities } from './cities';

@Table({
  modelName: 'events',
  timestamps: false,
})
export class Events extends Model {
  @Column({ primaryKey: true, type: DataType.INTEGER })
  event_id!: number;
  @Column
  title!: string;
  @Column
  description!: string;
  @Column({ type: DataType.DATE })
  date!: string;
  @Column
  image!: string;
  @ForeignKey(() => Venues)
  @Column
  venue_id_fk!: number;
  @BelongsTo(() => Venues)
  venue: Venues;
  @Column
  url!: string;
  @Column
  category!: string;
  @Column({ type: DataType.INTEGER })
  age!: number;
  @Column
  web_tag_groups!: string;
  @Column
  date_type!: string;
  @Column({ type: DataType.INTEGER })
  min_price!: number;
  @Column({ type: DataType.INTEGER })
  max_price!: number;
}
