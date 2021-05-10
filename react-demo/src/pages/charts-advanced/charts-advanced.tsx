import React, { FC, useEffect, useState, useCallback } from "react";
import ChartsRender from "../../components/charts-render";
import { getChartsData } from "./chart-data";

const ChartsAdvanced: FC = () => {
  const [startTime] = useState(Math.floor(Date.now() / 1000));
  const [currentTime, setCurrentTime] = useState(Math.floor(Date.now() / 1000));
  const [chartData, setChartData] = useState<{ x: number; y: number }[]>();

  const loadChartData = useCallback(async (from: number, end: number) => {
    let data = await getChartsData(from, end);
    setChartData(data);
  }, []);

  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentTime(Math.ceil(Date.now() / 1000));
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    loadChartData(startTime, currentTime);
  }, [startTime, currentTime]);

  return (
    <div>
      <div>start time: {startTime}</div>
      <div>current time: {currentTime}</div>
      <ChartsRender data={chartData}></ChartsRender>
    </div>
  );
};

export default React.memo(ChartsAdvanced);
