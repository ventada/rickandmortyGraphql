import React, { FC, useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import BasicCard from "./mui/Card";
import { Grid } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

type characterType = {
  name: string;
  id: number;
  image: string;
  status: string;
};
interface characterProps {
  character: characterType;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#4dabf5",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Character: FC<characterProps> = ({ character }): JSX.Element => {
  const RICK_QUERY = gql`
    {
      character(id: ${character.id}) {
        name
        species
        status
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  `;
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [getCharacter, { loading, data }] = useLazyQuery(RICK_QUERY);

  return (
    <>
      <Grid item xs={6} md={4}>
        <BasicCard
          character={character}
          getCharacter={getCharacter}
          handleOpen={handleOpen}
        />
      </Grid>

      {data && open ? (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {data.character.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Location :{data.character.location.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                origin :{data.character.origin.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                species :{data.character.species}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                status :{data.character.status}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                gender :{data.character.gender}
              </Typography>
              <Box
                aria-describedby="modal-modal-description"
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt={character.name}
                src={data.character.image}
              />
            </Box>
          </Modal>
        </div>
      ) : null}
    </>
  );
};
export default Character;
