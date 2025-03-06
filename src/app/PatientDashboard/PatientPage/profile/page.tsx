// 'use client';
// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import { Card, Avatar, Button, TextField, MenuItem, Typography, Grid } from "@mui/material";
// import { UploadFile, Warning } from "@mui/icons-material";

// const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
//     color: theme.palette.text.secondary,
//     opacity: '0.8',
//   },
//   '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
//     color: theme.palette.text.secondary,
//     opacity: '1',
//   },
//   '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
//     borderColor: theme.palette.grey[200],
//   },
// }));

// const PatientProfile = () => {
//   const [profile, setProfile] = useState({
//     firstName: "Neil",
//     lastName: "Sims",
//     birthday: "1990-06-15",
//     gender: "Male",
//     bloodGroup: "O+",
//     email: "neil.sims@email.com",
//     phone: "+12-345 678 910",
//     address: "123, Main Street, NY, USA",
//     city: "New York",
//     state: "NY",
//     zip: "10001",
//     emergencyContact: "+12-987 654 321",
//     emergencyRelation: "Brother",
//     chronicIllnesses: "Diabetes, Hypertension",
//     allergies: "Peanuts, Penicillin",
//     medications: "Metformin, Lisinopril",
//     insuranceProvider: "HealthCare Inc.",
//     policyNumber: "HC123456789",
//     mentalHealth: "Mild Anxiety",
//     lifestyle: "Non-smoker, Regular Exercise",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   return (
//     <div className="p-6">
//       <Grid container spacing={4}>
//       <div style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundImage: "url('/ProfileBack.jpg')",
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               opacity: 0.9,  // Only applies to the background image
//               zIndex: 0
//             }} />
//         {/* Left Profile Section */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ p: 4, textAlign: 'center', backgroundColor: '#f3f3f3' }}>
//             <Avatar sx={{ width: 100, height: 100, margin: 'auto' }} src="/default-avatar.jpg" />
//             <Typography variant="h6" sx={{ mt: 2 }}>{profile.firstName} {profile.lastName}</Typography>
//             <Typography color="textSecondary">Patient Profile</Typography>
//             <Typography color="textSecondary" gutterBottom>{profile.city}, {profile.state}</Typography>
            
//             <Button variant="contained" color="success" sx={{ width: '100%', mb: 1 }}>Connect</Button>
//             <Button variant="contained" color="primary" sx={{ width: '100%' }}>Send Message</Button>
            
//             <Typography variant="h6" sx={{ mt: 3 }}>Select Profile Photo</Typography>
//             <Button variant="outlined" sx={{ mt: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <UploadFile sx={{ mr: 1 }} /> Choose Image
//             </Button>
//           </Card>

//           <Card sx={{ p: 4, backgroundColor: '#ffe5e5', mt: 4 }}>
//             <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Warning color="error" /> Emergency Contact
//             </Typography>
//             <CustomTextField label="Emergency Contact" name="emergencyContact" value={profile.emergencyContact} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
//             <CustomTextField label="Relation" name="emergencyRelation" value={profile.emergencyRelation} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
//           </Card>
//         </Grid>

//         {/* Right Profile Form Section */}
//         <Grid item xs={12} md={8}>
//           <Card sx={{ p: 6, position: 'relative', overflow: 'hidden' }}>
            
//             {/* Background Image with Opacity */}
            

//             <div style={{ position: 'relative', zIndex: 1 }}>
              
//               <Typography variant="h6">General Information</Typography>
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={6}><CustomTextField label="First Name" name="firstName" value={profile.firstName} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={6}><CustomTextField label="Last Name" name="lastName" value={profile.lastName} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={6}><CustomTextField label="Birthday" name="birthday" type="date" value={profile.birthday} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={6}>
//                   <CustomTextField select label="Gender" name="gender" value={profile.gender} onChange={handleChange} fullWidth>
//                     <MenuItem value="Male">Male</MenuItem>
//                     <MenuItem value="Female">Female</MenuItem>
//                     <MenuItem value="Other">Other</MenuItem>
//                   </CustomTextField>
//                 </Grid>
//                 <Grid item xs={6}><CustomTextField label="Blood Group" name="bloodGroup" value={profile.bloodGroup} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={6}><CustomTextField label="Email" name="email" value={profile.email} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={6}><CustomTextField label="Phone" name="phone" value={profile.phone} onChange={handleChange} fullWidth /></Grid>
//               </Grid>

