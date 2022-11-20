import styled from "styled-components";
import { toast } from "react-toastify";
import kaikasImageUrl from "./image/Kaikas.png";
import metamaskImageUrl from "./image/MetaMask.png";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CustomModal from "./modal/customModal";
import { useState, useEffect } from "react";

const AddressCont = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  min-width: 180px;
  padding: 10px 0;
  margin: 0 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #44ff00;
  border: 2px solid #26dc06;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
`;

const ConnectWalletCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ff8000;
  box-sizing: border-box;
  width: 180px;
  min-height: 50px;
  border-radius: 5px;
  font-size: 1.2rem;
  color: white;
  border: none;
  outline: none;
  margin: 10px 20px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
  :hover,
  :focus {
    box-shadow: 3px 1px 3px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  object-fit: contain;
`;

const klaytn = window.klaytn;
const ethereum = window.ethereum;

function formatAddress(address) {
  if (address) {
    const add1 = address.substring(0, 4);
    const add2 = address.substring(address.length - 4);
    const finalAddress = `${add1}...${add2}`;
    return finalAddress;
  }
}

export default function Wallet() {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [showDisconnectWallet, setShowDisconnectWallet] = useState(false);
  const [account, setAccount] = useState("");
  const [walletType, setWalletType] = useState("");

  // 유저 정보와 지갑 정보 받아오기
  useEffect(() => {
    setAccount(localStorage.getItem("_user"));
    setWalletType(localStorage.getItem("_wallet"));
  }, []);

  async function loginWithMetamask() {
    if (!ethereum) {
      toast.error("metamask 설치 필요", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    try {
      const accounts = await toast.promise(
        ethereum.request({
          method: "eth_requestAccounts",
        }),
        {
          pending: "Metamask 지갑 연동 중",
        },
        { closeButton: true }
      );
      setAccount(accounts[0]);
      setWalletType("eth");
      localStorage.setItem("_user", accounts[0]);
      localStorage.setItem("_wallet", "eth");
      toast.success(`${formatAddress(accounts[0])}님 환영합니다.`);
    } catch {
      toast.error("로그인 실패. 다시 시도해주세요.");
    }
  }

  async function loginWithKaikas() {
    if (!klaytn) {
      toast.error("Kaikas 설치 필요", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    try {
      const accounts = await toast.promise(
        klaytn.enable(),
        {
          pending: "Kaikas 지갑 연동 중",
        },
        { closeButton: true }
      );
      setAccount(accounts[0]);
      setWalletType("klaytn");
      localStorage.setItem("_user", accounts[0]);
      localStorage.setItem("_wallet", "klaytn");
      toast.success(`${formatAddress(accounts[0])}님 환영합니다.`);
    } catch {
      toast.error("로그인 실패. 다시 시도해주세요.");
    }
  }

  function handleMetamaskLogin() {
    loginWithMetamask();
    setShowWalletOptions(false);
    window.location.reload();
  }

  function handleKaikasLogin() {
    loginWithKaikas();
    setShowWalletOptions(false);
    window.location.reload();
  }

  function handleDisconnect() {
    toast.warn("로그아웃 되었습니다.");
    setAccount("");
    setWalletType("");
    localStorage.removeItem("_user");
    localStorage.removeItem("_wallet");
    setShowDisconnectWallet(false);
    window.location.reload();
  }

  return (
    <ConnectWalletCont>
      {account ? (
        <AddressCont onClick={() => setShowDisconnectWallet(true)}>
          {formatAddress(account)}
        </AddressCont>
      ) : (
        <StyledButton onClick={() => setShowWalletOptions(true)}>
          <AccountBalanceWalletIcon />
          Connect wallet
        </StyledButton>
      )}

      <CustomModal
        show={showWalletOptions}
        toggleModal={() => setShowWalletOptions(false)}
      >
        <StyledButton onClick={() => handleMetamaskLogin()}>
          <ImageWrapper src={metamaskImageUrl} />
          Metamask
        </StyledButton>
        <StyledButton onClick={() => handleKaikasLogin()}>
          <ImageWrapper src={kaikasImageUrl} />
          Kaikas
        </StyledButton>
      </CustomModal>

      <CustomModal
        show={showDisconnectWallet}
        toggleModal={() => setShowDisconnectWallet(false)}
      >
        {account}
        <StyledButton
          onClick={() => {
            handleDisconnect();
          }}
        >
          <AccountBalanceWalletIcon />
          Disconnect
        </StyledButton>
      </CustomModal>
    </ConnectWalletCont>
  );
}
