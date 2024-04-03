import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { IconButton } from "./IconButton";
import { Table } from "./table/Table";
import { TableHeader } from "./table/TableHeader";
import { TableCell } from "./table/TableCell";
import { TableRow } from "./table/TableRow";

export function AttendList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <h1 className="font-bold text-2xl items-center">Participants</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm gap-3 flex items-center">
          <Search className="size-4 text-green-200" />
          <input
            className=" bg-transparent flex-1 outline-none border-0 p-0 text-sm  "
            placeholder="Search Participants..."
          />
        </div>
      </div>
      <Table>
        <thead>
          <TableRow className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader>Code</TableHeader>
            <TableHeader>Participants</TableHeader>
            <TableHeader>Registration date</TableHeader>
            <TableHeader>Registration check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10 "
                  />
                </TableCell>
                <TableCell>1233455</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Joana Cardoso
                    </span>
                    <span>joanamariacardoso@gmail.com</span>
                  </div>
                </TableCell>
                <TableCell>7 day atrás</TableCell>
                <TableCell>9 dia atrás</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4 " />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>Monstrando 10 de 128 items</TableCell>
            <TableCell
              className="py-3 px-4  text-sm font-semibold text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>Page 1 de 20</span>

                <div className="flex gap-1.5">
                  <IconButton transparent>
                    <ChevronLeft className="size-4 " />
                  </IconButton>
                  <IconButton transparent>
                    <ChevronsLeft className="size-4 " />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4 " />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4 " />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  );
}
