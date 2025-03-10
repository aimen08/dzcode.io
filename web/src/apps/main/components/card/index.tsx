import Button from "@material-ui/core/Button";
import MuiCard from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import { FC } from "react";
import { LinkV2 } from "src/components/link-v2";

interface CardInfo {
  image: string;
  title: string;
  description: string;
  link?: string;
  actionLabel: string;
}

interface CardProps {
  info?: CardInfo;
}

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1",
  },
  media: {
    height: 200,
  },
  link: {
    color: theme.palette.primary.dark,
  },
}));

export const Card: FC<CardProps> = ({ info }) => {
  const classes = useStyles();
  return (
    <MuiCard className={classes.root} variant="outlined">
      {info ? (
        <>
          <CardMedia className={classes.media} image={info.image} title={info.title} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h6">
              {info.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {info.description}
            </Typography>
          </CardContent>
          <CardActions>
            <LinkV2 href={info.link}>
              <Button size="small" color="primary">
                {info.actionLabel}
              </Button>
            </LinkV2>
          </CardActions>
        </>
      ) : (
        <CardActionArea>
          <Skeleton animation="wave" variant="rect" className={classes.media} />
          <CardContent>
            <>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
            </>
          </CardContent>
        </CardActionArea>
      )}
    </MuiCard>
  );
};
