// // import Chart from "react-apexcharts";
// import axios from "axios";
// import { useState, useEffect } from "react";
// // import OrderList from "./OrderList";
// // import Loader from "../../components/Loader";
// // import ContentWrapper from "../../components/ContentWrapper";

// const AdminDashboard = () => {
//   const [sales, setSales] = useState(null);
//   const [customers, setCustomers] = useState([]);
//   const [orders, setOrders] = useState(null);
//   const [salesDetail, setSalesDetail] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchDashboardData = async () => {
//     try {
//       const [salesRes, usersRes, ordersRes, salesDetailRes] = await Promise.all([
//         axios.get("/api/orders/total-sales"),
//         axios.get("/api/users"),
//         axios.get("/api/orders/total-orders"),
//         axios.get("/api/orders/sales-by-date"),
//       ]);

//       setSales(salesRes.data);
//       setCustomers(usersRes.data);
//       setOrders(ordersRes.data);
//       setSalesDetail(salesDetailRes.data);
//     } catch (error) {
//       console.error("Error fetching dashboard data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const formattedSalesDate = salesDetail.map((item) => ({
//     x: item._id,
//     y: item.totalSales,
//   }));

//   const chartState = {
//     options: {
//       chart: { type: "line" },
//       tooltip: { theme: "dark" },
//       colors: ["#00E396"],
//       dataLabels: { enabled: true },
//       stroke: { curve: "smooth" },
//       title: { text: "Sales Trend", align: "left" },
//       grid: { borderColor: "#ccc" },
//       markers: { size: 1 },
//       xaxis: {
//         categories: formattedSalesDate.map((item) => item.x),
//         title: { text: "Date" },
//       },
//       yaxis: {
//         title: { text: "Sales" },
//         min: 0,
//       },
//       legend: {
//         position: "top",
//         horizontalAlign: "right",
//         floating: true,
//         offsetY: -25,
//         offsetX: -5,
//       },
//     },
//     series: [{ name: "Sales", data: formattedSalesDate.map((item) => item.y) }],
//   };

//   return (
//     <div className="bg-[#0E1629] min-h-[100vh]">
//       <ContentWrapper>
//         <section className="flex flex-col">
//           <div className="w-[80%] flex justify-around flex-wrap">
//             <DashboardCard
//               title="Total Sales"
//               value={loading ? <Loader /> : `$ ${sales?.totalSales.toFixed(2)}`}
//             />
//             <DashboardCard
//               title="Customers"
//               value={loading ? <Loader /> : customers?.length}
//             />
//             <DashboardCard
//               title="All Orders"
//               value={loading ? <Loader /> : orders?.totalOrders}
//             />
//           </div>

//           <div className="mt-[4rem] text-[#fff]">
//             <Chart
//               options={chartState.options}
//               series={chartState.series}
//               type="bar"
//               width="100%"
//             />
//           </div>

//           <div className="mt-[4rem]">
//             <OrderList />
//           </div>
//         </section>
//       </ContentWrapper>
//     </div>
//   );
// };

// const DashboardCard = ({ title, value }) => (
//   <div className="rounded-lg bg-[#080d17] p-5 w-[20rem] mt-5">
//     <div className="font-bold rounded-full w-[3rem] bg-[#BD7EF4] text-center p-3 text-black">
//       $
//     </div>
//     <p className="mt-5">{title}</p>
//     <h1 className="text-xl font-bold">{value}</h1>
//   </div>
// );

// export default AdminDashboard;