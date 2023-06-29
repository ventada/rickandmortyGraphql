import React, { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type characterType = {
  name: string;
  id: number;
  image: string;
  status: string;
};
interface characterProps {
  character: characterType;
  getCharacter: Function;
  handleOpen: Function;
}

const BasicCard: FC<characterProps> = ({
  character,
  getCharacter,
  handleOpen,
}): React.JSX.Element => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {character.name}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {character.status}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={character.name}
          src={character.image}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => getCharacter() && handleOpen()}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
