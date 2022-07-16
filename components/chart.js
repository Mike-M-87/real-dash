import { ResponsiveBump } from "@nivo/bump";
import { ResponsivePie } from "@nivo/pie";
import { useSelector } from "react-redux";

export function LineChart({ data }) {
  const { dark } = useSelector((state) => state.theme);
  const colors = dark ? "#fff" : "#000";

  return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: "paired" }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: colors,
              fontSize: "12px",
            },
          },
          legend: {
            text: {
              fill: colors,
              fontSize: "15px",
            },
          },
        },
        grid: {
          line: {
            stroke: colors,
          },
        },
        labels: {
          text: {
            fill: colors,
          },
        },
        legends: {
          text: {
            fill: colors,
            fontSize: "12px",
          },
        },
        tooltip: {
          basic: {
            color: "rgb(20, 162, 250)",
          },
        },
        markers: {
          line: {
            stroke: "rgb(20, 162, 250)",
            strokeWidth: "1px",
          },
        },
      }}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -36,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "ranking",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
    />
  );
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export function PieChart({ data /* see data tab */ }) {
  const { dark } = useSelector((state) => state.theme);
  const colors = dark ? "#fff" : "#000";

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      theme={{
        tooltip: {
          basic: {
            color: "rgb(20, 162, 250)",
          },
        },
        legends: {
          text: {
            fill: colors,
            fontSize: "15px",
          },
        },
        labels: {
          text: {
            fill: colors,
            fontSize: "15px",
          },
        },
      }}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: colors,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 20,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors,
              },
            },
          ],
        },
      ]}
    />
  );
}
