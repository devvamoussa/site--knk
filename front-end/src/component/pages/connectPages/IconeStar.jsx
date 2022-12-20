import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels: { [index: String]: String } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center"
  },
  'icon-1': { color: 'red' },
  'icon-2': { color: 'coral' },
  'icon-3': { color: 'orange' },
  'icon-4': { color: 'skyblue' },
  'icon-5': { color: 'green' }
});

export default function HoverRating() {
  const [value, setValue] = React.useState<Number | null>(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        classes={{
          iconHover: classes[`icon-${Math.ceil(hover)}`]
        }}
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<FiberManualRecordIcon fontSize="inherit" />}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}