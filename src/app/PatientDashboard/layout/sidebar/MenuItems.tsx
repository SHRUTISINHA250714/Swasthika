import {
  IconHome2,
  IconUserCircle,
  IconVideo,
  IconHeartbeat,
  IconRun,
  IconUsers,
  IconLogin,
  IconUserPlus,
} from "@tabler/icons-react";

const Menuitems = [
  {
    navlabel: true,
    subheader: "PATIENT DASHBOARD",
  },
  {
    title: "Patient Dashboard",
    icon: IconHome2,
    href: "/",
  },
  {
    title: "Profile",
    icon: IconUserCircle,
    href: "/PatientDashboard/PatientPage/profile",
  },
  {
    title: "Video Consultation",
    icon: IconVideo,
    href: "/PatientDashboard/PatientPage/VideoConsultation",
  },
  {
    title: "Disease Prediction",
    icon: IconHeartbeat,
<<<<<<< HEAD
    href: "/PatientDashboard/DiseasePrediction",
=======
    href: "/PatientDashboard/PatientPage/DiseasePrediction",
>>>>>>> fae4a46b949cc5ba244cd0ea4b43fb5c521b344d
  },
  {
    title: "Exercise & Activity",
    icon: IconRun,
<<<<<<< HEAD
    href: "/games",
=======
    href: "/PatientDashboard/PatientPage/ExerciseActivity",
>>>>>>> fae4a46b949cc5ba244cd0ea4b43fb5c521b344d
  },
  {
    title: "Community",
    icon: IconUsers,
    href: "/PatientDashboard/PatientPage/Community",
  },
  {
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
];

export default Menuitems;