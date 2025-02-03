import '@mantine/core/styles.css';

import { AppShell, MantineProvider } from '@mantine/core';
import { MainAppShell } from './components/MainAppShell/MainAppShell';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <MainAppShell links={['Messages', 'Contacts']}>
        <Router />
      </MainAppShell>
    </MantineProvider>
  );
}
