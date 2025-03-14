import { ErrorBoundary } from "@dzcode.io/ui/dist/error-boundary";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FC } from "react";
import svg from "src/assets/svg/404.svg";
import { LinkV2 } from "src/components/link-v2";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
  image: {
    marginTop: theme.spacing(4),
    width: "80%",
    maxWidth: "600px",
  },
  text: {
    padding: theme.spacing(4),
  },
}));

const NotFound: FC = () => {
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <div className={classes.root}>
        <img className={classes.image} src={svg} alt="DzCode i/o: 404 page not found" />
        <Typography className={classes.text}>
          Finally someone saw the 404 page that{" "}
          <LinkV2 href="https://github.com/NurElHuda">Nour</LinkV2> developed 😅
        </Typography>
        <LinkV2 href="/">
          <Button startIcon={<ArrowBackIcon />} size="large">
            Go Back Home
          </Button>
        </LinkV2>
      </div>
    </ErrorBoundary>
  );
};

export default NotFound;
