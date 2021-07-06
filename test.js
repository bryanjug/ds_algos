//HTML
<p>
  Minimum Sales: <span id="minimumSales"></span>
</p>
<input type="range" min="0" max="150" value="0" id="slider">

<canvas width="600" height="400"></canvas>

<table></table>

//JAVASCRIPT
/*
 * Chart Setup
 */
const salesChart = new Chart(
  document.querySelector("canvas"), 
  {
    type: "bar",
    data: {
      labels: [ "Jan", "Feb", "Mar" ],
      datasets: []
    },
    options: {
      responsive: false,
      title: { text: "Sales", display: true }
    }
  }
);
  
/*
   * Helper for formating sales data
   */
let colors = {};
function formatSalesData(data) {
  return data.map(d => {
    if (!colors[d.name]) {
      colors[d.name] = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.8)`;
    }

    return {
      label: d.name,
      data: d.sales,
      backgroundColor: colors[d.name]
    };
  });
}
  
/*
   * Helper for updating chart data
   */
const updateChart = (data) => {
  salesChart.data.datasets = formatSalesData(data);
  salesChart.update();
};
  
/*
   * Helper for updating table
   */
const table = document.querySelector("table");
const updateTable = (data) => {
  const html = `
      <thead style="text-align: left">
        <th>Name</th>
        <th>Bonus</th>
      </thead>
      <tbody>
        ${data.map(({ name, total }) => `
          <tr>
            <td>${name}</td>
            <td>${total}</td>
          </tr>
        `).join("\n")}
      </tbody>
    `;
  table.innerHTML = html;
};
  
/*
   * The Sales data
   */
const salesData = [{
  name: "Abdul Karim Khandker",
  sales: [ 50, 100, 75 ]
}, {
  name: "Adam Cortez",
  sales: [ 75, 36, 60 ]
}, {
  name: "Alycia Lin",
  sales: [ 110, 105, 130 ]
}];
  
// initialize chart
updateChart(salesData);

// initialize table
updateTable([{
  name: "Abdul Karim Khandker",
  total: 150
}, {
  name: "Adam Cortez",
  total: 150
}, {
  name: "Alycia Lin",
  total: 150
}]);

/*
   * Exercise 1 - Update <span> when Minimum Sales value is selected.
   * Exercise 2 - Remove columns from chart that are below the Minimum Sales value.
   * Exercise 3 - Calculate bonus for each salesperson and display it in the <table>. Each salesperson receives a $50 bonus for each month their sales are at or above the Minimum Sales value.
*/
document.getElementById('slider').addEventListener('change', function(e) {
      let newData = [];
      let tableData = [];
      var sliderValue = event.currentTarget.value;
      document.querySelector("#minimumSales").innerHTML = sliderValue;
    
      for (i = 0; i < salesData.length; i++) {
        let name = salesData[i].name;
        let sales = [];
        let bonus = 0;
        for (j = 0; j < salesData[i].sales.length; j++) {
          if (sliderValue < salesData[i].sales[j]) {
             sales.push(salesData[i].sales[j])
          } else {
             sales.push(0)
          }
          if (sliderValue <= salesData[i].sales[j]) {
             bonus += 50;
          }
          if (j === salesData[i].sales.length - 1) {
             tableData.push({
               name: name,
               total: bonus
             });
             newData.push({
                name: name,
                sales: sales
             });
          }
        }
      }
      updateTable(tableData);
      updateChart(newData);
 });