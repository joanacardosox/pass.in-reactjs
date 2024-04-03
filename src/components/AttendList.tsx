import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

export function AttendList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <h1 className="font-bold text-2xl items-center">Participants</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm gap-3 flex items-center">
          <Search className="size-4 text-green-200" />
          <input
            className="bg-transparent flex-1 outline-none border-0 "
            placeholder="Search Participants..."
          />
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 48 }}
                className="py-3 px-4 text-sm  font-semibold text-left "
              >
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4  text-sm font-semibold text-left">
                Code
              </th>
              <th className="py-3 px-4  text-sm font-semibold text-left">
                Participants
              </th>
              <th className="py-3 px-4  text-sm font-semibold text-left">
                Registration date
              </th>
              <th className="py-3 px-4  text-sm font-semibold text-left">
                Registration check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4  text-sm font-semibold text-left"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5 checked:"
                >
                  <td className="py-3 px-4 text-sm text-zinc-400">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">1233455</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Joana Cardoso
                      </span>
                      <span>joanamariacardoso@gmail.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    7 day atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    9 dia atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <button className="bg-black/10 border border-white/20 rounded-md p-1.5">
                      <MoreHorizontal className="size-4 " />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                className="py-3 px-4  text-sm font-semibold text-left"
                colSpan={3}
              >
                Monstrando 10 de 128 items
              </td>
              <td
                className="py-3 px-4  text-sm font-semibold text-right"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Page 1 de 20</span>

                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4 " />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4 " />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4 " />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4 " />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
