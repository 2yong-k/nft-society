import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

const TextFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function HackerNews() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function getApiUrl(q) {
    return `https://hn.algolia.com/api/v1/search?query=${q}`;
  }

  useEffect(() => {
    let ignore = false;
    async function fetchData(q) {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(getApiUrl(q));
        if (!ignore) {
          setData(result.data);
          setIsLoading(false);
        }
      } catch {
        if (!ignore) {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    fetchData(query);

    return () => {
      ignore = true;
    };
  }, [query]);

  return (
    <div>
      <HeaderContainer>
        <h1>News</h1>
      </HeaderContainer>
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
      <div>
        <SearchResults data={data} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
}

export default HackerNews;
