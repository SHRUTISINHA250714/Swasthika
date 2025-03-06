
// import React, { useState } from 'react';
// import { Select, MenuItem, ToggleButtonGroup, ToggleButton } from '@mui/material';
// // import { useTheme } from '@mui/material/styles';
// import DashboardCard from '@/app/PatientDashboard/components/shared/DashboardCard';
// import dynamic from "next/dynamic";
// import { ApexOptions } from "apexcharts";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const HealthAnalytics = () => {
//     type HealthParameter = 'oxygen' | 'glucose' | 'hemoglobin';
//     const [parameter, setParameter] = useState<HealthParameter>('oxygen');

//     const handleParameterChange = (_event: React.MouseEvent<HTMLElement>, newParameter: HealthParameter | null) => {
// import React from 'react';
// import { Select, MenuItem } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


// const SalesOverview = () => {

//     // select
//     const [month, setMonth] = React.useState('1');

//     const handleChange = (event: any) => {
//         setMonth(event.target.value);
//     };

//     // chart color
//     const theme = useTheme();
//     const primary = theme.palette.primary.main;
//     const secondary = theme.palette.secondary.main;

//     // chart
//     const optionscolumnchart: any = {
//         chart: {
//             type: 'bar',
//             fontFamily: "'Plus Jakarta Sans', sans-serif;",
//             foreColor: '#adb0bb',
//             toolbar: {
//                 show: true,
//             },
//             height: 370,
//         },
//         colors: [primary, secondary],
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 barHeight: '60%',
//                 columnWidth: '42%',
//                 borderRadius: [6],
//                 borderRadiusApplication: 'end',
//                 borderRadiusWhenStacked: 'all',
//             },
//         },

//         stroke: {
//             show: true,
//             width: 5,
//             lineCap: "butt",
//             colors: ["transparent"],
//           },
//         dataLabels: {
//             enabled: false,
//         },
//         legend: {
//             show: false,
//         },
//         grid: {
//             borderColor: 'rgba(0,0,0,0.1)',
//             strokeDashArray: 3,
//             xaxis: {
//                 lines: {
//                     show: false,
//                 },
//             },
//         },
//         yaxis: {
//             tickAmount: 4,
//         },
//         xaxis: {
//             categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
//             axisBorder: {
//                 show: false,
//             },
//         },
//         tooltip: {
//             theme: 'dark',
//             fillSeriesColor: false,
//         },
//     };
//     const seriescolumnchart: any = [
//         {
//             name: 'Eanings this month',
//             data: [355, 390, 300, 350, 390, 180, 355, 390],
//         },
//         {
//             name: 'Expense this month',
//             data: [280, 250, 325, 215, 250, 310, 280, 250],
//         },
//     ];

//     return (

//         <DashboardCard title="Sales Overview" action={
//             <Select
//                 labelId="month-dd"
//                 id="month-dd"
//                 value={month}
//                 size="small"
//                 onChange={handleChange}
//             >
//                 <MenuItem value={1}>March 2023</MenuItem>
//                 <MenuItem value={2}>April 2023</MenuItem>
//                 <MenuItem value={3}>May 2023</MenuItem>
//             </Select>
//         }>
//             <Chart
//                 options={optionscolumnchart}
//                 series={seriescolumnchart}
//                 type="bar"
//                 height={370} width={"100%"}
//             />
//         </DashboardCard>
//     );
// };

