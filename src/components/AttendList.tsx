import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

import { IconButton } from "./IconButton";
import { Table } from "./table/Table";
import { TableHeader } from "./table/TableHeader";
import { TableCell } from "./table/TableCell";
import { TableRow } from "./table/TableRow";
import { attendees } from "../data/attendees";
import { ChangeEvent, useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

export function AttendList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length / 10);

  function onSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  function goToNextPage() {
    setPage(page + 1);
  }

  function goToPreviousPage() {
    setPage(page - 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <h1 className="font-bold text-2xl items-center">Participants</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm gap-3 flex items-center">
          <Search className="size-4 text-green-200" />
          <input
            onChange={onSearchInput}
            className=" bg-transparent flex-1 outline-none border-0 p-0 text-sm  "
            placeholder="Search Participants..."
          />
        </div>
        {search}
      </div>
      <Table>
        <thead>
          <TableRow className="bg-white/5">
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10 "
                  />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendee.createAt)}</TableCell>
                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
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
            <TableCell colSpan={3}>
              Monstrando 10 de {attendees.length} itens
            </TableCell>
            <TableCell
              className="py-3 px-4  text-sm font-semibold text-right"
              colSpan={3}
            >
              <div className="inline-flex items-center gap-8">
                <span>
                  Page {page} de {totalPages}
                </span>

                <div className="flex gap-1.5">
                  <IconButton
                    transparent
                    onClick={goToFirstPage}
                    disabled={page === 1}
                  >
                    <ChevronsLeft className="size-4 " />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4 " />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4 " />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
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
