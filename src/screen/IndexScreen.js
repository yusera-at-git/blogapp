import React,{useContext, useEffect} from 'react';
import {View, Text, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = (props) => {
    const {state, addBlogpost, deleteBlogpost, getBlogPost} =useContext(BlogContext);
    useEffect(()=>{
        getBlogPost();
        props.navigation.addListener('focus',()=>{
                    getBlogPost();
                })
    //    const listener= props.navigation.addListener('focus',()=>{
    //         getBlogPost();
    //     })
        // return ()=>{
        //     listener.remove();
        // }
    },
    [])
       return(<View>
        {/* <Text>
        Index Screen 
    </Text> */}
    <FlatList
    data={state}
    renderItem={({item})=>{
        return(<TouchableOpacity onPress={()=>props.navigation.navigate('Show',{id:item.id})}>
            <View style={styles.rowStyle}>
            <Text> {item.title}{item.id}</Text>
            <TouchableOpacity onPress={()=>{deleteBlogpost(item.id)}}>
            <AntDesign name="delete" size={24} color="red" style={styles.iconStyle}/>
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
        )
    }}
    keyExtractor={(item)=>{
        return item.id
    }}
    />
    {/* <Button title='Click here' onPress={addBlogpost}/> */}
    </View>)
}


const styles = StyleSheet.create({
    rowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:0,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'grey',
        paddingHorizontal:20,
        
    },
    title:{
        fontSize:18
    },
    iconStyle:{
        fontSize:20,
        padding:20,
        // borderColor:'black',
        // borderWidth:1,
        margin:0
    }
})
export default IndexScreen;