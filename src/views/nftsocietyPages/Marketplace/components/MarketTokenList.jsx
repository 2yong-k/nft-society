import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import KlaytnLogo from "../assets/Klaytn.png";
import EtherLogo from "../assets/Ethereum.png";
import { MarketSimpleABI } from "../../abi/MarketABI";
import { GOERLI_MARKET, CYPRESS_MARKET } from "../../api/config";

const DesContianer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  color: gray;
`;
const PriceContianer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;
const PriceLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
`;

export default function MarketTokenList({
  web3,
  caver,
  tokenURI,
  tokenPrice,
  tokenId,
  tokenName,
  tokenDes,
  tokenImage,
}) {
  const [account, setAccount] = useState("");
  const [walletType, setWalletType] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setAccount(localStorage.getItem("_user"));
    setWalletType(localStorage.getItem("_wallet"));
  }, []);

  async function buyToken() {
    let tokenContract;
    let tokenValue;

    if (walletType === "eth") {
      tokenContract = await new web3.eth.Contract(
        MarketSimpleABI,
        GOERLI_MARKET,
        {
          from: account,
        }
      );
      tokenContract.options.address = GOERLI_MARKET;
      tokenValue = await tokenContract.methods.getNftTokenPrice(tokenId).call();
      await tokenContract.methods
        .buyNftToken(tokenId)
        .send({ from: account, value: String(tokenValue) });
    } else if (walletType === "klaytn") {
      tokenContract = await new caver.klay.Contract(
        MarketSimpleABI,
        CYPRESS_MARKET,
        { from: account }
      );
      tokenContract.options.address = CYPRESS_MARKET;
      tokenValue = await tokenContract.methods.getNftTokenPrice(tokenId).call();
      await tokenContract.methods
        .buyNftToken(tokenId)
        .send({ from: account, gas: 0xf4240, value: String(tokenValue) });
    } else {
      return;
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      {console.log(tokenImage)}
      <div key={tokenId}>
        <CardMedia
          component="img"
          height="300"
          image={tokenImage}
          alt={tokenId}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {tokenName}
          </Typography>
          <DesContianer>{tokenDes}</DesContianer>
          <PriceContianer>
            {walletType === "eth" ? (
              <PriceLogo src={EtherLogo} />
            ) : (
              <PriceLogo src={KlaytnLogo} />
            )}
            {tokenPrice}
          </PriceContianer>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleOpen}>
            BUY
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                pt: 2,
                px: 4,
                pb: 3,
              }}
            >
              <h2 id="parent-modal-title">NFT??? ?????????????????????????</h2>
              <PriceContianer>
                {walletType === "eth" ? (
                  <PriceLogo src={EtherLogo} />
                ) : (
                  <PriceLogo src={KlaytnLogo} />
                )}
                {tokenPrice}
              </PriceContianer>

              <Stack direction="row" spacing={2} mt={2}>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleClose();
                    buyToken();
                  }}
                >
                  YES
                </Button>
                <Button variant="outlined" onClick={handleClose}>
                  CANCEL
                </Button>
              </Stack>
            </Box>
          </Modal>
        </CardActions>
      </div>
    </Card>
  );
}
