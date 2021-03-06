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
  AwesomeCard,
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
            subtitle="Your messages in one view"
            title="Mailbox"
            iconId="mail-bulk"
            iconColor="white"
            backgroundColors={['#2D91E8', '#39648a']}
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
              dotColors={['#2D91E8', '#39648a']}
              iconId="mail-bulk"
              iconColor="white"
              title="Mailbox"
            />
            <AwesomeDotButton
              dotColors={['#2D91E8', '#39648a']}
              iconId="user-tie"
              iconColor="white"
              title="Contact"
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
          <AwesomeCard
            title="New message"
            outlineOnly
            iconId="envelope"
            iconColor="#2D91E8"
            textColor="#2D91E8"
            cardColors={['#2D91E8', '#39648a']}
            buttonDirection="column"
            buttons={[
              {
                iconId: 'trash-alt',
                onPress: () => {
                  console.log('Test');
                },
              },
              {
                iconId: 'arrow-circle-right',
                onPress: () => {
                  console.log('Test');
                },
              },
            ]}
            style={{margin: 20}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </AwesomeCard>
          <AwesomeCard
            title="New message"
            iconId="envelope"
            iconColor="white"
            textColor="white"
            cardColors={['#2D91E8', '#39648a']}
            buttonDirection="column"
            buttons={[
              {
                iconId: 'trash-alt',
                onPress: () => {
                  console.log('Test');
                },
              },
              {
                iconId: 'arrow-circle-right',
                onPress: () => {
                  console.log('Test');
                },
              },
            ]}
            style={{margin: 20}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </AwesomeCard>
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
