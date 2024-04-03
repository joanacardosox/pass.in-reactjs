import { NavLink } from "./NavLink";
import nlwUniteIcon from "/src/assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-8">
      <img src={nlwUniteIcon} />

      <nav className="flex items-center gap-5">
        <NavLink href="/events">Events</NavLink>
        <NavLink href="Participants">Participants</NavLink>
      </nav>
    </div>
  );
}
