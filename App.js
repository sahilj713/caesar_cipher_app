import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,Image,Dimensions} from 'react-native';

export default function App() {

  const [shift, setShift] = useState('');
  const [text, setText] = useState('');
  const[encryptText,setEncryptText]=useState();

  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  var cipherText='';
  var index,char;

  const caesar = (text, shift) => {
    
  for(let i=0; i<text.length; i++)
  {
  char = text[i].toLowerCase();
  index = parseInt(alphabet.indexOf(char)) + parseInt(shift);
  if(index<=25)
  {
  cipherText += alphabet[index];
  }
  else
  {
  index -= 26;
  cipherText += alphabet[index];
  }
  }
  return(cipherText);
  }; 
// }
  const plainTextInputHandler= inputText =>{
        setText(inputText);
      };
    
      const keyInputHandler= inputText =>{
        setShift(inputText);
      };

      const resetInputHandler = () =>{
            setText();
            setShift();
          };
        

  return (
      <View style={styles.container}>
      <Text>Enter your message!</Text>
      <TextInput 
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input} 
      onChangeText={plainTextInputHandler}
      value={text}
      />

      <Text>Enter the shift key!</Text>
      <TextInput 
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="number-pad"
      style={styles.input} 
      onChangeText={keyInputHandler}
      value={shift}
      />

      <View style={styles.buttonContainer}>
          <View>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color='#ff5f40'
            />
          </View>
          <View>
            <Button
              title="Encode"
              onPress={caesar}
              color='#c4fb6d'
              // '#f5ba13'
            />
          </View>
      </View>

      <View style={styles.inverseContainer}>
        <View >
           <Text style={styles.inverseText}> The Encrypted code is :</Text>
        </View>
        <View >
           <Text style={styles.inverseResult}> {caesar(text,shift)}</Text>
        </View>
      </View>

      
     
      

      <View style={styles.byLines}>
      <Text> created by:</Text>
      <Text> SAHIL JAIN</Text>
      <Text> 2018BTCS070</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image 
        source={require('./assets/sj.jpg')}
        style={styles.image}
      />
       </View>
       
       <StatusBar style="auto" />
       </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height:30,
    borderBottomColor:'grey',
    borderBottomWidth:1,
    marginVertical:10
},
buttonContainer: {
  flexDirection: 'row',
  width: '60%',
  justifyContent: 'space-between',
  paddingHorizontal: 15
},
inverseContainer:{
  marginTop:50,
  textAlign:'center',
  fontSize:22
},
inverseText:{
textAlign:'center',
fontSize:18
},
inverseResult:{
  marginTop:30,
  textAlign:'center',
  fontSize:25,
},
byLines:{
  marginTop:20,
  // justifyContent:'flex-end',
  // alignItems:'flex-end',
  textAlign:'center'
},
imageContainer:{
    // width:300,
    // height:300,
    // borderRadius:150,
    width:Dimensions.get('window').width * 0.175,
    height:Dimensions.get('window').width * 0.175,
    borderRadius:Dimensions.get('window').width * 0.175 / 2,
    borderWidth:3,
    borderColor:'black',
    overflow:'hidden',
    // marginVertical:30,
    marginVertical:Dimensions.get('window').height / 50
},
image:{
    width:'100%',
    height:'100%'
}
});
