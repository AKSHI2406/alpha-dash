import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import OrdersTable from './OrdersTable';
import DeliveryReport from './DeliveryReport';

export default function DashboardDefault() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          typography: 'body1',
          paddingY: '10px'
        }}
      >
        <TabContext>
          <Box>
            <TabList
              aria-label="lab API tabs example"
              sx={{
                bgcolor: '#e0e0e0',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px',
                padding:'0px'
              }}
            >
              <Tab
                label="Overviews"
                value="1"
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  border: '3px #e0e0e0 solid',
                  borderRadius: '10px',
                  padding: '6px 12px',
                  fontSize: '0.875rem'
                }}
              />
              <Tab label="Tracking" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">Overviews</TabPanel>
          <TabPanel value="2">Tracking</TabPanel>
        </TabContext>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
            <InputLabel id="demo-select-small-label" style={{ paddingTop: '6px' }}>
              Week
            </InputLabel>
            <Select autoWidth labelId="demo-select-small-label" id="demo-select-small" label="Lang">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          </FormControl>
          <Button style={{ padding: '' }} variant="contained">
            + New Shipments
          </Button>
        </div>
      </Box>

      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Total Shipments" count="4,42,236" percentage={59.3} extra="35,000" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Total Order" count="78,250" percentage={70.5} extra="8,900" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Revenue" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce title="Delivered" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
        </Grid>
        <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

        <Grid item xs={12} md={7} lg={12}>
          <Grid>
          <DeliveryReport />

          </Grid>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* <Grid item sx={{marginTop:'40px'}}>
              <Typography variant="h5">Tracking Orders</Typography>
            </Grid> */}
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <div>
              <OrdersTable />
            </div>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item />
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
