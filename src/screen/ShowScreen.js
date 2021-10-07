import React,{useContext} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import { Context as BlogContext} from '../context/BlogContext';
const ShowScreen = ({route}) => {
    const{state} =useContext(BlogContext);
    // console.log(navigation.getParam('id'));
    // console.log(id);
    const {id}=route.params;
    // console.log(route.params)
    // console.log(id+'show');
    const blogPost = state.find((item)=>{
        console.log(item.id+'item');
        return item.id === id;
    })
    // console.log(blogPost);

    return(<View><Text>
        {blogPost.title}
    </Text>
    
    </View>)
}

export default ShowScreen;