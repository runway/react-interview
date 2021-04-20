import { ChakraProvider, Heading } from '@chakra-ui/react';
import React from 'react';

import Spreadsheet from 'components/Spreadsheet';

const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS>
      <Heading marginBottom="2rem">Spreadsheet</Heading>
      <Spreadsheet />
    </ChakraProvider>
  );
};

export default App;
