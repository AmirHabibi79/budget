import { NavLink } from "react-router-dom";

export default function Navbar() {
  const routes = [
    { to: "/", text: "home" },
    { to: "/spending", text: "spending" },
  ];
  return (
    <nav className=" z-10 bg-[#eeeeee] h-[40px] w-full absolute bottom-0 border-t-[#A91D3A] border-t-[0.5px]">
      <div className="flex items-center justify-between p-2">
        {routes.map((r, i) => (
          <NavLink
            className={({ isActive }) =>
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
