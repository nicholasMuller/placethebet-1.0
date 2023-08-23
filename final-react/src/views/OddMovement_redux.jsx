// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Chart from "chart.js/auto";
// import { Line } from "react-chartjs-2";


// export function SpreadOverTimeGraph(){

//     const navigate = useNavigate();

//     const goBack = () => {
//         navigate(-1);
//       };
    

//     const location = useLocation();
//     const homePointSpreadData = location.state?.homePointSpreadValues || [];
//     const awayPointSpreadData = location.state?.awayPointSpreadValues || [];

//     console.log(homePointSpreadData)
//     console.log(awayPointSpreadData)

//     const labels = ["January", "February", "March", "April", "May", "June"];

//     const data = {
//     labels: labels,
//     datasets: [
//         {
//         label: "My First dataset",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         data: [0, 10, 5, 2, 20, 30, 45],
//         },
//     ],
//     };

//     return (
//         <div>
//             <div>
//             <Line data={data} />
//             </div>

//             <div className="mt-4 text-center">
//                 <button
//                 type="button"
//                 className="text-light btn btn-secondary"
//                 onClick={goBack}>
//                 Season stats
//                 </button>
//             </div>

//         </div>

//     );

// }