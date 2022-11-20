import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
import { ReactComponent as MyMainIcon } from './mainIcon.svg';

const Webbee = ({ width = 100, height = 70 }) => {
  // const theme = useTheme();
  // const colorPrimaryMain = theme.palette.primary.main;
  //const colorPrimaryDark = theme.palette.primary.main;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 100 100"
    >
      <MyMainIcon width="" height="100" fill="none"/>
      {/* <text
        x="25"
        y="0"
        font-family="Arial"
        font-size="70pt"
        font-
        fill={colorPrimaryMain}
        stroke={colorPrimaryDark}
      >NFT</text>

      <text
        x="0"
        y="80"
        font-family="Arial"
        font-size="50pt"
        font-
        fill={colorPrimaryMain}
        stroke={colorPrimaryDark}
      >Society</text> */}
    </svg>
  );
};

Webbee.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Webbee;
