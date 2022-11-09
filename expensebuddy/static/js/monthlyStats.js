const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Expenses',
            data: [12, 19, 3, 5, 2, 3],
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
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        title: {
            display: true,
            text: "Monthly Expenses",},
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});