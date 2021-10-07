import React, { useState, useContext } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import Form from '../components/Form';
const CreateScreen = (props) => {
    const {addBlogpost} = useContext(BlogContext);
    // const [title, setTitle] = useState('');
    // const [content, setContent] = useState('');
//     return <View>
//         {/* <Text>
//         Create Screen
//     </Text> */}
//     <Text style={styles.textStyle}>
//         Enter title:
//     </Text>
//     <TextInput 
//     style={styles.inputStyle}
//     value={title}
//     onChangeText={(text)=>setTitle(text)}
//     />
//     <Text style={styles.textStyle}>
//         Enter Content:
//     </Text>
//     <TextInput
//     style={styles.inputStyle}
//     value={content}
//     onChangeText={setContent}
//     />
//     <Button 
//     style={styles.buttonStyle}
//     title='Add Blog Post'
//     onPress={()=>addBlogpost(title, content, ()=>props.navigation.navigate('Index'))}
//     />
//     </View>
// }

// const styles = StyleSheet.create({
//     inputStyle:{
//         borderColor:'black',
//         borderWidth:1,
//         margin:10,
//         paddingHorizontal:15,
//         paddingVertical:5,
//         fontSize:25
//     },
//     textStyle:{
//         fontSize:20,
//         fontWeight:'bold',
//         alignSelf:'center'
//     },
//     buttonStyle:{
//         alignSelf:'center',
        
//     }
// })
return  (
    <View><Form initialValue={{title:'', content:''}}
                titleText='Enter'
                contentText='Enter Content'
                // content={content}
                // setContent={setContent}
                // setTitle={setTitle}
                buttonPress={(title, content)=>addBlogpost(title, content, ()=>props.navigation.navigate('Index'))}
    
    />
    </View>);
    }
export default CreateScreen;