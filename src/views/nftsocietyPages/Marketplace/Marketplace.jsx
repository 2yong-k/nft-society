import useReload from "../hooks/useReload";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import StoreIcon from "@mui/icons-material/Store";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "../../../common/Container";
import { useState, useEffect } from "react";
import Web3 from "web3";
import Caver from "caver-js";
import styled from "styled-components";
import Market from "./components/Market";
import MyNFT from "./components/MyNFT";
import Create from "./components/Create";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 20px;
  gap: 20px;
`;
const MintWrapper = styled.div`
  margin: 20px;
`;

const klaytn = window.klaytn;
const ethereum = window.ethereum;

function Marketplace() {
  const theme = useTheme();
  const [tab, setTab] = useState("MARKET");
  useReload();
  const [web3, setWeb3] = useState({});
  const [caver, setCaver] = useState({});

  // 시작 시 메타마스크 또는 카이카스와 연결이 되어있는 지 확인하고 객체를 생성.
  useEffect(() => {
    if (typeof ethereum !== "undefined") {
      try {
        const web3 = new Web3(ethereum);
        setWeb3(web3);
      } catch (err) {
        console.log(err);
      }
    }
    if (typeof klaytn !== "undefined") {
      try {
        const caver = new Caver(klaytn);
        setCaver(caver);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <BottomNavigation
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            showLabels
            value={tab}
            onChange={(event, newTab) => {
              setTab(newTab);
            }}
          >
            <BottomNavigationAction
              label="Market"
              value="MARKET"
              icon={<StoreIcon />}
            />
            <BottomNavigationAction
              label="Create"
              value="CREATE"
              icon={<AddCircleIcon />}
            />
            <BottomNavigationAction
              label="MyNFT"
              value="MYNFT"
              icon={<AccountCircleIcon />}
            />
          </BottomNavigation>
          <Box>
            {tab === "MARKET" ? (
              <GridWrapper>
                <Market web3={web3} caver={caver} />
              </GridWrapper>
            ) : null}

            {tab === "CREATE" ? (
              <MintWrapper>
                <Create web3={web3} caver={caver} />
              </MintWrapper>
            ) : null}

            {tab === "MYNFT" ? (
              <GridWrapper>
                <MyNFT web3={web3} caver={caver} />
              </GridWrapper>
            ) : null}
          </Box>
        </Container>
      </Box>
      <Box></Box>
    </Box>
  );
}

Marketplace.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Marketplace;
