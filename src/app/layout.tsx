
// import { baselightTheme } from "../app/utils/theme/DefaultColors";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children?: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="vsc-initialized">
//       <body>
//         <ThemeProvider theme={baselightTheme}>
//           <CssBaseline />
//           {children}{" "}
//           {/* Ensure children are rendered inside PatientDashboard */}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
// "use client";
// import { baselightTheme } from "../app/utils/theme/DefaultColors";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Sidebar from "@/app/PatientDashboard/layout/sidebar/Sidebar";
// import Header from "@/app/PatientDashboard/layout/header/Header";
// import { styled, Container, Box } from "@mui/material";
// import React, { useState } from "react";
// import "./globals.css";

// const MainWrapper = styled("div")(() => ({
//   display: "flex",
//   minHeight: "100vh",
//   width: "100%",
// }));

// const PageWrapper = styled("div")(() => ({
//   display: "flex",
//   flexGrow: 1,
//   flexDirection: "column",
//   zIndex: 1,
//   backgroundColor: "transparent",
// }));

// export default function RootLayout({ children }: { children?: React.ReactNode }) {
//   const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider theme={baselightTheme}>
//           <CssBaseline />
//           <MainWrapper>
//             <Sidebar
//               isSidebarOpen={true} // Keeping the sidebar always open
//               isMobileSidebarOpen={isMobileSidebarOpen}
//               onSidebarClose={() => setMobileSidebarOpen(false)}
//             />
//             <PageWrapper>
//               <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
//               <Container
//                 maxWidth={false}
//                 sx={{
//                   paddingTop: "20px",
//                   width: "100%",
//                   maxWidth: "100vw",
//                   margin: 0,
//                   paddingLeft: 0,
//                   paddingRight: 0,
//                 }}
//               >
//                 <Box sx={{ minHeight: "calc(100vh - 170px)", width: "100%", display: "flex", padding: 0, margin: 0 }}>
//                   {children}
//                 </Box>
//               </Container>
//             </PageWrapper>
//           </MainWrapper>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
'use client';

import Sidebar from '@/app/PatientDashboard/layout/sidebar/Sidebar';
import Header from '@/app/PatientDashboard/layout/header/Header';
import React, { useState, ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
  children?: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex min-h-screen w-full">
          <Sidebar
            isSidebarOpen={true} // Keeping the sidebar always open
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
          />
          <div className="flex flex-col flex-grow z-1 bg-transparent">
            <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />
            <div className="w-full max-w-full pt-5 px-0">
              <div className="min-h-[calc(100vh-170px)] w-full flex p-0 m-0">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
