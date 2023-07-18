import { FilterType } from 'react-table';
import { EventEntity } from '../../types';

// кастомный тип фильтрации
export const betweenDates: FilterType<EventEntity> = (
  rows,
  ids,
  filterValue
) => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      const isBigger =
        !filterValue[0] || +new Date(rowValue) > +new Date(filterValue[0]);
      const isSmaller =
        !filterValue[1] || +new Date(rowValue) < +new Date(filterValue[1]);
      return isBigger && isSmaller;
    });
  });
};
