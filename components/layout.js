/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import classNames from "classnames";
import Image from "next/image";
import { sidebarActions, themeActions } from "../redux/reducers";
import store from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

export const createClass = (...classes) => {
  return classes.join(" ");
};

export default function Layout({ children, title }) {
  const { showNav } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const { layout_theme, main_theme, dark } = useSelector(
    (state) => state.theme
  );

  useEffect(() => {
    if (localStorage.getItem("dark-mode") == "true") {
      dispatch(themeActions.setDarkTheme());
    }
    store.subscribe(() => {
      localStorage.setItem("dark-mode", store.getState().theme.dark);
    });
  }, [dispatch]);

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
        <div className="container-fluid mx-1">
          <div className="navbar-brand mt-lg-1 mt-2 fs-6">
            <div className="gap-2 hstack align-items-center">
              <button
                className="btn-empty hstack dropdown-toggle gap-2"
                data-bs-toggle="collapse"
                data-bs-target="#profileCollapse"
                aria-expanded="false"
                aria-controls="profileCollapse"
              >
                <img
                  src="/favicon.ico"
                  className="rounded-circle"
                  width={40}
                  height={40}
                  alt="profile"
                />

                <div
                  className={createClass(
                    "d-none d-lg-flex flex-column align-items-start ",
                    layout_theme
                  )}
                >
                  <span>Norman</span>
                  <small>Director</small>
                </div>
              </button>

              <button
                onClick={() => dispatch(sidebarActions.toggle())}
                className={"end-0 position-absolute d-lg-none btn"}
              >
                <Icon n={"menu"} styles={createClass("fs-3", layout_theme)} />
              </button>
            </div>

            <div
              className={createClass("collapse", layout_theme)}
              id="profileCollapse"
            >
              Buttons and stuff here
            </div>

            <button
              className="mt-4 text-light btn"
              style={{ backgroundColor: "#14a2fa" }}
            >
              New Campaign
              <Icon n="add_circle_outline" styles="ms-3" />
            </button>
          </div>

          <ul className="navbar-nav mt-4 gap-5 fh-100">
            <Link href="/">
              <li id="dash" className="nav-item">
                <Icon styles={"me-3"} n={"dashboard"} />
                Dashboard
                <span className="active-point"></span>
              </li>
            </Link>

            <Link href="/organization">
              <li id="organization" className="nav-item d-flex">
                <Icon styles={"me-3"} n={"corporate_fare"} />
                Organizations
                <span className="active-point"></span>
              </li>
            </Link>

            <Link href="/campaign">
              <li id="campaign" className="nav-item">
                <Icon styles={"me-3"} n={"support"} />
                Campaigns
                <span className="active-point"></span>
              </li>
            </Link>
            <Link href="/settings">
              <li id="settings" className="nav-item">
                <Icon styles={"me-3"} n={"settings"} />
                Settings
                <span className="active-point"></span>
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <main className={createClass(mainwindow, layout_theme)}>
        <nav className={createClass("navbar navbar-expand-sm")}>
          <button onClick={() => dispatch(sidebarActions.toggle())} className="btn">
            <Icon n={"menu"} styles={createClass("fs-3", layout_theme)} />
          </button>

          <button
            className={"btn-empty navbar-toggler"}
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
                className={"form-control-plaintext " + (dark && "text-light")}
                placeholder="Search"
              />
            </form>

            <ul className="navbar-nav gap-4 mx-4 mt-2 hstack justify-content-center flex-wrap">
              <li className="nav-item active">
                <button
                  className="btn-empty"
                  onClick={() => dispatch(themeActions.toggleTheme())}
                >
                  <Icon styles="fs-4" n={!dark ? "dark_mode" : "light_mode"} />
                </button>
              </li>

              <li className="nav-item">
                <button className="btn-empty position-relative">
                  <Icon n="notifications" styles="fs-4">
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
                  width={30}
                  height={30}
                  alt="profile"
                />
                <span className="d-none d-xl-block">Norman SkyLight</span>
              </li>
            </ul>
          </div>
        </nav>

        <section className={createClass(main_theme)}>{children}</section>
      </main>
    </>
  );
}
