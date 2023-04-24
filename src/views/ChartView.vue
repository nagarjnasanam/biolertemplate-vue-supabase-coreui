<template>
    <div>
        <p>Charts</p>
        <CChartLine
  :wrapper="false"
  :data="{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 40, 39]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 12]
      }
    ]
  }"
/>
        <CChartBar
    style="height:300px"
    :datasets="[
      {
        data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
        backgroundColor: '#E55353',
        label: 'Sales',
      }
    ]"
    labels="months"
    :options="{ maintainAspectRatio: false }"
  />
    </div>
</template>
<script>
import {
  CChart,
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from '@coreui/vue-chartjs'
export default {
    component:{
        CChart,
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
    },
    setup() {
        
    },
}
</script>