import Link from "next/link";
import react, { useEffect, useState } from "react";
import { Icon } from "./Icon";
import classNames from "classnames";
import Image from "next/image";
import { themeActions } from "../redux/reducers";
import { useDispatch, useSelector } from "react-redux";

export const createClass = (...classes) => {
  return classes.join(" ");
};

export function Layout({ children, title }) {
  const [showNav, setNav] = useState(true);
  const dispatch = useDispatch();
  const { layout_theme, main_theme } = useSelector((state) => state.theme);

  var sidebar = classNames({
    sidebarshow: showNav === true,
    sidebarhide: showNav === false,
  });

  var mainwindow = classNames({
    mainfull: showNav === false,
    main: showNav === true,
  });

  useEffect(() => {
    document.getElementById(title)?.classList.add("nav-item-active");
  }, [title]);

  return (
    <>
      <nav
        id="layout-nav"
        className={createClass(sidebar, "navbar position-fixed", layout_theme)}
      >
        <div className="container-fluid">
          <div className="navbar-brand mt-2 vstack gap-4 align-items-center">
            <div className="hstack align-items-center">
              <h3 className={createClass(layout_theme, "mx-auto")}>Title</h3>

              <button
                onClick={(e) => setNav(!showNav)}
                className={createClass(
                  "me-0 d-md-none shownav-btn",
                  layout_theme
                )}
              >
                <Icon n={"close"} styles={createClass(layout_theme, "mb-2")} />
              </button>
            </div>

            <button
              className="btn text-light"
              style={{ backgroundColor: "#14a2fa" }}
            >
              New Campaign
              <Icon n="add_circle_outline" styles="ms-3" />
            </button>
          </div>

          <ul className="navbar-nav gap-5 mt-5 ms-3 fh-100">
            <Link href="/">
              <li id="dash" className="nav-item">
                <Icon styles={"me-4"} n={"dashboard"} />
                Dashboard
                <span className="active-point"></span>
              </li>
            </Link>

            <Link href="/organization">
              <li id="organization" className="nav-item">
                <Icon styles={"me-4"} n={"corporate_fare"} />
                Organizations
                <span className="active-point"></span>
              </li>
            </Link>

            <Link href="/campaign">
              <li id="campaign" className="nav-item">
                <Icon styles={"me-4"} n={"support"} />
                Campaigns
                <span className="active-point"></span>
              </li>
            </Link>
            <Link href="/settings">
              <li id="settings" className="nav-item">
                <Icon styles={"me-4"} n={"settings"} />
                Settings
                <span className="active-point"></span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <main className={createClass(mainwindow, layout_theme)}>
        <nav className={createClass("navbar navbar-expand-sm")}>
          <button
            onClick={() => setNav(!showNav)}
            className="mb-1 navbar-brand shownav-btn"
          >
            <Icon n={"menu"} styles={createClass("fs-3", layout_theme)} />
          </button>

          <button
            className={"btn-empty navbar-toggler d-lg-none border-"}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Icon n="expand_more" styles={createClass(layout_theme, "fs-3")} />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <form className="mx-auto hstack gap-3 flex-grow-1">
              <Icon n={"search"} />
              <input
                type="text"
                className={
                  "form-control-plaintext " +
                  (layout_theme == "darkmode" && "text-light")
                }
                placeholder="Search"
              />
            </form>

            <ul className="navbar-nav gap-4 mx-4 hstack flex-wrap">
              <li className="nav-item active">
                <button
                  className="btn-empty"
                  onClick={() => dispatch(themeActions.toggleTheme())}
                >
                  <Icon
                    n={layout_theme == "lightmode" ? "dark_mode" : "light_mode"}
                  />
                </button>
              </li>

              <li className="nav-item">
                <button className="btn-empty position-relative">
                  <Icon n="notifications">
                    <span className="position-absolute translate-middle badge border border-light rounded-circle bg-danger p-1">
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </Icon>
                </button>
              </li>

              <li className="nav-item hstack gap-3">
                <Image
                  src="/favicon.ico"
                  className="rounded-circle"
                  width={32}
                  height={32}
                  alt="profile"
                />
                <span className="d-none d-lg-block">Norman SkyLight</span>
              </li>
            </ul>
          </div>
        </nav>

        <section className={main_theme}>{children}</section>
      </main>
    </>
  );
}
