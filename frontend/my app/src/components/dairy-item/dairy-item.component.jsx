import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { StyledCard, StyledCardActions } from "./dairy-item.style";

const DairyItem = ({ post }) => {
  const { title, description, image, location, date } = post;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month},${day},${year}`;
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            sx={{ bgcolor: "#FFD93D", color: "black" }}
          >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <EditLocationAltIcon sx={{ color: "#73A9AD" }} />
          </IconButton>
        }
        title={location}
        subheader={formatDate(date)}
      />
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={location}
      />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <StyledCardActions style={{ textAlign: "right" }}>
        <IconButton className="editButton">
          <ModeEditOutlineIcon />
        </IconButton>
        <IconButton className="deleteButton">
          <DeleteIcon />
        </IconButton>
      </StyledCardActions>
    </StyledCard>
  );
};

export default DairyItem;
