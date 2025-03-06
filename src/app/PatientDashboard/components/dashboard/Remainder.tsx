
// import {
//     Typography, Box,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//     Chip
// } from '@mui/material';
// import DashboardCard from '@/app/(DashboardLayout)//components/shared/DashboardCard';

// const products = [
//     {
//         id: "1",
//         name: "Sunil Joshi",
//         post: "Web Designer",
//         pname: "Elite Admin",
//         priority: "Low",
//         pbg: "primary.main",
//         budget: "3.9",
//     },
//     {
//         id: "2",
//         name: "Andrew McDownland",
//         post: "Project Manager",
//         pname: "Real Homes WP Theme",
//         priority: "Medium",
//         pbg: "secondary.main",
//         budget: "24.5",
//     },
//     {
//         id: "3",
//         name: "Christopher Jamil",
//         post: "Project Manager",
//         pname: "MedicalPro WP Theme",
//         priority: "High",
//         pbg: "error.main",
//         budget: "12.8",
//     },
//     {
//         id: "4",
//         name: "Nirav Joshi",
//         post: "Frontend Engineer",
//         pname: "Hosting Press HTML",
//         priority: "Critical",
//         pbg: "success.main",
//         budget: "2.4",
//     },
// ];


// const ProductPerformance = () => {
//     return (

//         <DashboardCard title="Product Performance">
//             <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
//                 <Table
//                     aria-label="simple table"
//                     sx={{
//                         whiteSpace: "nowrap",
//                         mt: 2
//                     }}
//                 >
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Id
//                                 </Typography>
//                             </TableCell>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Assigned
//                                 </Typography>
//                             </TableCell>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Name
//                                 </Typography>
//                             </TableCell>
//                             <TableCell>
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Priority
//                                 </Typography>
//                             </TableCell>
//                             <TableCell align="right">
//                                 <Typography variant="subtitle2" fontWeight={600}>
//                                     Budget
//                                 </Typography>
//                             </TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {products.map((product) => (
//                             <TableRow key={product.name}>
//                                 <TableCell>
//                                     <Typography
//                                         sx={{
//                                             fontSize: "15px",
//                                             fontWeight: "500",
//                                         }}
//                                     >
//                                         {product.id}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell>
//                                     <Box
//                                         sx={{
//                                             display: "flex",
//                                             alignItems: "center",
//                                         }}
//                                     >
//                                         <Box>
//                                             <Typography variant="subtitle2" fontWeight={600}>
//                                                 {product.name}
//                                             </Typography>
//                                             <Typography
//                                                 color="textSecondary"
//                                                 sx={{
//                                                     fontSize: "13px",
//                                                 }}
//                                             >
//                                                 {product.post}
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//                                 </TableCell>
//                                 <TableCell>
//                                     <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
//                                         {product.pname}
//                                     </Typography>
//                                 </TableCell>
//                                 <TableCell>
//                                     <Chip
//                                         sx={{
//                                             px: "4px",
//                                             backgroundColor: product.pbg,
//                                             color: "#fff",
//                                         }}
//                                         size="small"
//                                         label={product.priority}
//                                     ></Chip>
//                                 </TableCell>
//                                 <TableCell align="right">
//                                     <Typography variant="h6">${product.budget}k</Typography>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </Box>
//         </DashboardCard>
//     );
// };

// export default ProductPerformance;
// import {
//     Typography,
//     Box,
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//     Chip,
//     Card,
//     CardContent,
//     Avatar,
//     Stack,
//     IconButton,
//     TextField,
//     MenuItem
//   } from "@mui/material";
//   import { IconDotsVertical } from "@tabler/icons-react";
//   import { styled } from "@mui/system";
  
//   // Styled Card with Soft Colors
//   const SoftCard = styled(Card)({
//     background: "#F9FAFB", // Very Light Background
//     borderRadius: "15px",
//     boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
//     padding: "20px",
//     overflow: "hidden",
//   });
  
