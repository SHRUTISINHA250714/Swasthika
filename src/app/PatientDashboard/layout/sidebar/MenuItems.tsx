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
    href: "/PatientDashboard/DiseasePrediction",
  },
  {
    title: "Exercise & Activity",
    icon: IconRun,
    href: "/games",
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