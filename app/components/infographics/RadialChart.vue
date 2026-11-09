<script setup lang="ts">
import type { Options } from 'highcharts';

const chartOptions: Options = {
  colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
  chart: {
    className: 'bg-blue-50/30! rounded-xl!',
    backgroundColor: 'transparent',
    type: 'column',
    inverted: true,
    polar: true,
  },

  title: {
    text: 'Overall Yield Report',
    className: 'text-lg!',
    align: 'right',
    x: -15,
    y: 25,
    style: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#64748b',
    },
  },
  subtitle: {
    text: 'Demonstrate all area of SVI (AEC)',
    align: 'right',
    x: -15,
    y: 45,
  },
  tooltip: {
    outside: true,
  },

  pane: {
    size: '85%',
    innerSize: '20%',
    endAngle: 270,
  },
  xAxis: {
    tickInterval: 1,
    labels: {
      align: 'right',
      allowOverlap: true,
      step: 1,
      x: -8,
      y: 3,
      style: {
        fontSize: '12px',
      },
    },
    lineWidth: 0,
    gridLineWidth: 0,
    categories: ['SMT Result', 'IMT Result', 'Routing Result', 'Coating Result', 'Tester Result'],
  },

  yAxis: {
    lineWidth: 0,
    gridLineWidth: 0,
    tickInterval: 25,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true,
  },

  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0.15,
      borderRadius: {
        radius: '50%',
        where: 'all',
      },
    },
  },

  series: [
    {
      type: 'column',
      name: 'Area SMT',
      color: 'blue',
      data: [
        ['Line 1', 99],
        ['Line 2', 96],
        ['Line 3', 98],
        ['Line 4', 99],
        ['Line 5', 96],
      ],
    },
    {
      type: 'column',
      name: 'Area IMT',
      color: 'green',
      data: [
        ['Line 1', 99],
        ['Line 2', 96],
        ['Line 3', 98],
        ['Line 4', 99],
        ['Line 5', 96],
      ],
    },
    {
      type: 'column',
      name: 'Area Routing',
      color: 'orange',
      data: [
        ['Line 1', 99],
        ['Line 2', 96],
        ['Line 3', 98],
        ['Line 4', 99],
        ['Line 5', 96],
      ],
    },
    {
      type: 'column',
      name: 'Area Coating',
      color: 'purple',
      data: [
        ['Line 1', 99],
        ['Line 2', 96],
        ['Line 3', 98],
        ['Line 4', 99],
        ['Line 5', 96],
      ],
    },
    {
      type: 'column',
      name: 'Area Tester',
      color: 'gray',
      data: [
        ['Line 1', 99],
        ['Line 2', 96],
        ['Line 3', 98],
        ['Line 4', 99],
        ['Line 5', 96],
      ],
    },
  ],

  credits: {
    enabled: false,
  },
};
</script>

<template>
  <ClientOnly>
    <HighChartComponent :options="chartOptions" />
  </ClientOnly>
</template>
