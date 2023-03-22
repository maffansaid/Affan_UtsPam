import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, Image, View, FlatList, StyleSheet, Text, Button,} from 'react-native';
import { MaterialIcons, AntDesign, FontAwesome5, iconType } from '@expo/vector-icons';
import { Audio } from 'expo-av';



const PlayList = ({ navigation }) => {

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/Sholawat.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }
  
  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="#373737" />
            </TouchableOpacity>
            {/* <Text style={styles.heading}>Hiling.id</Text> */}
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <FontAwesome5 name="user" size={24} color="#373737" />
                  </TouchableOpacity>
          </View>
          <Text style={styles.heading2}>M Affan Sa'Id</Text>
      </View>
      <View style={styles.detail}>
         <Text style={styles.memutar}>Sedang Memutar</Text>
            <Image
                style={{width: 300, height:300, borderRadius:10, marginTop:25}}
                source={require('../assets/dzikir.png')}
            />
      </View>
    
      {/* tombol play */}
      <View style={styles.detail}>
        {/* <FontAwesome5 name="pause" size={40} color="#F03131" onPress={playSound}/> */}
           <Button title="Putar Lagu" onPress={playSound} color="#F03131" />
      </View>
      
      


      <Text style={styles.copyright}>Copyright M Affan Sa'id-120140030</Text>
    </View>
  );

  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header:{
    width:'100%',
    // backgroundColor: '#6fb23e',
    padding:20,
    height: 130,
    
  },
  detail:{
     // top : 100,
    // backgroundColor: 'blue',
    margin: "auto",
    width: '100%',
    // height: 100,
    padding:20,
    borderRadius:10,
    flexDirection:'column',
    alignItems:'center'
  },
  audioControll:{
     // top : 100,
    // backgroundColor: 'blue',
    margin: "auto",
    width: '100%',
    // height: 100,
    // padding:20,
    borderRadius:10,
    flexDirection:'column',
    alignItems:'center'
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  memutar:{
    textAlign:'center',
    fontSize :18,
    fontWeight : "bold"
  },
  judulLagu:{
    marginTop:15,
    textAlign:'center',
    fontSize :24,
    fontWeight : "bold"
  },
  pencipta:{
    textAlign:'center',
    fontSize :14,
    color : '#626262',
    marginBottom : 50
  },
  heading2: {
    color: "#373737",
    fontSize: 12,
    // fontWeight : "bold",
    textAlign: 'right',
    top : 4,
    left:10
  },
  top: {
    top : 24,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
    // backgroundColor:'red',
    padding:15
  },
  Image: {
    width:10,
  },
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginTop: 90,
    marginBottom: 20,
    padding:20,
    // marginTop: 50,
    textAlign: 'center',
  },
});

export default PlayList;
