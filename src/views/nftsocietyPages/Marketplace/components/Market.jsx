import axios from "axios";
import { useState, useEffect } from "react";
import { MarketSimpleABI } from "../../abi/MarketABI";
import { GOERLI_MARKET, CYPRESS_MARKET } from "../../api/config";
import MarketTokenList from "./MarketTokenList";

export default function Market({ web3, caver }) {
  const [account, setAccount] = useState("");
  const [walletType, setWalletType] = useState("");
  const [nftList, setNftList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setAccount(localStorage.getItem("_user"));
    setWalletType(localStorage.getItem("_wallet"));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    async function saveMarketToken() {
      let tokenContract;
      if (walletType === "eth") {
        tokenContract = await new web3.eth.Contract(MarketSimpleABI, GOERLI_MARKET);
      } else if (walletType === "klaytn") {
        tokenContract = await new caver.klay.Contract(
          MarketSimpleABI,
          CYPRESS_MARKET
        );
      } else return;

      const MarketTokens = await tokenContract.methods.getSaleNftTokens().call();
      const items = await Promise.all(
        MarketTokens.map(async (i) => {
          let metadata = await axios.get(i.nftTokenURI);
          let price;
          if (walletType === "eth") {
            price = web3.utils.fromWei(i.price.toString(), "ether");
          } else if (walletType === "klaytn") {
            price = caver.utils.convertFromPeb(i.price.toString(), "KLAY");
          } else return;
          let item = {
            tokenURI: i.nftTokenURI,
            tokenPrice: price,
            tokenId: Number(i.nftTokenId),
            tokenName: metadata.data.name,
            tokenDes: metadata.data.description,
            tokenImage: metadata.data.image,
          };
          return item;
        })
      );
      setNftList(items);
      setIsLoading(false);
    }
    saveMarketToken();
  }, [account]);

  return (
    <>
      {console.log(nftList)}
      {nftList.map((token) => {
        return (
          <MarketTokenList
            web3={web3}
            caver={caver}
            tokenURI={token.tokenURI}
            tokenPrice={token.tokenPrice}
            tokenId={token.tokenId}
            tokenName={token.tokenName}
            tokenDes={token.tokenDescription}
            tokenImage={token.tokenImage}
          />
        );
      })}
    </>
  );
}
