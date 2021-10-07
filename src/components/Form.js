import React,{useState} from 'react';
import {Text, TextInput, Button, View, StyleSheet} from 'react-native';
import { navigationRef } from './RootNavigation';

const Form =(props)=> {
    const [title, setTitle] = useState(props.initialValue.title);
    const [content, setContent] = useState(props.initialValue.content);
    // const setDefaultValues =()=>{
    //         if(title===''){
               
    //             return setTitle('zakir'); 
    //         }
           
               
    //         }
    
    return (
        <View>
         <Text style={styles.textStyle}>
                {props.titleText} title:
        </Text>
    <TextInput 
        style={styles.inputStyle}
        value={title}
        onChangeText={setTitle}
    />
    <Text style={styles.textStyle}>
        {props.contentText}
    </Text>
    <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={setContent}
    />
<Button 
        style={styles.buttonStyle}
        title='Add Blog Post'
        onPress={()=>{
            //try{setDefaultValues();}
        // catch(e){
        //     console.log('error in default value')
        // }
            props.buttonPress(title, content);
        }
    }
    />
</View>)
}

Form.defaultProps={
    initialValue:{
        title:'',
        content:''
    }
}
const styles = StyleSheet.create({
inputStyle:{
    borderColor:'black',
    borderWidth:1,
    margin:10,
    paddingHorizontal:15,
    paddingVertical:5,
    fontSize:25
},
textStyle:{
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center'
},
buttonStyle:{
    alignSelf:'center',
    
}
})


export default Form;