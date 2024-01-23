/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import RootNav from '@app/navigation/RootNavigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import '@app/styles/unistyles';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <RootNav />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
