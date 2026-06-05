import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const cities = [
  { rank: 1, city: "Indore", aqi: 92, category: "Satisfactory" },
  { rank: 2, city: "Pune", aqi: 81, category: "Satisfactory" },
  { rank: 3, city: "Lucknow", aqi: 178, category: "Moderate" },
  { rank: 4, city: "Delhi", aqi: 289, category: "Poor" },
];

function App() {
  const chartData = {
    labels: ["Day 1", "Day 5", "Day 10", "Day 15", "Day 20", "Day 25", "Day 30"],
    datasets: [
      {
        label: "Lucknow AQI",
        data: [210, 190, 175, 160, 180, 170, 178],
      },
    ],
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Neural City – Air Quality Insights</h1>

      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <div style={{ padding: "20px", border: "1px solid #ddd" }}>
          <h3>Cleanest City</h3>
          <p>Indore</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ddd" }}>
          <h3>Average AQI</h3>
          <p>117</p>
        </div>

        <div style={{ padding: "20px", border: "1px solid #ddd" }}>
          <h3>Most Polluted</h3>
          <p>Delhi</p>
        </div>
      </div>

      <h2>City Rankings</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Rank</th>
            <th>City</th>
            <th>AQI</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((c) => (
            <tr key={c.city}>
              <td>{c.rank}</td>
              <td>{c.city}</td>
              <td>{c.aqi}</td>
              <td>{c.category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: "40px" }}>AQI Trend</h2>

      <Line data={chartData} />
    </div>
  );
}

export default App;