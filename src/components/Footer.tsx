import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const location = useLocation();
  const isDetailPage =
    location.pathname === "/studio" || location.pathname === "/creators";

  const handleNavigation = (item: string, path: string) => {
    if (isDetailPage) {
      if (
        (item === "Studio" && location.pathname === "/studio") ||
        (item === "Creators" && location.pathname === "/creators")
      ) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (!["Creators", "Studio"].includes(item)) {
        window.location.href = "/" + path;
      }
    }
  };

  const navigationItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "News", path: "#news" },
    { name: "Works", path: "#works" },
    { name: "Creators", path: "/creators" },
    { name: "Studio", path: "/studio" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <footer className="bg-moss-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1.5fr_1fr] gap-8 mb-12 ml-4">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-2">
              HOMEGROUND LLC.
            </h3>
            <h4 className="text-sm font-san mb-8">合同会社ホームグラウンド</h4>

            <p className="text-greige-light mb-20">音楽を、生きる場所に。</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-greige transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-greige transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-greige transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-greige transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">LINKS</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  {item.path.startsWith("#") ? (
                    <a
                      href={item.path}
                      onClick={() => handleNavigation(item.name, item.path)}
                      className="text-greige-light hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => handleNavigation(item.name, "")}
                      className="text-greige-light hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-medium mb-4">NEWS LETTER</h3>
            <p className="text-greige-light mb-4">
              メールアドレス登録でホームグラウンドのNEWリリース・イベントなど最新情報をGET!!</p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="user@exmaple.com" 
                className="px-4 py-2 bg-moss rounded-l-md focus:outline-none focus:ring-1 focus:ring-greige w-full"
              />
              <button 
                type="submit" 
                className="bg-white text-moss-dark px-4 py-2 rounded-r-md font-medium hover:bg-greige transition-colors duration-300 w-20" 
              >
                登録
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-moss pt-8 text-center text-greige-light">
          <p>
            &copy; {new Date().getFullYear()} Homeground LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
