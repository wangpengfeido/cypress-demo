import React, { FC } from 'react';
import ChartsRender from '../../components/charts-render';
import { chartData } from './chart-data';

const ChartsBase: FC = () => {
  return <ChartsRender data={chartData}></ChartsRender>;
};

export default React.memo(ChartsBase);
