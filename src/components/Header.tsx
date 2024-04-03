import nlwUniteIcon from "/src/assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-8">
      <img src={nlwUniteIcon} />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-400">
          Events
        </a>
        <a href="" className="font-medium text-sm">
          Participants
        </a>
      </nav>
    </div>
  );
}
