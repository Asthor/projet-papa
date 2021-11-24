import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, optionsFruits, defaultValues } from './validator';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';
import { enregistrerEvenement1 } from '../../api/evenements';

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function Evenement1() {
  const [activeStep, setActiveStep] = useState(0);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    setActiveStep(activeStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const steps = getSteps();

  return (
    <form onSubmit={handleSubmit(enregistrerEvenement1)}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const props = {};
          const labelProps = {};
          labelProps.icon = (
            <div
              style={{
                backgroundColor: 'orange',
                width: '11px',
                padding: '2px',
                textAlign: 'center',
                height: '11px',
                fontSize: '10px',
                borderRadius: '50%',
              }}
            >
              {index}
            </div>
          );
          return (
            <Step key={label} {...props}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed - you&quot;re finished</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
      <Input name="firstName" control={control} errors={errors} />
      <p />
      <Input name="lastname" control={control} errors={errors} />
      <p />
      <Select
        name="fruit"
        control={control}
        errors={errors}
        options={optionsFruits}
      />
      <p />
      <Checkbox name="checkbox" control={control} errors={errors} />
      <p />
      <input type="submit" />
    </form>
  );
}
