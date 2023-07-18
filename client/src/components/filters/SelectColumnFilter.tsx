import React, { useMemo } from 'react';
import { ColumnFilterT, EventEntity } from '../../types';

// UI фильтра-селектора
export const SelectColumnFilter: ColumnFilterT<EventEntity> = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = useMemo(() => {
    const opts = new Set();
    preFilteredRows.forEach((r) => {
      opts.add(r.values[id]);
    });
    return [...opts.values()];
  }, [id, preFilteredRows]);

  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((o: any, i) => (
        <option value={o} key={i}>
          {o}
        </option>
      ))}
    </select>
  );
};