//               {/* Address Section */}
//               <Typography variant="h6" sx={{ mt: 3 }}>Address</Typography>
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={12}><CustomTextField label="Address" name="address" value={profile.address} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={4}><CustomTextField label="City" name="city" value={profile.city} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={4}><CustomTextField label="State" name="state" value={profile.state} onChange={handleChange} fullWidth /></Grid>
//                 <Grid item xs={4}><CustomTextField label="ZIP" name="zip" value={profile.zip} onChange={handleChange} fullWidth /></Grid>
//               </Grid>

//               {/* Save Button */}
//               <Button variant="contained" color="primary" sx={{ mt: 3, display: 'block', mx: 'auto', width: '50%' }}>Save All</Button>

//             </div>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default PatientProfile;
// 'use client';
// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import { Card, Avatar, Button, TextField, MenuItem, Typography, Grid } from "@mui/material";
// import { UploadFile, Warning } from "@mui/icons-material";

// const CustomTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
//     color: theme.palette.text.secondary,
//     opacity: '0.8',
//   },
//   '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
//     color: theme.palette.text.secondary,
//     opacity: '1',
//   },
//   '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
//     borderColor: theme.palette.grey[200],
//   },
// }));

// const PatientProfile = () => {
//   const [profile, setProfile] = useState({
//     firstName: "Neil",
//     lastName: "Sims",
//     birthday: "1990-06-15",
//     gender: "Male",
//     bloodGroup: "O+",
//     email: "neil.sims@email.com",
//     phone: "+12-345 678 910",
//     address: "123, Main Street, NY, USA",
//     city: "New York",
//     state: "NY",
//     zip: "10001",
//     emergencyContact: "+12-987 654 321",
//     emergencyRelation: "Brother",
//     profileImage: "", // Store uploaded image
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfile({ ...profile, profileImage: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="p-6">
//       <Grid container spacing={4}>
//       <div style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundImage: "url('/ProfileBack.jpg')",
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               backgroundRepeat: 'no-repeat',
//               opacity: 0.3,  // Only applies to the background image
//               zIndex: 0
//             }} />
//         {/* Left Profile Section */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ p: 4, textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'none', color: 'black' }}>
//             <Avatar sx={{ width: 100, height: 100, margin: 'auto' }} src={profile.profileImage || "/default-avatar.jpg"} />
//             <Typography variant="h6" sx={{ mt: 2 }}>{profile.firstName} {profile.lastName}</Typography>
//             <Typography color="textPrimary">Patient Profile</Typography>
//             <Typography color="textPrimary" gutterBottom>{profile.city}, {profile.state}</Typography>
            
//             <Button variant="contained" color="success" sx={{ width: '100%', mb: 1 }}>Connect</Button>
//             <Button variant="contained" color="primary" sx={{ width: '100%' }}>Send Message</Button>
            
//             <Typography variant="h6" sx={{ mt: 3 }}>Select Profile Photo</Typography>
//             <Button component="label" variant="outlined" sx={{ mt: 2, width: '100%' }}>
//               <UploadFile sx={{ mr: 1 }} /> Choose Image
//               <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
//             </Button>
//           </Card>

//           <Card sx={{ p: 4, backgroundColor: '#ffcccc', mt: 4, color: 'black' , zIndex: 5}}>
//             <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Warning color="error" /> Emergency Contact
//             </Typography>
//             <CustomTextField label="Emergency Contact" name="emergencyContact" value={profile.emergencyContact} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
//             <CustomTextField label="Relation" name="emergencyRelation" value={profile.emergencyRelation} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
//           </Card>
//         </Grid>

//         {/* Right Profile Form Section */}
//         <Grid item xs={12} md={8}>
//           <Card sx={{ p: 6 }}>
//             <Typography variant="h2" className=" text-black extra-bold">General Information</Typography>
//             <Grid container spacing={2} sx={{ mt: 2 }}>
//               <Grid item xs={6}><CustomTextField label="First Name" name="firstName" value={profile.firstName} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={6}><CustomTextField label="Last Name" name="lastName" value={profile.lastName} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={6}><CustomTextField label="Birthday" name="birthday" type="date" value={profile.birthday} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={6}>
//                 <CustomTextField select label="Gender" name="gender" value={profile.gender} onChange={handleChange} fullWidth>
//                   <MenuItem value="Male">Male</MenuItem>
//                   <MenuItem value="Female">Female</MenuItem>
//                   <MenuItem value="Other">Other</MenuItem>
//                 </CustomTextField>
//               </Grid>
//               <Grid item xs={6}><CustomTextField label="Blood Group" name="bloodGroup" value={profile.bloodGroup} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={6}><CustomTextField label="Email" name="email" value={profile.email} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={6}><CustomTextField label="Phone" name="phone" value={profile.phone} onChange={handleChange} fullWidth /></Grid>
//             </Grid>
            
//             {/* Address Section */}
//             <Typography variant="h6" sx={{ mt: 3 }}>Address</Typography>
//             <Grid container spacing={2} sx={{ mt: 2 }}>
//               <Grid item xs={12}><CustomTextField label="Address" name="address" value={profile.address} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={4}><CustomTextField label="City" name="city" value={profile.city} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={4}><CustomTextField label="State" name="state" value={profile.state} onChange={handleChange} fullWidth /></Grid>
//               <Grid item xs={4}><CustomTextField label="ZIP" name="zip" value={profile.zip} onChange={handleChange} fullWidth /></Grid>
//             </Grid>
            
//             <Button variant="contained" color="primary" sx={{ mt: 3, display: 'block', mx: 'auto', width: '50%' }}>Save All</Button>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default PatientProfile;

'use client';
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, Avatar, Button, TextField, MenuItem, Typography, Grid } from "@mui/material";
import { UploadFile, Warning } from "@mui/icons-material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    color: theme.palette.text.secondary,
    opacity: '1',
  },
  '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[200],
  },
}));

