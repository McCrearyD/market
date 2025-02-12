import React, { ReactElement } from 'react'
import DataTable, { IDataTableProps } from 'react-data-table-component'
import Loader from './Loader'
import styles from './Table.module.css'

interface TableProps extends IDataTableProps {
  isLoading?: boolean
  emptyMessage?: string
  sortField?: string
  sortAsc?: boolean
  className?: string
}

function Empty({ message }: { message?: string }): ReactElement {
  return <div className={styles.empty}>{message || 'No results found'}</div>
}

export default function Table({
  data,
  columns,
  isLoading,
  emptyMessage,
  pagination,
  paginationPerPage,
  sortField,
  sortAsc,
  className,
  ...props
}: TableProps): ReactElement {
  return (
    <DataTable
      columns={columns}
      data={data}
      className={className ? styles.table + ` ${className}` : styles.table}
      noHeader
      pagination={pagination || data?.length >= 9}
      paginationPerPage={paginationPerPage || 10}
      paginationComponentOptions={{ noRowsPerPage: true }}
      noDataComponent={<Empty message={emptyMessage} />}
      progressPending={isLoading}
      progressComponent={<Loader />}
      defaultSortField={sortField}
      defaultSortAsc={sortAsc}
      {...props}
    />
  )
}
