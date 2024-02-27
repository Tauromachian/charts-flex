export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "#b6baca" // Change the font color of the numbers
      },
      grid: {
        drawTicks: false
      },
      border: {
        dash: [5, 10]
      }
    },
    x: {
      ticks: {
        color: "#b6baca"
      },
      grid: {
        display: false,
        drawOnChartArea: false
      },
      border: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: "#240115"
    }
  },
  interaction: {
    intersect: false,
    mode: "index"
  }
};

export const colorSelection = ["#703D57"];
