'use client';

import MarsSpace from '@/components/MarsSpace';
import { DataContextProvider } from '@/contexts/DataContext';

const SimulationPage = () => {
  return (
    <DataContextProvider>
      <MarsSpace />
    </DataContextProvider>
  );
};

export default SimulationPage;
