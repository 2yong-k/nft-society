import { useState, useEffect, useRef } from "react";
import { MarketSimpleABI } from "../../abi/MarketABI";
import { GOERLI_MARKET, CYPRESS_MARKET, NFTStorageAPI } from "../../api/config";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ImageIcon from "@mui/icons-material/Image";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import { NFTStorage, Blob } from "nft.storage";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CreateContainer = styled.div`
  position: unset;
  width: 65%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-items: center;
  margin: 40px 0;
`;
const Require = styled.span`
  color: crimson;
  font-size: 16px;
`;
const ContentFont = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const LabelBox = styled.label`
  display: flex;
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: center;
  padding: 1em 1em;
  color: #999;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
  border-radius: 12px;

  &:hover {
    background-color: #e2e2e2;
  }
`;
const ImgBox = styled.img`
  display: flex;
  width: 300px;
  height: 300px;
  padding: 0.5em 0.5em;
  border-radius: 12px;
`;
const InputBox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const ContentValue = styled.div`
  font-size: 18px;
  font-weight: 300;
`;
const WarningValue = styled.div`
  color: "#b91528";
  font-weight: 600;
`;
const CompletedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  font-weight: 600;
  font-size: 34px;
`;
// const PriceLogo = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 25px;
//   height: 25px;
// `;

export default function Create({ web3, caver }) {
  const [account, setAccount] = useState("");
  const [walletType, setWalletType] = useState("");

  const [imageFile, setImageFile] = useState(null); // nftImage URL 저장
  const [tokenUri, setTokenUri] = useState(""); // token의 URI 저장
  const [nftImage, setNftImage] = useState(null); // Image 경로 저장
  const [nftName, setNftName] = useState(""); // Image 이름 저장
  const [nftDesc, setNftDesc] = useState(""); // Image 본문 저장

  const [isMint, setIsMint] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const client = new NFTStorage({ token: NFTStorageAPI });

  useEffect(() => {
    setAccount(localStorage.getItem("_user"));
    setWalletType(localStorage.getItem("_wallet"));
  }, []);

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) createNewNFT();
    else didMount.current = true;
  }, [tokenUri]);

  const createURI = async () => {
    setIsLoading(true);
    try {
      const fileCid = await client.storeBlob(new Blob([nftImage]));
      const obj = {
        name: nftName,
        description: nftDesc,
        image: "https://ipfs.io/ipfs/" + fileCid,
      };
      const metadataCid = await client.storeBlob(
        new Blob([JSON.stringify(obj)])
      );
      setTokenUri("https://ipfs.io/ipfs/" + metadataCid);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const createNewNFT = async () => {
    let tokenContract;
    let newTokenId;

    if (walletType === "eth") {
      tokenContract = await new web3.eth.Contract(
        MarketSimpleABI,
        GOERLI_MARKET,
        {
          from: account,
        }
      );
      tokenContract.options.address = GOERLI_MARKET;
      newTokenId = await tokenContract.methods
        .mintNFT(tokenUri)
        .send({ from: account });
    } else if (walletType === "klaytn") {
      tokenContract = await new caver.klay.Contract(
        MarketSimpleABI,
        CYPRESS_MARKET,
        {
          from: account,
        }
      );
      tokenContract.options.address = CYPRESS_MARKET;
      newTokenId = await tokenContract.methods
        .mintNFT(tokenUri)
        .send({ from: account, gas: 0xf4240 });
    } else {
      return;
    }
    setIsLoading(false);
    setIsMint(true);
  };

  return (
    <Container>
      <CreateContainer>
        <MainContainer>
          <Box mb={2}>
            <h1>Create New Item</h1>
          </Box>
          <Box mb={2}>
            <span>
              <Require>* </Require>
              Required fields
            </span>
          </Box>
          <Box mb={2}>
            <ContentFont>
              Image <Require>*</Require>
            </ContentFont>
            <Box>
              File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
              OGG, GLB, GLTF.
              <br />
              Max size: 100 MB
            </Box>
            <Box>
              <LabelBox for="fileInput">
                {imageFile ? (
                  <ImgBox for="fileInput" src={imageFile} alt="preview image" />
                ) : (
                  <ImageIcon />
                )}
              </LabelBox>
              <InputBox
                type="file"
                name="file"
                onChange={(e) => {
                  setNftImage(e.target.files[0]);
                  setImageFile(URL.createObjectURL(e.target.files[0]));
                }}
                id="fileInput"
              />
            </Box>
          </Box>
          <Box mb={2}>
            <ContentFont>
              Name <Require>*</Require>
            </ContentFont>
            <TextField
              id="outlined-basic"
              label="Item name"
              onChange={(e) => {
                setNftName(e.target.value);
              }}
            />
          </Box>
          <Box mb={2}>
            <ContentFont>Description</ContentFont>
            <TextField
              id="outlined-multiline-static"
              label="Tell us more"
              multiline
              rows={5}
              onChange={(e) => {
                setNftDesc(e.target.value);
              }}
            />
          </Box>
          <Box mb={2}>
            <ContentFont>
              Account <Require>*</Require>
            </ContentFont>
            <ContentValue>
              {account ? (
                account
              ) : (
                <WarningValue>Please connect Account first!!</WarningValue>
              )}
            </ContentValue>
          </Box>
          <Box mb={2}>
            <ContentFont>
              Block Address <Require>*</Require>
            </ContentFont>
            <ContentValue>
              {walletType === "eth" ? (
                GOERLI_MARKET
              ) : walletType === "klaytn" ? (
                CYPRESS_MARKET
              ) : (
                <WarningValue>
                  Please connect Block Address first!!
                </WarningValue>
              )}
            </ContentValue>
          </Box>
          <Box>
            <Button
              variant="contained"
              onClick={() => {
                createURI();
              }}
            >
              Create NFT
            </Button>
          </Box>
          <Box>
            {isMint ? (
              <CompletedContainer>
                <CheckIcon />
                Completed Create!!
              </CompletedContainer>
            ) : isLoading ? (
              <CompletedContainer>Loading...</CompletedContainer>
            ) : (
              ""
            )}
          </Box>
        </MainContainer>
      </CreateContainer>
    </Container>
  );
}
