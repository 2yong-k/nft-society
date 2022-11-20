import useReload from "../hooks/useReload";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FaDiscord } from "react-icons/fa";
import Container from "../../../common/Container";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  font-weight: bold;
  padding-bottom: 50px;
`;
const FieldContainer = styled.div`
  border: 3px solid #6d6d6d;
  border-radius: 30px;
  margin: 20px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: auto;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #dfffb437;
  }
`;
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #1a2138;
  object-fit: contain;
`;
const NameWrapper = styled.div`
  font-size: 30px;
  padding-left: 15px;
`;
const ContentsWrapper = styled.div`
  padding-top: 30px;
  line-height: 150%;
  font-size: 20px;
  padding-left: 10px;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CardByToggle = ({ title, src, url, twitter, discord, children }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <FieldContainer
      onClick={() => {
        setIsOpened((prev) => !prev);
      }}
    >
      <FieldWrapper>
        <TitleWrapper>
          <Thumbnail alt={title} src={src} />
          <NameWrapper>{title}</NameWrapper>
        </TitleWrapper>
        <TitleWrapper>
          <IconButton
            aria-label="Website"
            size="large"
            href={`${url}`}
            target="_blank"
          >
            <LanguageIcon />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            size="large"
            href={`${twitter}`}
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            aria-label="Discord"
            size="large"
            href={`${discord}`}
            target="_blank"
          >
            <FaDiscord />
          </IconButton>
        </TitleWrapper>
      </FieldWrapper>
      {isOpened && <ContentsWrapper>{children}</ContentsWrapper>}
    </FieldContainer>
  );
};

export default function Projects() {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  useReload();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <BannerContainer>Projects</BannerContainer>
          <TextFieldContainer>
            <TextField
              margin="normal"
              id="outlined-search"
              label="Search field"
              type="search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
            />
          </TextFieldContainer>
          <CardByToggle
            initialOpen
            title="Bored Ape Yacht Club"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png"
            url="https://boredapeyachtclub.com/#/"
            twitter="https://www.twitter.com/BoredApeYC"
            discord="https://discord.gg/3P5K3dzgdB"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Genuine Undead"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x209e639a0ec166ac7a1a4ba41968fa967db30221.png"
            url="https://www.genuineundead.com/"
            twitter="https://www.twitter.com/GenuineUndead"
            discord="https://discord.gg/genuineundead"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Azuki"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e.png"
            url="https://www.azuki.com/"
            twitter="https://www.twitter.com/azukiofficial"
            discord="https://discord.gg/azuki"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Boki"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x248139afb8d3a2e16154fbe4fb528a3a214fd8e7.png"
            url="https://www.boki.art/"
            twitter="https://www.twitter.com/BokiNFT"
            discord="https://discord.gg/boki"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Moonbirds"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x23581767a106ae21c074b2276d25e5c3e136a68b.png"
            url="https://www.moonbirds.xyz/"
            twitter="https://www.twitter.com/moonbirds"
            discord="https://discord.gg/proof"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Nyolings"
            src="https://i.seadn.io/gcs/files/26c3a14f0f9f2cbe6080d932a09870d0.png"
            url="https://www.nyolings.io/"
            twitter="https://www.twitter.com/Nyolings"
            discord="https://discord.gg/nyolings"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Bored Ape Kennel Club"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623.png"
            url="https://boredapeyachtclub.com/#/kennel-club"
            twitter="https://www.twitter.com/boredapeyc"
            discord="https://discord.gg/wjH7hGz2yS"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Kitaro World Official"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x7df64f69544c5bf71171dc5ab69b8602c2ff1e27.gif"
            url="https://www.kitaro.world/"
            twitter="https://www.twitter.com/KitaroNFT"
            discord="https://discord.gg/kitaro"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Pudgy Penguins"
            src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0xbd3531da5cf5857e7cfaa92426877b022e612cf8.png"
            url="https://www.pudgypenguins.com/"
            twitter="https://www.twitter.com/pudgypenguins"
            discord="https://discord.gg/pudgypenguins"
          >
            Hello{" "}
          </CardByToggle>
        </Container>
      </Box>
    </Box>
  );
}
