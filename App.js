import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Header,
  LinearProgress,
  Slider,
  Icon,
  Button,
} from 'react-native-elements';

export default function App() {
  const [age, setAge] = useState(true);
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MOBILE APP', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <LinearProgress color='primary' value={0} />
      <Text>How old are you ?</Text>
      <View
        style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}
      >
        <Slider
          value={10}
          onValueChange={(val) => setAge(val)}
          maximumValue={150}
          minimumValue={0}
          step={1}
          trackStyle={{ height: 5, backgroundColor: 'transparent' }}
          thumbStyle={{ height: 10, width: 10, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <Icon
                name='eercast'
                type='font-awesome'
                size={10}
                reverse
                containerStyle={{ bottom: 10, right: 10 }}
                color='#0af'
              />
            ),
          }}
        />
        <Text>Age: {age}</Text>
      </View>

      <Button title='Continue' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
