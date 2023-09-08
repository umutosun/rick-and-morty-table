import React, { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TableProps } from "./types";
const Table = ({
  data,
  columns,
  rowSelection,
  setRowSelection,
}: TableProps) => {
  const memoizedData = useMemo(() => data, [data]);
  const memoizedColumns = useMemo(() => columns, [columns]);

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="m-2 border-solid  border-2 border-neutralColors-color500 rounded-lg">
      <table>
        <tbody className="">
          {getHeaderGroups().map((headerGroup, index) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="w-72 border-solid border-b-2 uppercase p-4 text-sm">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tbody>
        <tbody className="">
          {getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={
                index % 2 === 0 ? "bg-neutralColors-color300" : "bg-white"
              }>
              {row.getVisibleCells().map((cell) => (
                <th key={cell.id}>
                  <p className="mt-5 text-sm ">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </p>
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
