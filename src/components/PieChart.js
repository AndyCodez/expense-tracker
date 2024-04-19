import { Pie } from "react-chartjs-2"
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto"

Chart.register(CategoryScale);

function PieChart({ data }) {
    const options = {};
    return <Pie options={options} data={data} />
}

export default PieChart
