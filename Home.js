import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather, Fontisto, FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <View style={styles.atas}>
                  <Feather name="home" size={24} color="#373737" />
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome5 name="user" size={24} color="#373737" />
                  </TouchableOpacity>
              
              </View>
              <Text style={styles.header} >Bismillah</Text>
              <Text style={styles.subheading} >Dzikir itu Bagus</Text>
             
                  <Image
                    style={{width: 200, height:200, borderRadius:10, marginTop:80}}
                    source={require('../assets/dzikir2.jpg')}
                  />
                  <TouchableOpacity onPress={() => navigation.navigate('PlayList')}>
                  <Image
                    style={{width: 360, height:70, borderRadius:10, marginTop:40}}
                    source={require('../assets/dzikir.png')}
                  />
              </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <Image
                    style={{width: 360, height:70, borderRadius:10, marginTop:40}}
                    source={require('../assets/profil2.png')}
                  />
              </TouchableOpacity>
             
            </View>
            
            
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright M Affan Sa'id - 120140030</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: '#000',
    overflow: "hidden",
    alignItems: "center",
  },
    top: {
    width: "100%",
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:10,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
},
header: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    top: 35
},
subheading: {
    color: '#ffff',
    fontSize: 20,
    // fontWeight : "bold",
    top: 35
},
top: {
  width: "100%",
  // flexDirection:'row',
  alignItems: 'center',
  padding:40,
  // justifyContent: "flex-end",
  marginTop:20,
  // backgroundColor: 'red'
},
  atas: {
  width: "100%",
  flexDirection:'row',
  alignItems: 'center',
  // padding:40,
  justifyContent: 'space-between',
  // marginTop:20,
  // backgroundColor: 'blue'
},
    search: {
    color : '#ffff',
    width: '100%',
    height: 40,
    margin : 30,
    backgroundColor: "#FF5914",
    fontSize: 20,
    borderRadius: 3,
    alignSelf: "center",
    textAlign: "center",
    fontweight : "Bold"
},
    header2: {
    margin: 5,
    fontWeight : "bold",

},
card: {
    top : 100,
    backgroundColor: 'white',
    margin: "auto",
    width: '90%',
    padding:20,
    borderRadius:10,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    width: "100%",
    flex:1,
    borderRadius:10,
    backgroundColor: '#fff',
    marginTop : 110,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Home;