import type { Column } from 'react-table';
import { DateRangeColumnFilter, SelectColumnFilter } from '../filters';
import { EventEntity } from '../../types';
import { formatDate } from '../../utils';
import { betweenDates } from '../filters/filters';

export const COLUMNS: Column<EventEntity>[] = [
  {
    Header: 'ID',
    accessor: 'event_id',
    disableFilters: true,
    // Filter: FilterForm,
  },
  {
    Header: 'Title',
    accessor: 'title',
    disableFilters: true,
    // Filter: FilterForm,
  },
  {
    Header: 'Date',
    accessor: 'date',
    Filter: DateRangeColumnFilter,
    filter: betweenDates,
    Cell: ({ cell }) => {
      return cell.value ? <div>{formatDate(cell.value)}</div> : null;
    },
  },
  {
    Header: 'Category',
    accessor: 'category',
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
  {
    Header: 'Tags',
    accessor: 'web_tag_groups',
    filter: 'text',
  },
];
