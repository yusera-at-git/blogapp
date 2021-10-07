import React,{useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Form from '../components/Form';
import { navigationRef } from '../components/RootNavigation';
import {Context as BlogContext} from '../context/BlogContext';

const EditScreen = (props) => {
    const {state, editBlogpost}= useContext(BlogContext);
    const {id}=props.route.params;
    const blogPost = state.find((item)=>item.id===id.id);
    console.log(blogPost);
    // const [title, setTitle] = useState(blogPost.title);
    // const [content, setContent] = useState(blogPost.content);
    console.log(id.id);
//     return  <View>
//   <Text style={styles.textStyle}>
//   Edit title:
// </Text>
// <TextInput 
// style={styles.inputStyle}
// value={title}
// onChangeText={(text)=>setTitle(text)}
// />
// <Text style={styles.textStyle}>
//     Edit Content:
// </Text>
// <TextInput
// style={styles.inputStyle}
// value={content}
// onChangeText={setContent}
// />
// {/* <Button 
// style={styles.buttonStyle}
// title='Add Blog Post'
// onPress={()=>addBlogpost(title, content, ()=>props.navigation.navigate('Index'))}
// /> */}
// </View>
// }
// const styles = StyleSheet.create({
// inputStyle:{
//     borderColor:'black',
//     borderWidth:1,
//     margin:10,
//     paddingHorizontal:15,
//     paddingVertical:5,
//     fontSize:25
// },
// textStyle:{
//     fontSize:20,
//     fontWeight:'bold',
//     alignSelf:'center'
// },
// buttonStyle:{
//     alignSelf:'center',
    
// }
// })
return  (
<View><Form initialValue={{title:blogPost.title, content:blogPost.content}}
            titleText='edit'
            contentText='edit Content'
            // content={content}
            // setContent={setContent}
            // setTitle={setTitle}
            buttonPress={(title, content)=>editBlogpost(title,content, id.id, ()=>props.navigation.navigate('Index'))}

/>
</View>);
}

export default EditScreen;