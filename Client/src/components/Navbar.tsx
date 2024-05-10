import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const router = useLocation();
  const routes = [
    { to: "/", text: "home" },
    { to: "/spending", text: "spending" },
  ];
  return (
    <nav className=" w-full absolute bottom-0 border-t-[#A91D3A] border-t-[0.5px]">
      <div className="flex items-center justify-between p-2">
        {routes.map((r, i) => (
          <NavLink
            className={({ isActive, isPending }) =>
              `capitalize ${isActive ? "font-bold" : ""}`
            }
            to={r.to}
            key={i}
          >
            {r.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
