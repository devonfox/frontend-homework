import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// found interface info in terms of ts, but used js style
// https://www.chartjs.org/docs/latest/api/interfaces/ChartComponent.html

// custom component that renders the chart
const ChartComponent = ({ chartType, data, options }) => {
  // useRef is cool!
  const chartContainer = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    chartInstance.current = new Chart(chartContainer.current, {
      type: chartType,
      data: data,
      options: options,
    });

    // Destroy the chart when the component unmounts
    return () => {
      chartInstance.current.destroy();
    };
  }, [chartType, data, options]);

  // added basic boostrap class
  return <canvas className="p-3" ref={chartContainer} />;
};

export default ChartComponent;
