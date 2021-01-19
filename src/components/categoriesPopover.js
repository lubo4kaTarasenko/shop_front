import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {ArrowRight } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function CategoriesPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <Button aria-describedby={id}  onClick={handleClick}
      style={{float: 'right', marginTop: '10px'}}>
       <ArrowRight/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          {props.category.subcategories.map(sc =>
              <div key={sc.name} style={{color: 'darkblue', cursor: 'pointer'}}>
                {sc}
                <hr/>
              </div>           
            )}
        </Typography>
      </Popover>
    </div>
  );
}
