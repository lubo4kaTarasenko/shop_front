import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      '../../sale.png',
  },
  {    
    imgPath:
      '../../free.jpg',
  },
  {
    imgPath:
      '../../gift.jpg',
  
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1500,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 300,
    display: 'block',
    maxWidth: 1500,
    overflow: 'hidden',
    width: '100%',    
  },
}));

function PromotionStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  let key = 0;
  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews className="image_st" axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {tutorialSteps.map((step, index) => (
          <div key={(key += 1)}>{Math.abs(activeStep - index) <= 2 ? <img className={classes.img} src={step.imgPath} alt={step.label} /> : null}</div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className="stepper"
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default PromotionStepper;
