import React from 'react';
import { StyleSheet, Text,Alert, View,Image,Button,TouchableOpacity} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      uri:require("./src/imgg/dice1.png")

    };
  }
  getRandomValue = () =>{
    return Math.floor(Math.random() * 6) + 1;

  };
  Buttonpress = () =>{
    // Alert.alert("BUtton Pressed: " + this.getRandomValue());
    var rNumber = this.getRandomValue();

    switch (rNumber) {
      case 1:
        this.setState({ uri: require("./src/imgg/dice1.png") });
        break;
      case 2:
        this.setState({ uri: require("./src/imgg/dice2.png") });
        break;
      case 3:
        this.setState({ uri: require("./src/imgg/dice3.png") });
        break;
      case 4:
        this.setState({ uri: require("./src/imgg/dice4.png") });
        break;
      case 5:
        this.setState({ uri: require("./src/imgg/dice5.png") });
        break;
      case 6:
        this.setState({ uri: require("./src/imgg/dice6.png") });
        break;

      default:
        this.setState({ uri: require("./src/imgg/dice1.png") });
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.uri} />

        <TouchableOpacity onPress={this.Buttonpress}>
          <Text style={styles.gameButton}>vamsi vamsi</Text>
          
        </TouchableOpacity>


        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BB2CD9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton:{
    marginTop:35,
    fontSize:20,
    color:"#ffffff",
    fontWeight:"bold",
    borderWidth:2,
    paddingVertical:8,
    paddingHorizontal:40,
    borderRadius:10,
    borderColor:"#ffffff",
    backgroundColor:"#4834DF"
               

  },
});
