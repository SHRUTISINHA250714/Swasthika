'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/PatientDashboard/components/container/PageContainer';
// components
import HealthOverview from '@/app/PatientDashboard/components/dashboard/HealthOverview';
import BMI from '@/app/PatientDashboard/components/dashboard/BMI';
import RecentTransactions from '@/app/PatientDashboard/components/dashboard/RecentTransactions';
import Remainder from '@/app/PatientDashboard/components/dashboard/Remainder';
import Statistics from '@/app/PatientDashboard/components/dashboard/Statistics';
import Activity from '@/app/PatientDashboard/components/dashboard/Activity';
import Medicine from '@/app/PatientDashboard/components/dashboard/Medicine';

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <HealthOverview />
          </Grid>
         
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <BMI />
              </Grid>
              <Grid item xs={12}>
                <Activity />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Statistics />
          </Grid>
          <Grid item xs={12} lg={6}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Remainder />
          </Grid>
          <Grid item xs={12} lg={12}>
            <Medicine />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

