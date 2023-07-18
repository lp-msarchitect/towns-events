import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTable, useFilters } from 'react-table';
import { COLUMNS } from './columns';
import { EventsService } from '../../services/events.service';
import { Link, useParams } from 'react-router-dom';
import { DefaultColumnFilter } from '../filters';

const eventsService = new EventsService();

export const EventsList: FC<{}> = () => {
  const [events, setEvents] = useState([]);
  const { city_id } = useParams();

  useEffect(() => {
    eventsService.getAllEventInCity(city_id).then((data) => {
      setEvents(data);
    });
  }, [city_id]);

  const columns = useMemo(() => COLUMNS, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: events,
        defaultColumn: { Filter: DefaultColumnFilter, filter: 'text' },
      },
      useFilters
    );

  return (
    <>
      {!events.length ? (
        <div>Downloading...</div>
      ) : (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                    {column.canFilter ? (
                      <div>{column.render('Filter')}</div>
                    ) : null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.column.id !== 'title' ? (
                          cell.render('Cell')
                        ) : (
                          <Link to={`/event/${row.values['event_id']}`}>
                            {cell.render('Cell')}
                          </Link>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
    // <ul className="list">
    //   <h1>{title}</h1>
    //   {events.map(({ event_id, title }) => (
    //     <li key={event_id}>
    //       <Link to={`/event/${event_id}`}>{title}</Link>
    //     </li>
    //   ))}
    // </ul>
  );
};
