import styled from "styled-components";

const Button = styled.button`
  color: orange;
  font-size: 20px;
  text-decoration: none;
`;

function SearchResults({ data, isLoading, isError }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...!</div>;
  }

  if (data.hits.length === 0) {
    return <div>No Data...!</div>;
  }

  return (
    <div>
      {data.hits.map(({ url, title, author, created_at, points, objectID }) => (
        <div key={objectID}>
          <Button as="a" href={url}>
            {title}
          </Button>
          <li>작가: {author}</li>
          <li>작성일: {created_at}</li>
          <li>추천수: {points}</li>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
