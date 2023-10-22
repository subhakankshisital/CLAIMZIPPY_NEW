

import * as React from 'react';

import Box from '@mui/material/Box';

import Stepper from '@mui/material/Stepper';

import Step from '@mui/material/Step';

import StepButton from '@mui/material/StepButton';

 

const steps = [

  'Provider Details ',

   'Advance Tariff'

  ];

 

function AdvStep() {

  const [activeStep, setActiveStep] = React.useState();

  const [completed, setCompleted] = React.useState({});

 

  const totalSteps = () => {

    return steps.length;

  };

 

  const completedSteps = () => {

    return Object.keys(completed).length;

  };
 

 

  const handleStep = (step) => () => {

    setActiveStep(step);

  };

 

 

 

  return (

   <>

    <Box sx={{ width: '100%' }}>

      <Stepper className="mx-auto w-full"  nonLinear activeStep={activeStep} alternativeLabel>

        {steps.map((label, index1) => (

          <Step key={label} completed={completed[index1]}>

            <StepButton  color="inherit" onClick={handleStep(index1)}

         

            >

              {label}

            </StepButton>

           

          </Step>

        ))}

      </Stepper>

     

    </Box>

   </>

  );

}

 

export default AdvStep;

 