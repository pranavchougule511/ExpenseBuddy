
const renderChart = (data, labels) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Last 6 months expenses",
            data: data,
            backgroundColor: [
                "rgba(128, 155, 206, 1)",
                "rgba(149, 184, 209, 1)",
                "rgba(184, 224, 210, 1)",
                "rgba(214, 234, 223, 1)",
                "rgba(234, 196, 213, 1)",
                "rgba(222, 219, 210, 1)",
                
            ],
            borderColor: [
                "rgba(128, 155, 206, 1)",
                "rgba(149, 184, 209, 1)",
                "rgba(184, 224, 210, 1)",
                "rgba(214, 234, 223, 1)",
                "rgba(234, 196, 213, 1)",
                "rgba(222, 219, 210, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {responsive: false,
        title: {
          display: true,
          text: "Expenses per category",
        },
      },
    });
  };
  
  const getChartData = () => {
    fetch("/expense_category_summary")
      .then((res) => res.json())
      .then((results) => {
        console.log("results", results);
        const category_data = results.expense_category_data;
        const [labels, data] = [
          Object.keys(category_data),
          Object.values(category_data),
        ];
  
        renderChart(data, labels);
      });
  };
  
  document.onload = getChartData();