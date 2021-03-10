import * as React from 'react';
import { Button, View } from 'react-native';

export default function ProfileScreenScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home from Profile" />
    </View>
  );
}
