import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Wallet from '../../../../views/nftsocietyPages/Wallet/Wallet'
// import WebbeeLogo from '../../../../svg/logos/Webbee';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        {/* <Box
          display={'flex'}
          component="a"
          underline="none"
          href="/"
          title="webbee"
          height={24}
          width={35}
        >
          <WebbeeLogo height={'100%'} width={'100%'} />
        </Box> */}
        <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
          <Box marginTop={1} marginRight={2}>
            {/* <Link
              underline="none"
              component="a"
              href="/"
              color="textPrimary"
              variant={'subtitle2'}
            >
              Home
            </Link> */}
            <Button
              variant="outlined"
              color="primary"
              component="a"
              href="/"
              size="large"
            >
              Home
            </Button>
          </Box>
          <Box marginTop={1}>
            <Wallet />
          </Box>
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12}>
      <Typography
        align={"center"}
        variant={"subtitle2"}
        color="textSecondary"
        gutterBottom
      >
        &copy; NFTSociety. 2022. All rights reserved
      </Typography>
      <Typography
        align={"center"}
        variant={"caption"}
        color="textSecondary"
        component={"p"}
      >
        Email : kkykdy4334@gmail.com
        <br />
        TEL : 01063320951
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
