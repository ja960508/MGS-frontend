import {
  Chart,
  registerables,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

Chart.register(...registerables);
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

function setMainHeight() {
  const expenseManagement = document.querySelector(".expense__management");
  const wrapper = document.querySelector(".wrapper");
  const statusBarHeight = window
    .getComputedStyle(expenseManagement.querySelector(".statusbar"))
    .height.slice(0, -2);
  const headerHeight = window
    .getComputedStyle(expenseManagement.querySelector(".header"))
    .height.slice(0, -2);
  const navHeight = window
    .getComputedStyle(expenseManagement.querySelector(".nav__bar"))
    .height.slice(0, -2);
  const main = expenseManagement.querySelector(".main");

  main.style.height = `${
    Number(window.getComputedStyle(wrapper).height.slice(0, -2)) -
    statusBarHeight -
    headerHeight -
    navHeight
  }px`;
}

function init() {
  const expenseManagement = document.querySelector(".expense__management");
  const home = document.querySelector(".home");
  const btn = document.querySelector(".expense__management .btn__close");
  console.log(home);

  btn.addEventListener("click", () => {
    expenseManagement.style.height = 0;
  });

  setMainHeight();
  setDailyChart();
  setDonutChart();
}

function setDailyChart() {
  const days = new Array(15).fill(0).map((_, i) => {
    return (i + 1) * 2;
  });
  const myData = new Array(15)
    .fill(0)
    .map((_) => parseInt(Math.random() * 100000));

  const data = {
    labels: days,
    datasets: [
      {
        label: "My First dataset",
        type: "line",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "#FF5F00",
        borderDash: [10, 8],
        data: myData,
      },
      {
        label: "My Second dataset",
        type: "bar",
        backgroundColor: "#38C976",
        barThickness: 5,
        borderRadius: 20,
        data: myData,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  };

  new Chart(document.querySelector("#daily__report__line"), config);
}

function setDonutChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        cutout: "75%",
        data: [300, 50, 100],
        backgroundColor: ["#BD5B00", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4,
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };

  new Chart(document.querySelector("#daily__report__donut"), config);
}

init();
