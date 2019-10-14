import React from 'react';

import { RootAppNavigator } from '../navigators';
import Container from './HOC/Container';

const AppView = () => {
  return (
    <Container>
      <RootAppNavigator />
    </Container>
  );
};

export default AppView;
