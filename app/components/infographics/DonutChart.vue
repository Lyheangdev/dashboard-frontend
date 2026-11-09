<script setup lang="ts">
import type { Options } from 'highcharts';

const chartOptions: Options = {
  chart: {
    type: 'pie',
    className: 'bg-blue-50/40! rounded-xl!',
    backgroundColor: 'transparent',
  },

  title: {
    text: 'Realtime Yield Analytics',
    align: 'right',
    verticalAlign: 'top',
    x: -15,
    y: 25,
    style: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#64748b',
    },
  },

  tooltip: {
    valueSuffix: '%',
  },

  series: [
    {
      name: 'Yield',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'transparent',
      innerSize: '70%',

      dataLabels: [
        {
          format: '{point.name}',
        },
        {
          format: '{point.percentage:.0f}%',
          distance: '-15%', // Placing the label inside
          backgroundColor: 'contrast',
          style: {
            textOutline: 'none',
            border: 'none',
          },
        },
      ],
      data: [
        ['SMT Yield', 34],
        ['IMT Yield', 27],
        ['Hydroclean Yield', 22],
        ['Coating Yield', 8],
        ['Routing Yield', 6],
        ['Tester Yield', 3],
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