// export default SalesOverview;
// import React, { useState } from 'react';
// import { Select, MenuItem, ToggleButtonGroup, ToggleButton } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import DashboardCard from '@/app/PatientDashboard/components/shared/DashboardCard';
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const HealthAnalytics = () => {
//     const [parameter, setParameter] = useState<keyof typeof healthData>('oxygen');
//     const [timeframe, setTimeframe] = useState('weekly');

//     const handleParameterChange = (event:any, newParameter:any) => {
//         if (newParameter !== null) {
//             setParameter(newParameter);
//         }
//     };

//     const colors: Record<HealthParameter, string> = {
//         oxygen: '#e91e63', 
//         glucose: '#4caf50', 
//         hemoglobin: '#673ab7'
//     };

//     const healthData: Record<HealthParameter, number[]> = {
//     const handleTimeframeChange = (event:any) => {
//         setTimeframe(event.target.value);
//     };

//     const theme = useTheme();
//     const colors = {
//         oxygen: '#e91e63', // Pink
//         glucose: '#4caf50', // Green
//         hemoglobin: '#673ab7' // Purple
//     };

//     const healthData = {
//         oxygen: [98, 97, 96, 97, 99, 98, 97],
//         glucose: [110, 120, 115, 130, 125, 118, 122],
//         hemoglobin: [13.5, 14, 13.8, 14.2, 13.7, 14.5, 14]
//     };

//     const options: ApexOptions = {
//         chart: {
//             type: 'bar',
//     const options = {
//         chart: {
//             type: 'bar' as const,
//             toolbar: { show: false },
//             height: 370,
//         },
//         colors: [colors[parameter]],
//         plotOptions: {
//             bar: {
//                 horizontal: false,
//                 columnWidth: '50%',
//                 borderRadius: 6,
//                 borderRadiusApplication: 'end',
//                 borderRadiusWhenStacked: 'all',
//             },
//         },
//         stroke: {
//             show: true,
//             width: 2,
//             colors: [colors[parameter]],
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         legend: {
//             show: false,
//         },
//         grid: {
//             borderColor: 'rgba(0,0,0,0.1)',
//             strokeDashArray: 3,
//         },
//         xaxis: {
//             categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//             axisBorder: { show: false },
//         },
//         tooltip: {
//             theme: 'dark',
//         },
//     };

//     const series = [{
//         name: parameter.charAt(0).toUpperCase() + parameter.slice(1),
//         data: healthData[parameter],
//     }];

//     return (
//         <DashboardCard title="Health Analytics" 
//         >
//         <DashboardCard title="Health Analytics" action={
//             <Select value={timeframe} size="small" onChange={handleTimeframeChange}>
//                 <MenuItem value="weekly">Weekly</MenuItem>
//                 <MenuItem value="monthly">Monthly</MenuItem>
//             </Select>
//         }>
//             <ToggleButtonGroup
//                 value={parameter}
//                 exclusive
//                 onChange={handleParameterChange}
//                 aria-label="health parameters"
//             >
//                 <ToggleButton value="oxygen">Oxygen Level</ToggleButton>
//                 <ToggleButton value="glucose">Glucose Level</ToggleButton>
//                 <ToggleButton value="hemoglobin">Hemoglobin</ToggleButton>
//             </ToggleButtonGroup>
//             <Chart options={options} series={series} type="bar" height={370} width={"100%"} />
//         </DashboardCard>
//     );
// };

// export default HealthAnalytics;
import React, { useState } from 'react';
import { Select, MenuItem, ToggleButtonGroup, ToggleButton } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import DashboardCard from '@/app/PatientDashboard/components/shared/DashboardCard';
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const HealthAnalytics = () => {
    type HealthParameter = 'oxygen' | 'glucose' | 'hemoglobin';
    const [parameter, setParameter] = useState<HealthParameter>('oxygen');

    const handleParameterChange = (_event: React.MouseEvent<HTMLElement>, newParameter: HealthParameter | null) => {
        if (newParameter !== null) {
            setParameter(newParameter);
        }
    };

    const colors: Record<HealthParameter, string> = {
        oxygen: '#e91e63', 
        glucose: '#4caf50', 
        hemoglobin: '#673ab7'
    };

    const healthData: Record<HealthParameter, number[]> = {
        oxygen: [98, 97, 96, 97, 99, 98, 97],
        glucose: [110, 120, 115, 130, 125, 118, 122],
        hemoglobin: [13.5, 14, 13.8, 14.2, 13.7, 14.5, 14]
    };

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
            height: 370,
        },
        colors: [colors[parameter]],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%',
                borderRadius: 6,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: [colors[parameter]],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
        },
        xaxis: {
            categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisBorder: { show: false },
        },
        tooltip: {
            theme: 'dark',
        },
    };

    const series = [{
        name: parameter.charAt(0).toUpperCase() + parameter.slice(1),
        data: healthData[parameter],
    }];

    return (
        <DashboardCard title="Health Analytics" action={
            <Select value="weekly" size="small" disabled>
                <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
        }>
            <ToggleButtonGroup
                value={parameter}
                exclusive
                onChange={handleParameterChange}
                aria-label="health parameters"
            >
                <ToggleButton value="oxygen">Oxygen Level</ToggleButton>
                <ToggleButton value="glucose">Glucose Level</ToggleButton>
                <ToggleButton value="hemoglobin">Hemoglobin</ToggleButton>
            </ToggleButtonGroup>
            <Chart options={options} series={series} type="bar" height={370} width={"100%"} />
        </DashboardCard>
    );
};

export default HealthAnalytics;
