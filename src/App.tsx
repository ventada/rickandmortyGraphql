import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Characters from "./components/Characters";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { store } from "./redux/";
import { Provider } from "react-redux";
const RICK_QUERY = gql`
  {
    characters(page: 1) {
      info {
        count
        next
      }
      results {
        id
        name
        status

        image
        location {
          name
        }
        species
      }
    }
  }
`;

//TODO
// add redux first
// one global state that contains the selscted card
// and show that card in the bottom of page
export default function App() {
  const [page, setPage] = useState(1);

  const changPage = (action: string) => {
    switch (action) {
      case "pre":
        if (page === 1) break;
        setPage((state) => state - 1);
        break;
      case "next":
        setPage((state) => state + 1);

        break;

      default:
        break;
    }
  };
  return (
    <Provider store={store}>
      <Container sx={{ width: "100vw", height: "100vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Rick and morty
        </h1>
        <Characters page={page} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            padding: "15px 5px",
          }}
        >
          <Button variant="contained" onClick={() => changPage("pre")}>
            pre
          </Button>
          <p>{page}</p>
          <Button variant="contained" onClick={() => changPage("next")}>
            next
          </Button>
        </div>
      </Container>
    </Provider>
  );
}
