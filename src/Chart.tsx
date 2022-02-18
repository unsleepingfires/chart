import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

const Chart = () => {
  return (
    <div>
      <LineChart
        width={1000}
        height={400}
        data={[{ lead: 2 }, { lead: 4 }, { lead: 5 }]}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="lead" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </div>
  );
};

export default Chart;
