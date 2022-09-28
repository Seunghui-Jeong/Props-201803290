import React from "react";
import {Button, View, ScrollView, StyleSheet } from "react-native";

const App = () => {
  return (<>
    <View style={[stlyes.container, styles.playingSpace]}>
      
    </View>
    <ScrollView style={[stlyes.container, styles.controlSpace]}>
      <View style={[style.buttonView]}>
        <Button title="1"/>
      </View>
      <View style={[style.buttonView]}>
        <Button title="2"/>
      </View>
      <View style={[style.buttonView]}>
        <Button title="3"/>
      </View>
      <View style={[style.buttonView]}>
        <Button title="4"/>
      </View>
      <View style={[style.buttonView]}>
        <Button title="5"/>
      </View>
      <View style={[style.buttonView]}>
        </ScrollView>><Button title="1"/></View>


      </ScrollView>
  
  </>);
}

const stlyes = StyleSheet.Creat({
  container: {
    height: '50%'
  },
  playingSpace : {
    backgroudColor: 'white',
    borderColor: 'blue',
    borderWidth: 3

  },
  controlSpace: {
    backgroudColor: '#A5A5A5'

  }
})
  export default App;








  controlSpace: {
    backgroundColor: '#A5A5A5',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  buttonView: {

    width:'50%',
    padding:10
  }