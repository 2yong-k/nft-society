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

export default function Games() {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  useReload();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <BannerContainer>Games</BannerContainer>
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
            title="Alien Worlds"
            src="https://dashboard-assets.dappradar.com/document/5314/alienworlds-dapp-games-wax-logo-166x166_15c50909678e70f765b11dda14fc5e1e.png"
            url="https://alienworlds.io/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website"
            twitter="http://twitter.com/alienworlds"
            discord="https://discord.gg/alienworlds"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Splinterlands"
            src="https://dashboard-assets.dappradar.com/document/3803/splinterlands-dapp-games-hive-logo-166x166_f0d0aff6d57ee5a24c2c49fd048ec2d2.png"
            url="https://splinterlands.com/"
            twitter="https://twitter.com/splinterlands"
            discord="https://discord.gg/CAFJRjY"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Farmers World"
            src="https://dashboard-assets.dappradar.com/document/8430/farmersworld-dapp-games-wax-logo-166x166_52d0d3b38e00b215ecd58e8a2c1eb4c0.png"
            url="https://farmersworld.io/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website"
            twitter="https://twitter.com/FarmersWorldNFT"
            discord="https://discord.gg/V2pdyGdB9V"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Era7: Game of Truth"
            src="https://dashboard-assets.dappradar.com/document/15631/era7gameoftruth-dapp-games-bsc-logo-166x166_f1287778f41124d18f0651caf0bc2fd5.png"
            url="https://www.era7.io/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website#/"
            twitter="https://twitter.com/Era7_official"
            discord="https://discord.com/invite/jtFRzTv5Zw"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="X World Games"
            src="https://dashboard-assets.dappradar.com/document/7071/xworldgames-dapp-games-bsc-logo-166x166_f1ac22a52c9169700611bdf840349dd6.png"
            url="https://xwg.games/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website#/"
            twitter="https://twitter.com/xwg_games"
            discord="https://discord.gg/d2QTuamvdh"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Upland"
            src="https://dashboard-assets.dappradar.com/document/3388/upland-games-eos-logo-166x166_3be743cc560e66eb74da926c7cec5bd0.png"
            url="https://www.upland.me/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website"
            twitter="https://twitter.com/UplandMe"
            discord="https://discover.upland.me/discord"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Benji Bananas"
            src="https://dashboard-assets.dappradar.com/document/14556/benjibananas-dapp-games-ethereum-logo-166x166_fa763ab6606520786d95367470362ead.png"
            url="https://benjibananas.com/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website"
            twitter="https://twitter.com/BenjiBananas"
            discord="https://animocabrands.medium.com/"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="Trickshot Blitz"
            src="https://dashboard-assets.dappradar.com/document/18031/trickshotblitz-dapp-games-flow-logo-166x166_c97f23568ad1104ad71be037ae4c1f30.png"
            url="https://www.onjoyride.com/games/trickshot-blitz?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website"
            twitter="https://twitter.com/onjoyride/"
            discord="http://discord.gg/joyride"
          >
            Hello{" "}
          </CardByToggle>
        </Container>
      </Box>
    </Box>
  );
}
