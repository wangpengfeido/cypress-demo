import React, { FC, useRef, useEffect } from "react";
import * as echarts from "echarts";

interface IProps {
  data?: { x: number; y: number }[];
}

const ChartsRender: FC<IProps> = ({ data }) => {
  const dom_container = useRef<HTMLDivElement>(null);
  const ref_chart = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (dom_container.current) {
      ref_chart.current = echarts.init(dom_container.current);
      ref_chart.current?.setOption({
        title: {
          text: "test chart",
        },
        tooltip: {},
        xAxis: {
          data: [],
        },
        yAxis: {},
        series: [],
      });
    }
  }, []);

  useEffect(() => {
    if (!data) {
      return;
    }
    ref_chart.current?.setOption({
      xAxis: {
        data: data.map((item) => item.x),
      },
      series: [
        {
          name: "value",
          type: "bar",
          data: data.map((item) => item.y),
        },
      ],
    });
  }, [data]);

  return (
    <div
      className="charts"
      ref={dom_container}
      style={{ width: 800, height: 400 }}
    ></div>
  );
};

export default React.memo(ChartsRender);
