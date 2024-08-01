import React,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet,FlatList} from "react-native";

const App=()=>{

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo=()=>{
    setTodos([...todos,{id:Date.now().toString(), text:input}])
    setInput('')
  }
 return(
    <View style ={styles.container}>
      <Text style = {styles.header}TODO APP></Text>
          <TextInput style = {styles.input}
          placeholder="Enter a Todo"
          value={input}
          onChange={setInput}
          ></TextInput>
          <Button title="Add Todo"
          onPress={addTodo}></Button>
          <FlatList
          data = {todos}
          keyExtractor = {item => item.id}
          renderItem = {({item}) =>(
            <View style={styles.container}>
              <Text>{item.text}</Text>
            </View>
        )}
                >
            </FlatList>
       </View>
  )
}
const styles=StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'f5f5f5',
   padding: 23
  },
  header:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20
  },
  input:{
    height:35,
    borderColor:'gray',
    borderWidth:1
  }
})
export default App
