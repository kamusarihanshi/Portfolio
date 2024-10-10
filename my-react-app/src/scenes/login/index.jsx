import { Box } from "@mui/material";
import Header from "../../components/Header";
import Login from "../../components/Login";

const First = () => {
  return (
    <Box m="20px">
      <Header title="LOGIN" subtitle="login page" />
      <Box height="75vh">
        <Login />
      </Box>
    </Box>
  );
};

export default First;