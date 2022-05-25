import React from 'react';
import {Screen} from 'ui';
import {QuoteWidget} from './quote-widget';
import {WorkoutWidget} from './workout-widget';

const Home = () => {
  return (
    <Screen>
      <QuoteWidget />
      <WorkoutWidget />
    </Screen>
  );
};

export {Home};
