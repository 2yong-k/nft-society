import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "../../../common/Container";
import HackerNews from "./components/HackerNews/HackerNews";
import CoinTable from "./components/CoinTable/CoinTable";
import Grid from "@mui/material/Grid";
import useReload from "../hooks/useReload";

const More = () => {
  const theme = useTheme();
  useReload();

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <CoinTable />
            </Grid>
            <Grid item xs={12} md={6}>
              <HackerNews />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

More.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default More;
