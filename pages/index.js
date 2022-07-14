import Image from "next/image";
import { useSelector } from "react-redux";
import { LineChart, PieChart } from "../components/chart";
import { Icon } from "../components/Icon";
import Layout, { createClass } from "../components/layout";

export default function Dash() {
  const { layout_theme } = useSelector((state) => state.theme);

  return (
    <Layout title="dash">
      <section className="vstack p-3 align-items-center fh-100">
        <div className="hstack gap-5 flex-wrap justify-content-center">
          <div className={createClass("dash-card rounded-4", layout_theme)}>
            <div className="card-body">
              <div className="card-title gap-5 hstack justify-content-between">
                <Image
                  src="/favicon.ico"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="profile"
                />
                <Icon n="show_chart" styles="fs-1 text-green" />
              </div>
              <div className="mt-4 hstack gap-1">
                <h4>{"$45,7630"}</h4>
                <div className="mb-1">
                  <Icon n="arrow_upward" styles="fw-bold text-green" />
                  <small>12%</small>
                </div>
              </div>
              <small className="text-secondary">Total Donation</small>
            </div>
          </div>

          <div className={createClass("dash-card rounded-4", layout_theme)}>
            <div className="card-body">
              <div className="card-title gap-5 hstack justify-content-between">
                <Image
                  src="/favicon.ico"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="profile"
                />
                <Icon n="trending_down" styles="fs-1 text-danger" />
              </div>
              <div className="mt-4 hstack gap-1">
                <h4>{"$45,7630"}</h4>
                <div className="mb-1">
                  <Icon n="arrow_downward" styles="fw-bold text-danger" />
                  <small>12%</small>
                </div>
              </div>
              <small className="text-secondary">Todays Donation</small>
            </div>
          </div>

          <div className={createClass("dash-card rounded-4", layout_theme)}>
            <div className="card-body">
              <div className="card-title gap-5 hstack justify-content-between">
                <Image
                  src="/favicon.ico"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="profile"
                />
                <Icon n="show_chart" styles="fs-1 text-green" />
              </div>
              <div className="mt-4 hstack gap-1">
                <h4>{"$45,7630"}</h4>
                <div className="mb-1">
                  <Icon n="arrow_upward" styles="fw-bold text-green" />
                  <small>12%</small>
                </div>
              </div>
              <small className="text-secondary">Total Donation</small>
            </div>
          </div>

          <div className={createClass("dash-card rounded-4", layout_theme)}>
            <div className="card-body">
              <div className="card-title gap-5 hstack justify-content-between">
                <Image
                  src="/favicon.ico"
                  className="rounded-circle"
                  width={50}
                  height={50}
                  alt="profile"
                />
                <Icon n="show_chart" styles="fs-1 text-green" />
              </div>
              <div className="mt-4 hstack gap-1">
                <h4>{"$45,7630"}</h4>
                <div className="mb-1">
                  <Icon n="arrow_upward" styles="fw-bold text-green" />
                  <small>12%</small>
                </div>
              </div>
              <small className="text-secondary">Total Donation</small>
            </div>
          </div>
        </div>

        <div className="hstack justify-content-center mt-5 gap-5">
          <div
            className={createClass("dash-graph p-4 rounded-4", layout_theme)}
          >
            <div className="vstack">
              <div className="hstack gap-3">
                <span className="bg-danger bg-gradient mb-2 p-2 rounded-circle"></span>
                <h4>Donation Value</h4>
                <select
                  id="interval"
                  className={createClass(
                    " p-2 rounded-3  border-secondary",
                    layout_theme
                  )}
                  style={{ backgroundColor: "unset", color: "unset" }}
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                  <option value="all-time">All Time</option>
                </select>
              </div>

              <div id="chartbox">
                <LineChart id data={sampledata} />
              </div>
            </div>
          </div>

          <div
            className={createClass("dash-graph p-4 rounded-4", layout_theme)}
          >
            <div className="vstack">
              <div className="hstack gap-3">
                <span className="bg-danger bg-gradient mb-2 p-2 rounded-circle"></span>
                <h4>Donation Value</h4>
                <select
                  id="interval"
                  className={createClass(
                    " p-2 rounded-3  border-secondary",
                    layout_theme
                  )}
                  style={{ backgroundColor: "unset", color: "unset" }}
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                  <option value="all-time">All Time</option>
                </select>
              </div>

              <div id="chartbox">
                <PieChart id data={sampledata2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

var sampledata = [
  {
    id: "Serie 1",
    data: [
      {
        x: 2000,
        y: 9,
      },
      {
        x: 2001,
        y: 1,
      },
      {
        x: 2002,
        y: 3,
      },
      {
        x: 2003,
        y: 4,
      },
      {
        x: 2004,
        y: 2,
      },
    ],
  },
];

var sampledata2 = [
  {
    id: "scala",
    label: "scala",
    value: 514,
    color: "hsl(78, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 539,
    color: "hsl(267, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 566,
    color: "hsl(116, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 536,
    color: "hsl(244, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 295,
    color: "hsl(71, 70%, 50%)",
  },
];
