import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
    return (
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Bienvenu sur votre Dashboard" />
        </Box>
       </Box>
    );
};
  

export default Dashboard;
