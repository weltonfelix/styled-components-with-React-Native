import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Card } from './src/components';
import { stylertTheme } from './src/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
      <SafeAreaView>
        <View>
          <ThemeProvider theme={stylertTheme}>
            <Card amount="R$ 100,00" status="OPEN" />
            <Card amount="R$ 50,00" status="LATE" />
            <Card amount="R$ 100,00" status="PAID" />
            <Card amount="R$ 50,00" status="REVERTED" />
          </ThemeProvider>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
