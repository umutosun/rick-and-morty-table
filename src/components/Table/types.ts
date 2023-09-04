import { ColumnDef } from "@tanstack/react-table";
export interface TableProps {
  data: any[];
  columns: ColumnDef<any>[];
  rowSelection?: any;
  setRowSelection?: (rowSelection: any) => void;
}
