<<<<<<< HEAD
=======
// import { useMediaQuery, Box, Drawer } from "@mui/material";
// import SidebarItems from "./SidebarItems";
// import { Upgrade } from "./Updrade";
// import { Sidebar, Logo } from 'react-mui-sidebar';

// interface ItemType {
//   isMobileSidebarOpen: boolean;
//   onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
//   isSidebarOpen: boolean;
// }

// const MSidebar = ({
//   isMobileSidebarOpen,
//   onSidebarClose,
//   isSidebarOpen,
// }: ItemType) => {
//   const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

//   const sidebarWidth = "270px";

//   // Custom CSS for short scrollbar
//   const scrollbarStyles = {
//     '&::-webkit-scrollbar': {
//       width: '7px',

//     },
//     '&::-webkit-scrollbar-thumb': {
//       backgroundColor: '#eff2f7',
//       borderRadius: '15px',
//     },
//   };


//   if (lgUp) {
//     return (
//       <Box
//         sx={{
//           width: sidebarWidth,
//           flexShrink: 0,
//         }}
//       >
//         {/* ------------------------------------------- */}
//         {/* Sidebar for desktop */}
//         {/* ------------------------------------------- */}
//         <Drawer
//           anchor="left"
//           open={isSidebarOpen}
//           variant="permanent"
//           PaperProps={{
//             sx: {
//               boxSizing: "border-box",
//               ...scrollbarStyles,
//             },
//           }}
//         >
//           {/* ------------------------------------------- */}
//           {/* Sidebar Box */}
//           {/* ------------------------------------------- */}
//           <Box
//             sx={{
//               height: "100%",
//             }}
//           >
//             <Sidebar
//               width={'270px'}
//               collapsewidth="80px"
//               open={isSidebarOpen}
//               themeColor="#5d87ff"
//               themeSecondaryColor="#49beff"
//               showProfile={false}
//             >
//               {/* ------------------------------------------- */}
//               {/* Logo */}
//               {/* ------------------------------------------- */}
//               <Logo img="/images/logos/dark-logo.svg" />
//               <Box>
//                 {/* ------------------------------------------- */}
//                 {/* Sidebar Items */}
//                 {/* ------------------------------------------- */}
//                 <SidebarItems />
//                 <Upgrade />
//               </Box>
//             </Sidebar >
//           </Box>
//         </Drawer>
//       </Box>
//     );
//   }

//   return (
//     <Drawer
//       anchor="left"
//       open={isMobileSidebarOpen}
//       onClose={onSidebarClose}
//       variant="temporary"
//       PaperProps={{
//         sx: {
//           boxShadow: (theme) => theme.shadows[8],
//           ...scrollbarStyles,
//         },
//       }}
//     >
//       {/* ------------------------------------------- */}
//       {/* Sidebar Box */}
//       {/* ------------------------------------------- */}
//       <Box px={2}>
//         <Sidebar
//           width={'270px'}
//           collapsewidth="80px"
//           isCollapse={false}
//           mode="light"
//           direction="ltr"
//           themeColor="#5d87ff"
//           themeSecondaryColor="#49beff"
//           showProfile={false}
//         >
//           {/* ------------------------------------------- */}
//           {/* Logo */}
//           {/* ------------------------------------------- */}
//           <Logo img="/images/logos/dark-logo.svg" />
//           {/* ------------------------------------------- */}
//           {/* Sidebar Items */}
//           {/* ------------------------------------------- */}
//           <SidebarItems />
//           <Upgrade />
//         </Sidebar>
//       </Box>
//       {/* ------------------------------------------- */}
//       {/* Sidebar For Mobile */}
//       {/* ------------------------------------------- */}

//     </Drawer>
//   );
// };

// export default MSidebar;





>>>>>>> fae4a46b949cc5ba244cd0ea4b43fb5c521b344d
import { useMediaQuery, Box, Drawer, ThemeProvider, createTheme } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Updrade";
import { Sidebar, Logo } from "react-mui-sidebar";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }: ItemType) => {
  const theme = createTheme(); // Create MUI theme
  const lgUp = useMediaQuery(theme.breakpoints.up("lg")); // Use the theme safely

  const sidebarWidth = "270px";

  const scrollbarStyles = {
    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#eff2f7",
      borderRadius: "15px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      {lgUp ? (
        <Box
          sx={{
            width: sidebarWidth,
            flexShrink: 0,
          }}
        >
          <Drawer
            anchor="left"
            open={isSidebarOpen}
            variant="permanent"
            PaperProps={{
              sx: {
                boxSizing: "border-box",
                ...scrollbarStyles,
              },
            }}
          >
            <Box sx={{ height: "100%" }}>
              <Sidebar
                width={"270px"}
                collapsewidth="80px"
                open={isSidebarOpen}
                themeColor="#5d87ff"
                themeSecondaryColor="#49beff"
                showProfile={false}
              >
                <Logo img="/images/logos/dark-logo.svg" />
                <Box>
                  <SidebarItems toggleMobileSidebar={function (): void {
                    throw new Error("Function not implemented.");
                  } } />
                  <Upgrade />
                </Box>
              </Sidebar>
            </Box>
          </Drawer>
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={isMobileSidebarOpen}
          onClose={onSidebarClose}
          variant="temporary"
          PaperProps={{
            sx: {
              boxShadow: (theme) => theme.shadows[8],
              ...scrollbarStyles,
            },
          }}
        >
          <Box px={2}>
            <Sidebar
              width={"270px"}
              collapsewidth="80px"
              isCollapse={false}
              mode="light"
              direction="ltr"
              themeColor="#5d87ff"
              themeSecondaryColor="#49beff"
              showProfile={false}
            >
              <Logo img="/images/logos/dark-logo.svg" />
              <SidebarItems toggleMobileSidebar={function (): void {
                  throw new Error("Function not implemented.");
                } } />
              <Upgrade />
            </Sidebar>
          </Box>
        </Drawer>
      )}
    </ThemeProvider>
  );
};

export default MSidebar;
