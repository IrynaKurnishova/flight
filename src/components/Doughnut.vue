<template>
  <Doughnut :data="chartData" :options="chartOptions"></Doughnut>
</template>

<script setup>
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from "vue-chartjs"

ChartJS.register(ArcElement, Tooltip, Legend)

const chartData = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

const chartOptions = {
  responsive: true
}
</script>