interface Profile {
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  bloodGroup: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  emergencyContact: string;
  emergencyRelation: string;
  profileImage: string;
}

const defaultProfile: Profile = {
  firstName: "Neil",
  lastName: "Sims",
  birthday: "1990-06-15",
  gender: "Male",
  bloodGroup: "O+",
  email: "neil.sims@email.com",
  phone: "+12-345 678 910",
  address: "123, Main Street, NY, USA",
  city: "New York",
  state: "NY",
  zip: "10001",
  emergencyContact: "+12-987 654 321",
  emergencyRelation: "Brother",
  profileImage: "",
};

const PatientProfile: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(defaultProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, profileImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6" style={{ position: 'relative' }}>
      
      <Grid container spacing={4} style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: "url('/ProfileBack.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.3,
        zIndex: 0
      }} />
        {/* Left Profile Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, textAlign: 'center', backgroundColor: 'transparent', boxShadow: 'none', color: 'black' }}>
            <Avatar sx={{ width: 100, height: 100, margin: 'auto' }} src={profile.profileImage || "/default-avatar.jpg"} />
            <Typography variant="h6" sx={{ mt: 2 }}>{profile.firstName} {profile.lastName}</Typography>
            <Typography color="textPrimary">Patient Profile</Typography>
            <Typography color="textPrimary" gutterBottom>{profile.city}, {profile.state}</Typography>
            <Button variant="contained" color="success" sx={{ width: '100%', mb: 1 }}>Connect</Button>
            <Button variant="contained" color="primary" sx={{ width: '100%' }}>Send Message</Button>
            <Typography variant="h6" sx={{ mt: 3 }}>Select Profile Photo</Typography>
            <Button component="label" variant="outlined" sx={{ mt: 2, width: '100%' }}>
              <UploadFile sx={{ mr: 1 }} /> Choose Image
              <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
            </Button>
          </Card>
          <Card sx={{ p: 4, backgroundColor: '#ffcccc', mt: 4, ml:4, color: 'black' }}>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Warning color="error" /> Emergency Contact
            </Typography>
            <CustomTextField label="Emergency Contact" name="emergencyContact" value={profile.emergencyContact} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
            <CustomTextField label="Relation" name="emergencyRelation" value={profile.emergencyRelation} onChange={handleChange} fullWidth sx={{ mt: 2 }} />
          </Card>
        </Grid>
        {/* Right Profile Form Section */}
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 6 }}>
            <Typography variant="h2" className="text-black extra-bold">General Information</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {Object.entries(profile).map(([key, value]) => (
                key !== 'profileImage' && key !== 'emergencyContact' && key !== 'emergencyRelation' && (
                  <Grid item xs={key === 'address' ? 12 : 6} key={key}>
                    <CustomTextField
                      label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      name={key}
                      type={key === 'birthday' ? 'date' : 'text'}
                      value={value}
                      onChange={handleChange}
                      fullWidth
                      select={key === 'gender'}
                    >
                      {key === 'gender' && ["Male", "Female", "Other"].map((option) => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                      ))}
                    </CustomTextField>
                  </Grid>
                )
              ))}
            </Grid>
            <Button variant="contained" color="primary" sx={{ mt: 3, display: 'block', mx: 'auto', width: '50%' }}>Save All</Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientProfile;
