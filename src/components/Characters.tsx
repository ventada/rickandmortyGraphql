import React, { useState, useEffect, FC } from "react";
import { useQuery, gql } from "@apollo/client";
import CharacterSingualr from "./CharacterSingualr";
import { Grid } from "@mui/material";

interface querieProps {
  page: number;
}
const Characters: FC<querieProps> = (props): JSX.Element => {
  const RICK_QUERY = gql`
    {
      characters(page: ${props.page}) {
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
  const { data, loading, error } = useQuery(RICK_QUERY);

  if (loading) return <h1>Loading</h1>;
  if (error) return <pre>{error.message}</pre>;
  return (
    <div>
      <ul>
        <Grid container spacing={2}>
          {data ? (
            data.characters.results.map((c: any) => (
              <CharacterSingualr character={c} />
            ))
          ) : (
            <h1>noting found</h1>
          )}
        </Grid>
      </ul>
    </div>
  );
};

export default Characters;
