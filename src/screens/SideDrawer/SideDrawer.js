import  React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

class SideDrawer extends Component {
  render() {
    return(
      <View style={[
        styles.container,
        //Custom style used for Android only and not put into styles to dynamically recalculate width on screen rotation
        {width: Dimensions.get("window").width * 0.8}
        ]}>
        <Text>SideDrawer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 22,
    backgroundColor: "white",
    flex: 1
  }
});

export default SideDrawer;