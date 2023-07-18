import React from 'react';
import { ColumnFilterT, EventEntity } from '../../types';

// UI дефолтного фильтра
export const DefaultColumnFilter: ColumnFilterT<EventEntity> = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      type="text"
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`${count} records...`}
    />
  );
};
