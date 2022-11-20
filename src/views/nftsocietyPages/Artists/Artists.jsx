import useReload from "../hooks/useReload";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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

const CardByToggle = ({ title, src, url, children }) => {
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
      </FieldWrapper>
      {isOpened && <ContentsWrapper>{children}</ContentsWrapper>}
    </FieldContainer>
  );
};
export default function Artists() {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  useReload();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={"relative"}>
        <Container position="relative" zIndex={2}>
          <BannerContainer>Artists</BannerContainer>
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
            title="PAK"
            src="https://ipfs.pixura.io/ipfs/QmRkB68izrj1yEubz9Nessk64gAezb7MJRc95MyTKVVTrA"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="BEEPLE"
            src="https://ipfs.pixura.io/ipfs/Qmboe5yPUbsh8H3ksJrpA4AZoUZQcySwgZtrPUXMSAgbB7/PROFILE%20PIC-square.jpg"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="MICAH_JOHNSON"
            src="https://ipfs.pixura.io/ipfs/QmcZxdBYrp1nmcPEPFp91nu6F4jCaZ1NZU7tYCdkPr6b8M/AKU6.jpg"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="XCOPY"
            src="https://ipfs.pixura.io/ipfs/Qmejz9e5EYQWo9n85XH3qtRwppgyyqBqVQRhxKgdKV7pW6"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="TYLERXHOBBS"
            src="https://services.tzkt.io/v1/avatars2/tz1fQTvvcCy5PTt8HcUSQTu64dH9mJjjDudi"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="DMITRICHERNIAK"
            src="https://ipfs.pixura.io/ipfs/QmQ9ba6eCuLAhmkEg8Gzj4jZmLvEVR7zb7fnTxpE2Ac8e6/KibOrEke_400x400-1.png"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="HACKATAO"
            src="https://ipfs.pixura.io/ipfs/Qmaa3zK1QsNYZjjxxVrg6HSvyvY3T1LVeMPdYSXpcqKBmz/Warhol.gif"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="FEWOCIOUS"
            src="https://ipfs.pixura.io/ipfs/Qma8212nPGb5Z2LDG7qpwkqKaAXmS6dbshMhYtL4DgiEFf/icon-wif-bg.png"
          >
            Hello{" "}
          </CardByToggle>
          <CardByToggle
            initialOpen
            title="TREVORJONESART"
            src="https://ipfs.pixura.io/ipfs/QmazrwHJ4SpWq1keJ9Ajp7GXQMk6V1QUwgYwsNiNes8rbD/4N4TLmjZ_400x400.jpg"
          >
            Hello{" "}
          </CardByToggle>
        </Container>
      </Box>
    </Box>
  );
}
