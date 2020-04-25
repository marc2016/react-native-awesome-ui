/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  AwesomeHeader,
  AwesomeDotButton,
  AwesomeButton,
} from 'react-native-awesome-ui';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <AwesomeHeader
            subtitle="Ihre Dokumente auf einen Blick"
            title="Postkorb"
            iconId="mail-bulk"
            iconColor="white"
            backgroundColor="#2D91E8"
            textColor="white"
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <AwesomeDotButton
              dotColor="#2D91E8"
              iconId="mail-bulk"
              iconColor="white"
              title="Krankenschein hochladen"
            />
            <AwesomeDotButton
              dotColor="#2D91E8"
              iconId="user-tie"
              iconColor="white"
              title="Kontakt"
            />
          </View>
          <View style={{marginHorizontal: 20, justifyContent: 'space-between'}}>
            <AwesomeButton
              style={{marginBottom: 20, marginTop: 20, width: 'auto'}}
              buttonColor="#2D91E8"
              dotColor="#B8B8B8"
              iconId="chevron-right"
              iconColor="white"
              textColor="white"
              title="Next"
            />
            <AwesomeButton
              buttonColor="#2D91E8"
              dotColor="#B8B8B8"
              iconId="trash-alt"
              iconColor="white"
              textColor="white"
              title="Delete"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
