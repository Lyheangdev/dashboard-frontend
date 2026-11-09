<script setup lang="ts">
import type { Options } from 'highcharts';

const chartOptions: Options = {
  dataTable: {
    columns: {
      Line: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5', 'Line 6'],
      SMT: [99, 98, 99, 97, 91, 80],
      IMT: [99, 98, 99, 97, 91, 80],
      Routing: [99, 98, 99, 97, 91, 80],
      Coating: [99, 98, 99, 97, 91, 80],
      Tester: [99, 98, 99, 97, 91, 80],
    },
  },
  chart: {
    type: 'column',
    className: 'bg-blue-50/40! rounded-xl!',
    backgroundColor: 'transparent',
    spacingTop: 30,
    marginTop: 20,
  },
  title: {
    text: '',
  },
  xAxis: {
    type: 'category',
    lineWidth: 1,
    gridLineWidth: 0,
    lineColor: '#e5e7eb',
    labels: {
      style: {
        color: '#999',
        fontWeight: '500',
        fontSize: '12px',
      },
    },
  },
  yAxis: {
    min: 0,
    lineWidth: 0,
    gridLineColor: '#f3f4f6',
    labels: {
      enabled: false,
    },
    title: {
      text: 'All area yield result',
    },
  },
  tooltip: {
    headerFormat: '<table>',
    pointFormat: `<tr>
            <td style="color:{series.color}">{series.name}</td>
            <td> <b>{point.y}</b></td>
            <td> ({point.percentage:.0f}%)</td>
        </tr>`,
    footerFormat: '</table>',
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      borderWidth: 0,
      borderRadius: 8,
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        format: '{point.y}%',
        style: {
          color: '#ffffff',
          textOutline: 'none',
          fontWeight: '600',
        },
      },
      dataMapping: {
        name: 'Line',
      },
    },
  },
  legend: {
    align: 'center',
    itemStyle: {
      color: '#334155',
      fontSize: '13px',
      fontWeight: '500',
    },
    itemHoverStyle: {
      color: '#000000',
    },
    itemHiddenStyle: {
      color: '##10169f',
    },
  },
  series: [
    {
      color: '#b3c8ff',
      dataMapping: {
        y: 'SMT',
      },
    },
    {
      color: '#85a3ff',
      dataMapping: {
        y: 'IMT',
      },
    },
    {
      color: '#5672ff',
      dataMapping: {
        y: 'Routing',
      },
    },
    {
      color: '#2f43ff',
      dataMapping: {
        y: 'Coating',
      },
    },
    {
      color: '#0c11ff',
      dataMapping: {
        y: 'Tester',
      },
    },
  ],
  credits: {
    enabled: false,
  },
};
</script>

<template>
  <ClientOnly>
    <HighChartComponent class="text-gray-100" :options="chartOptions" />
  </ClientOnly>
</template>
