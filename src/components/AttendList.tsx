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
import { ChangeEvent, useEffect, useState } from "react";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface Attendee {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}

export function AttendList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }

    return "";
  });

  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"));
    }

    return 1;
  });

  const [total, setTotal] = useState(0);
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  const totalPages = Math.ceil(total / 10);

  const url = new URL(
    "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"
  );

  url.searchParams.set("pageIndex", String(page - 1));

  if (search.length > 0) {
    url.searchParams.set("query", search);
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAttendees(data.attendees);
        setTotal(data.total);
      });
  }, [page, search]);

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString());

    url.searchParams.set("search", search);

    window.history.pushState({}, "", url);

    setSearch(search);
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString());

    url.searchParams.set("page", String(page));

    window.history.pushState({}, "", url);

    setPage(page);
  }

  function onSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value);
    setCurrentPage(1);
  }

  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToLastPage() {
    setCurrentPage(totalPages);
  }

  function goToNextPage() {
    setCurrentPage(page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <h1 className="font-bold text-2xl items-center">Participants</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm gap-3 flex items-center">
          <Search className="size-4 text-green-200" />
          <input
            onChange={onSearchInput}
            value={search}
            className=" bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0
          "
            placeholder="Search Participants..."
          />
        </div>
      </div>
      <Table>
        <thead>
          <TableRow transparent>
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
          {attendees.map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-black/20 bg-black-500 p-2 text-orange-700  focus:ring-0"
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
                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                <TableCell>
                  {attendee.checkedInAt === null ? (
                    <span className="text-zinc-400">Não fez check-in</span>
                  ) : (
                    dayjs().to(attendee.checkedInAt)
                  )}
                </TableCell>
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
          <TableRow transparent>
            <TableCell colSpan={3}>
              Monstrando {attendees.length} de {total} itens
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
