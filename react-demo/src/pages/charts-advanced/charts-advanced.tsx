import React, { FC, useEffect, useState, useCallback } from 'react';
import ChartsRender from '../../components/charts-render';
import { getChartsData } from './chart-data';

const ChartsAdvanced: FC = () => {
  const [startTime, setStartTime] = useState(Date.now() - 1000 * 60 * 60 * 24 * 7);
  const [endTime, setCurrentTime] = useState(Date.now());
  const [chartData, setChartData] = useState<{ x: number; y: number }[]>();

  const loadChartData = useCallback(async (from: number, end: number) => {
    let data = await getChartsData(from, end);
    setChartData(data);
  }, []);

  useEffect(() => {
    loadChartData(startTime, endTime);
  }, [loadChartData, startTime, endTime]);

  return (
    <div>
      <div>start time: {startTime}</div>
      <div>end time: {endTime}</div>
      <ChartsRender data={chartData}></ChartsRender>
    </div>
  );
};

export default React.memo(ChartsAdvanced);
