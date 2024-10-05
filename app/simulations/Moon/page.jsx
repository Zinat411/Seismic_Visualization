'use client';

import MoonSpace from '@/components/MoonSpace';
import { DataContextProvider } from '@/contexts/DataContext';

const SimulationPage = () => {
  return (
    <DataContextProvider>
      <MoonSpace />
    </DataContextProvider>
  );
};

export default SimulationPage;