//   // Appointment Data (Replace with Backend)
//   const appointments = [
//     { id: 1, type: "Cardiogram", doctor: "Dr. Calvin Smith", date: "13 March", icon: "💙", bg: "#E3F2FD" },
//     { id: 2, type: "Checkup", doctor: "Dr. Cristino Paul", date: "5 May", icon: "🩺", bg: "#E8F5E9" },
//     { id: 3, type: "Covid Test", doctor: "Dr. Alia Reynolds", date: "19 June", icon: "🦠", bg: "#FFF3E0" },
//     { id: 4, type: "Dentist", doctor: "Dr. Toni Kevin", date: "20 June", icon: "🦷", bg: "#F3E5F5" },
//     { id: 5, type: "Eye Test", doctor: "Dr. Raj Malhotra", date: "31 Aug", icon: "👁️", bg: "#FFEBEE" },
//   ];
  
//   // Medical History Data (Replace with Backend)
//   const medicalHistory = [
//     { id: 1, doctor: "Dr. Jenny Smith", diagnosis: "Dermatology", date: "12.05.2022", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
//     { id: 2, doctor: "Andrea Lalema", diagnosis: "Cardiology", date: "10.05.2022", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
//     { id: 3, doctor: "Dr. William Stephin", diagnosis: "Neurology", date: "12.05.2022", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
//   ];
  
//   const AppointmentList = () => {
//     return (
//       <SoftCard>
//         <Stack direction="row" justifyContent="space-between">
//           <Typography variant="h6" fontWeight={600}>
//             Doctor's Appointment
//           </Typography>
//           <IconButton>
//             <IconDotsVertical size={20} />
//           </IconButton>
//         </Stack>
  
//         {/* Date Selector */}
//         <TextField
//           select
//           fullWidth
//           size="small"
//           margin="normal"
//           label="Select Date"
//           defaultValue=""
//           sx={{
//             bgcolor: "#fff",
//             borderRadius: "8px",
//             "& fieldset": { border: "none" },
//           }}
//         >
//           {appointments.map((appt) => (
//             <MenuItem key={appt.id} value={appt.date}>
//               {appt.date}
//             </MenuItem>
//           ))}
//         </TextField>
  
//         {/* Appointment Cards */}
//         {appointments.map((appt) => (
//           <Box
//             key={appt.id}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               p: 2,
//               my: 1,
//               borderRadius: 3,
//               backgroundColor: appt.bg,
//               color: "#333",
//               boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             <Typography fontSize={24} mr={2}>
//               {appt.icon}
//             </Typography>
//             <Box>
//               <Typography fontWeight={600}>{appt.type}</Typography>
//               <Typography variant="body2">{appt.doctor}</Typography>
//             </Box>
//             <Typography sx={{ ml: "auto", fontWeight: 600 }}>{appt.date}</Typography>
//           </Box>
//         ))}
//       </SoftCard>
//     );
//   };
  
//   const MedicalHistoryCard = () => {
//     return (
//       <SoftCard>
//         <Stack direction="row" justifyContent="space-between">
//           <Typography variant="h6" fontWeight={600}>
//             Medical History
//           </Typography>
//           <Typography variant="body2" sx={{ cursor: "pointer", color: "#1976D2" }}>
//             Show all
//           </Typography>
//         </Stack>
  
