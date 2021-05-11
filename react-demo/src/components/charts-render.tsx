import React, { FC, useRef, useEffect } from 'react';
import * as echarts from 'echarts';

export interface IChartDataItem {
  x: number;
  y: number;
  color?: string;
}

interface IProps {
  data?: IChartDataItem[];
}

const ChartsRender: FC<IProps> = ({ data }) => {
  const dom_container = useRef<HTMLDivElement>(null);
  const ref_chart = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (dom_container.current) {
      ref_chart.current = echarts.init(dom_container.current, undefined, { renderer: 'svg' });
      ref_chart.current?.setOption({
        title: {
          text: 'test chart',
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
    let listener = () => {
      if (ref_chart.current) {
        ref_chart.current.resize();
      }
    };
    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
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
          name: 'value',
          type: 'bar',
          data: data.map((item) => ({
            value: item.y,
            itemStyle: {
              color: item.color,
            },
          })),
        },
      ],
    });
  }, [data]);

  return (
    <div
      className="charts-container"
      ref={dom_container}
      style={{ width: '50%', height: 400 }}
    ></div>
  );
};

export default React.memo(ChartsRender);
