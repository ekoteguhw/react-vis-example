import React from 'react';
import { curveCatmullRom } from 'd3-shape';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis';

const Chart = props => {
  const dataArr = props.data.map(d => {
    return { x: `${d.year}/${d.quarter}`, y: parseFloat(d.count / 1000) };
  });
  return (
    <XYPlot xType="ordinal" width={1000} height={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="Period of time(year and quarter)" />
      <YAxis title="Number of pull requests (thousands)" />
      <LineSeries
        style={{ stroke: 'violet', strokeWidth: 3 }}
        curve={curveCatmullRom.alpha(0.5)}
        data={dataArr}
      />
    </XYPlot>
  );
};

export default Chart;
