import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const router = useLocation();
  const routes = [
    { to: "/", text: "home" },
    { to: "/test", text: "test" },
  ];
  return (
    <nav className=" w-full absolute bottom-0 border-t-[#A91D3A] border-t-[0.5px]">
      <div className="flex items-center justify-between p-2">
        {routes.map((r, i) => (
          <Link
            className={`capitalize ${
              r.to === router.pathname ? "font-bold" : ""
            }`}
            to={r.to}
            key={i}
          >
            {r.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
