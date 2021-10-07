import React,{createContext, useReducer} from 'react';
import { call } from 'react-native-reanimated';
import createDataContext from './createDataContext';
import jsonServer from      '../api/jsonServer';
import axios from 'axios';
// const BlogContext = createContext();

// const BlogPosts = [
//     {title:'BlogPost #1'},
//     {title:'BlogPost #2'},
//     {title:'BlogPost #3'},
//     {title:'BlogPost #4'},
//     {title:'BlogPost #5'},
//     {title:'BlogPost #6'},
// ]

    const blogReducer = (state, action) => {
        switch(action.type){
            case 'get_Blogpost':
                return action.payload;
            // case 'add_Blogpost':
            //     return [...state,{id: `${Math.floor(Math.random()*9999999)}`,title:`${action.payload.title}`,
            // content:action.payload.content}]
            case 'delete_Blogpost':
                return state.filter((blogpost)=>{
                    return blogpost.id!==action.payload
                } 
                )
            case 'edit_Blogpost':
                //   const blogPosts=state.filter((item)=>item.id!==action.payload.id)
                  
                  return  state.map((blogPost)=>{
                      if(blogPost.id===action.payload.id){
                          return action.payload;
                      }
                      else{
                          return blogPost
                      }
                  })
            default :
            return state
        }
    }

    const getBlogPost=(dispatch)=>{
        return async()=>{const response=await jsonServer.get('/blogPosts')
        dispatch({type:'get_Blogpost', payload:response.data})
        console.log(response.data)
    }}
const addBlogpost = (dispatch) =>{
          return async(title, content, callBack)=>{
              const response=await jsonServer.post('/blogPosts', {title, content})
        //       dispatch({type:'add_Blogpost', payload:{
        //       title,
        //       content
        //   }})
        if(callBack){
        callBack();}
        }

        }  
        
const deleteBlogpost =(dispatch) =>{
    return async(id)=>{
        const response= await jsonServer.delete(`/blogPosts/${id}`)
        dispatch({type:'delete_Blogpost', payload:id})
    }
}

const editBlogpost = (dispatch) =>{
    return async(title, content, id, callBack)=>{
        const response = await jsonServer.put(`/blogPosts/${id}`, {title, content})
        // dispatch({type:'edit_Blogpost', payload:{title, content, id}});
    callBack();
}
}

// export const BlogProvider =(props)=>{
//     const blogReducer = (state, action) => {
//         switch(action.type){
//             case 'add_Blogpost':
//                 return [...state,{title:`blogpost number: ${state.length+1}`}]
//             default :
//             return state
//         }
//     }
//     const [blogPosts, dispatch]= useReducer(blogReducer, []);
//     // const addBlogPosts = () =>{
//     //     setBlogPosts([...blogPosts, {title:`blogpost ${blogPosts.length+1}`}])
//     // }
//     const addBlogpost = () =>{
//         dispatch({type:'add_Blogpost'})
//     }   
//     return <BlogContext.Provider value={{data:blogPosts, addBlogpost}}>
//         {props.children}
//     </BlogContext.Provider>
// }

// export default BlogContext;

export const{Context, Provider} =createDataContext(blogReducer, 
    {addBlogpost, deleteBlogpost, editBlogpost, getBlogPost},
    [] )
