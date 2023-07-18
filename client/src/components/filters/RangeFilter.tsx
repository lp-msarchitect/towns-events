import React, { useMemo } from 'react';
import { ColumnFilterT, EventEntity } from '../../types';

// UI фильтра-диапазона
export const DateRangeColumnFilter: ColumnFilterT<EventEntity> = ({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) => {
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length
      ? preFilteredRows[0].values[id]
      : Date.now();

    let max = min;
    preFilteredRows.forEach((r) => {
      min = Math.min(+new Date(r.values[id]), +new Date(min));
      max = Math.max(+new Date(r.values[id]), +new Date(max));
    });
    return [new Date(min).toISOString(), new Date(max).toISOString()];
  }, [id, preFilteredRows]);

  return (
    <div style={{ display: 'flex' }}>
      <input
        type="datetime-local"
        value={filterValue[0] || min}
        onChange={(e) => {
          const val = e.target.value;

          setFilter((prev = []) => [val ? val : undefined, prev[1]]);
        }}
      />
      to
      <input
        type="datetime-local"
        value={filterValue[1] || max}
        onChange={(e) => {
          const val = e.target.value;
          setFilter((prev = []) => [prev[0], val ? val : undefined]);
        }}
        placeholder={`to ${max}`}
      />
    </div>
  );
};