//         <Box sx={{ overflow: "auto" }}>
//           <Table sx={{ mt: 2 }}>
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={{ fontWeight: 600 }}>Doctor</TableCell>
//                 <TableCell sx={{ fontWeight: 600 }}>Diagnosis</TableCell>
//                 <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
//                 <TableCell align="right" sx={{ fontWeight: 600 }}>
//                   Action
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {medicalHistory.map((record) => (
//                 <TableRow key={record.id}>
//                   <TableCell>
//                     <Stack direction="row" alignItems="center" spacing={1}>
//                       <Avatar src={record.avatar} />
//                       <Typography fontWeight={500}>{record.doctor}</Typography>
//                     </Stack>
//                   </TableCell>
//                   <TableCell>{record.diagnosis}</TableCell>
//                   <TableCell>{record.date}</TableCell>
//                   <TableCell align="right">
//                     <Chip label="Reschedule" color="primary" size="small" sx={{ bgcolor: "#E3F2FD", color: "#1976D2" }} />
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Box>
//       </SoftCard>
//     );
//   };
  
//   const HealthDashboard = () => {
//     return (
//       <Box sx={{ p: 3, display: "grid", gap: 2 }}>
//         <AppointmentList />
//         <MedicalHistoryCard />
//       </Box>
//     );
//   };
  
//   export default HealthDashboard;
// import React, { useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import format from 'date-fns/format';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// import getDay from 'date-fns/getDay';
// import enUS from 'date-fns/locale/en-US';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Checkbox, TextField, Button, List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@mui/material';

// const locales = {
//   'en-US': enUS,
// };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const ReminderApp = () => {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });
//   const [notes, setNotes] = useState([
//     { text: "Take Vitamin Tablet", completed: true },
//     { text: "Add Appointment", completed: true },
//     { text: "Set a Goal", completed: false },
//     { text: "Add New Weight", completed: false }
//   ]);
  
//   const addEvent = () => {
//     if (newEvent.title) {
//       setEvents([...events, newEvent]);
//       setNewEvent({ title: '', start: new Date(), end: new Date() });
//     }
//   };

//   const toggleNote = (index) => {
//     const updatedNotes = [...notes];
//     updatedNotes[index].completed = !updatedNotes[index].completed;
//     setNotes(updatedNotes);
//   };

//   const addNote = (text) => {
//     if (text.trim() !== "") {
//       setNotes([...notes, { text, completed: false }]);
//     }
//   };

//   return (
//     <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={3} p={3}>
//       {/* Calendar Section */}
//       <Box flex={2} p={2} borderRadius={3} boxShadow={3} bgcolor="white">
//         <Typography variant="h5" fontWeight="bold">Reminder Calendar</Typography>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 400, margin: "20px 0" }}
//         />
//         <TextField 
//           fullWidth
//           label="New Reminder"
//           variant="outlined"
//           value={newEvent.title}
//           onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//           sx={{ mb: 2 }}
//         />
//         <Button variant="contained" color="primary" onClick={addEvent} fullWidth>
//           Add Reminder
//         </Button>
//       </Box>

//       {/* Notes Section */}
//       <Box flex={1} p={2} borderRadius={3} boxShadow={3} bgcolor="white">
//         <Typography variant="h5" fontWeight="bold">Notes</Typography>
//         <List>
//           {notes.map((note, index) => (
//             <ListItem key={index} button onClick={() => toggleNote(index)}>
//               <ListItemIcon>
//                 <Checkbox checked={note.completed} />
//               </ListItemIcon>
//               <ListItemText primary={note.text} sx={{ textDecoration: note.completed ? 'line-through' : 'none' }} />
//             </ListItem>
//           ))}
//         </List>
//         <TextField
//           fullWidth
//           label="New Note"
//           variant="outlined"
//           onKeyDown={(e) => e.key === 'Enter' && addNote(e.target.value)}
//           sx={{ mt: 2 }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default ReminderApp;


// import React, { useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import format from 'date-fns/format';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// import getDay from 'date-fns/getDay';
// import enUS from 'date-fns/locale/en-US';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { TextField, Button, Typography, Box, Paper, Snackbar, Alert, MenuItem } from '@mui/material';
// import { styled } from '@mui/system';

// const locales = {
//   'en-US': enUS,
// };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const StyledPaper = styled(Paper)({
//   padding: '20px',
//   width: '90%',
//   maxWidth: '600px',
//   textAlign: 'center',
//   boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
//   background: 'white',
//   borderRadius: '15px',
// });

// const ReminderApp = () => {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const addEvent = () => {
//     if (newEvent.title.trim() !== "") {
//       setEvents([...events, newEvent]);
//       setNewEvent({ title: '', start: new Date(), end: new Date() });
//       setOpenSnackbar(true);
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" gap={3} p={3}>
//       <StyledPaper>
//         <Typography variant="h4" fontWeight="bold" color="primary">Reminder Calendar</Typography>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           views={{ month: true, week: true, agenda: true }}
//           toolbar={{ today: false, month: true, week: true, agenda: true, prev: true, next: true }}
//           style={{ height: 400, margin: "20px 0" }}
//           range={{ length: 30 }}
//         />
//         <TextField
//           fullWidth
//           label="New Reminder"
//           variant="outlined"
//           value={newEvent.title}
//           onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           fullWidth
//           label="Select Date"
//           type="date"
//           variant="outlined"
//           InputLabelProps={{ shrink: true }}
//           onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value), end: new Date(e.target.value) })}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           fullWidth
//           label="Select Time"
//           type="time"
//           variant="outlined"
//           InputLabelProps={{ shrink: true }}
//           onChange={(e) => {
//             const time = e.target.value.split(":");
//             const newDate = new Date(newEvent.start);
//             newDate.setHours(time[0], time[1]);
//             setNewEvent({ ...newEvent, start: newDate, end: newDate });
//           }}
//           sx={{ mb: 2 }}
//         />
//         <Button variant="contained" color="secondary" onClick={addEvent} fullWidth sx={{ mb: 2 }}>
//           Add Reminder
//         </Button>
//       </StyledPaper>
//       <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
//         <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
//           Reminder added successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ReminderApp;
// import React, { useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import format from 'date-fns/format';
// import parse from 'date-fns/parse';
// import startOfWeek from 'date-fns/startOfWeek';
// import getDay from 'date-fns/getDay';
// import enUS from 'date-fns/locale/en-US';
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { TextField, Button, Typography, Box, Paper, Snackbar, Alert } from '@mui/material';
// import { styled } from '@mui/system';

// const locales = {
//   'en-US': enUS,
// };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const StyledPaper = styled(Paper)({
//   padding: '20px',
//   width: '90%',
//   maxWidth: '600px',
//   textAlign: 'center',
//   boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2)',
//   background: 'white',
//   borderRadius: '15px',
// });

// const CustomToolbar = () => <></>; // Remove toolbar buttons

// const ReminderApp = () => {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const addEvent = () => {
//     if (newEvent.title.trim() !== "") {
//       setEvents([...events, newEvent]);
//       setNewEvent({ title: '', start: new Date(), end: new Date() });
//       setOpenSnackbar(true);
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" alignItems="center" gap={3} p={3}>
//       <StyledPaper>
//         <Typography variant="h4" fontWeight="bold" color="primary">Reminder Calendar</Typography>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           views={{ month: true, agenda: true }}
//           components={{ toolbar: CustomToolbar }}
//           style={{ height: 400, margin: "20px 0" }}
//           dayPropGetter={() => ({ style: { textAlign: 'center' } })} // Center date in each day
//         />
//         <TextField
//           fullWidth
//           label="New Reminder"
//           variant="outlined"
//           value={newEvent.title}
//           onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           fullWidth
//           label="Select Date"
//           type="date"
//           variant="outlined"
//           InputLabelProps={{ shrink: true }}
//           onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value), end: new Date(e.target.value) })}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           fullWidth
//           label="Select Time"
//           type="time"
//           variant="outlined"
//           InputLabelProps={{ shrink: true }}
//           onChange={(e) => {
//             const time = e.target.value.split(":");
//             const newDate = new Date(newEvent.start);
//             newDate.setHours(time[0], time[1]);
//             setNewEvent({ ...newEvent, start: newDate, end: newDate });
//           }}
//           sx={{ mb: 2 }}
//         />
//         <Button variant="contained" color="secondary" onClick={addEvent} fullWidth sx={{ mb: 2 }}>
//           Add Reminder
//         </Button>
//       </StyledPaper>
//       <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
//         <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
//           Reminder added successfully!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default ReminderApp;

// import React from 'react'

// const Remainder = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default Remainder


'use client';
import React, { useState } from 'react';
import { format } from 'date-fns';

interface Event {
  title: string;
  details: string;
  start: Date;
  end: Date;
}

const ReminderApp: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<Event>({ title: '', details: '', start: new Date(), end: new Date() });
  const [todoList, setTodoList] = useState<{ task: string; completed: boolean }[]>([]);
  const [newTask, setNewTask] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const addEvent = () => {
    if (newEvent.title.trim() !== "") {
      setEvents([...events, newEvent]);
      setNewEvent({ title: '', details: '', start: new Date(), end: new Date() });
      setOpenSnackbar(true);
    }
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTodoList([...todoList, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = todoList.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTodoList(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-6 min-h-screen animate-fadeIn">
      <div className="bg-blue-50 shadow-xl rounded-lg p-6 w-full max-w-lg text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-indigo-700">Reminder Calendar</h2>
        
        <div className="mt-4 p-4 border rounded-lg shadow-md h-64 overflow-auto bg-white">
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index} className="p-2 border-b last:border-none">
                <p className="text-lg font-semibold text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-600">{format(event.start, 'PPpp')}</p>
                <p className="text-sm text-gray-500">{event.details}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reminders added.</p>
          )}
        </div>
        
        <input type="text" placeholder="New Reminder" className="w-full p-2 border rounded-md mt-4" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <textarea placeholder="Appointment Details" className="w-full p-2 border rounded-md mt-2" value={newEvent.details} onChange={(e) => setNewEvent({ ...newEvent, details: e.target.value })} />
        <input type="date" className="w-full p-2 border rounded-md mt-2" onChange={(e) => {
          const dateValue = new Date(e.target.value);
          if (!isNaN(dateValue.getTime())) {
            setNewEvent({ ...newEvent, start: dateValue, end: dateValue });
          }
        }} />
        <input type="time" className="w-full p-2 border rounded-md mt-2" onChange={(e) => {
          const time = e.target.value.split(":");
          const hours = parseInt(time[0], 10);
          const minutes = parseInt(time[1], 10);
          if (!isNaN(hours) && !isNaN(minutes)) {
            const newDate = new Date(newEvent.start);
            newDate.setHours(hours, minutes);
            setNewEvent({ ...newEvent, start: newDate, end: newDate });
          }
        }} />
        
        <button className="w-full bg-indigo-500 text-white p-2 rounded-md mt-4 hover:bg-indigo-600 transition duration-300" onClick={addEvent}>Add Reminder</button>
      </div>
      
      <div className="bg-green-50 shadow-xl rounded-lg p-6 w-full max-w-lg text-center transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-green-600">To-Do List</h2>
        <div className="mt-4 p-4 border rounded-lg shadow-md h-64 overflow-auto bg-white">
          {todoList.length > 0 ? (
            todoList.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-2 border-b last:border-none">
                <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} className="mr-2" />
                <span className={task.completed ? "line-through text-gray-400" : "text-lg text-gray-800"}>{task.task}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tasks added.</p>
          )}
        </div>
        
        <input type="text" placeholder="New Task" className="w-full p-2 border rounded-md mt-4" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button className="w-full bg-green-500 text-white p-2 rounded-md mt-4 hover:bg-green-600 transition duration-300" onClick={addTask}>Add Task</button>
      </div>

      {openSnackbar && (
        <div className="bg-green-500 text-white p-3 rounded-md shadow-md">
          Reminder added successfully!
        </div>
      )}
    </div>
  );
};

export default ReminderApp;
