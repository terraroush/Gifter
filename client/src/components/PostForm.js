// import React, { useState, useContext } from "react";
// import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
// import { PostContext } from "./PostProvider";
// import { useHistory } from "react-router-dom";

// const PostForm = () => {
//   const { addPost } = useContext(PostContext);
//   const [post, setPost] = useState({});

//   const history = useHistory();
// //   const user = JSON.parse(localStorage.getItem("userProfile"));
//   const handleControlledInputChange = (event) => {
//     const newPost = { ...post };
//     newPost[event.target.name] = event.target.value;
//     setPost(newPost);
//   };

//   const handleClickNewPost = (event) => {
//     event.preventDefault();
//     if (
//       post.title === "" ||
//       post.imageUrl === "" ||
//       post.dateCreated === null
//     ) {
//       window.alert("Please fill in required fields");
//     } else {
//       addPost({
//         title: post.title,
//         imageUrl: post.imageUrl,
//         dateCreated: post.dateCreated,
//         userProfileId: post.userProfileId === 1,
//       }).then(() => history.push("/"));
//     }
//   };

//   return (
//     <>
//       <h3 className="mt-5">Add a Post</h3>
//       <div className="container w-50 card mb-5">
//         <Form className="p-3">
//           <FormGroup row>
//             <Label for="title" sm={2}>
//               Title
//             </Label>
//             <Col sm={10}>
//               <Input
//                 onChange={handleControlledInputChange}
//                 name="title"
//                 type="text"
//                 id="postTitle"
//                 required
//                 autoFocus
//                 className="form-control"
//               />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label for="imageUrl" className="text-left" sm={4}>
//               Url Image
//             </Label>
//             <Col sm={8}>
//               <Input
//                 onChange={handleControlledInputChange}
//                 name="imageUrl"
//                 type="text"
//                 name="imageUrl"
//                 id="imageUrl"
//                 placeholder="Url"
//               />
//             </Col>
//           </FormGroup>
//           <FormGroup row>
//             <Label className="text-left" for="caption" sm={4}>
//               Date Created
//             </Label>
//             <Col sm={8}>
//               <Input
//                 onChange={handleControlledInputChange}
//                 type="date"
//                 name="dateCreated"
//                 id="dateCreated"
//               />
//             </Col>
//           </FormGroup>
//           <Button onClick={handleClickNewPost}>Submit</Button>
//         </Form>
//       </div>
//     </>
//   );
// };
// export default PostForm;

// import React, { useContext, useState } from "react"
// import { useHistory } from 'react-router-dom';
// import { PostContext } from './PostProvider';
// import { FormGroup, Form, Button, Label, Input } from "reactstrap";


// const PostForm = () => {
//     const { addPost } = useContext(PostContext);
//     const [userProfileId, setUserProfileId] = useState("")
//     const [imageUrl, setImageUrl] = useState("")
//     const [title, setTitle] = useState("")
//     const [caption, setCaption] = useState("")

//     const history = useHistory();
    
//     const submit = e => {
//         const post = {
//             imageUrl,
//             title,
//             caption,
//             userProfileId,
//         };

//         addPost(post).then(p => {
//             history.push("/");
//         });
//     };

//     return (
//         <Form>
//             <FormGroup>
//                 <Label for="imageUrl">Image URL</Label>
//                 <Input 
//                     type="url" 
//                     name="imageUrl" 
//                     id="imageUrl"
//                     placeholder="imageUrl">
//                 </Input>
//             </FormGroup>
//             <FormGroup>
//                 <Label for="title">Title</Label>
//                 <Input 
//                     type="text" 
//                     name="title" 
//                     id="title"
//                     placeholder="title">
//                 </Input>
//             </FormGroup>
//             <FormGroup>
//                 <Label for="caption">Caption</Label>
//                 <Input 
//                     type="textearea" 
//                     name="caption" 
//                     id="caption"
//                     placeholder="caption">
//                 </Input>
//             </FormGroup>
//             <Button
//                 color="purple"
//                 onClick={submit}
//                 style={{ marginTop: "15px" }}
//             >
//                 SUBMIT
//             </Button>
           
//         </Form>





        // <Grid centered columns={3}>
        //     <Grid.Row>
        //         <Grid.Column>
        //             <FormGroup>
        //                 <Form.Input
        //                 fluid
        //                 placeholder="Image URL"
        //                 onChange={e => setImageUrl(e.target.value)}
        //                 />
        //             </FormGroup>
        //                 <Form.Input
        //                 fluid
        //                 placeholder="Title"
        //                 onChange={e => setTitle(e.target.value)}
        //                 />
        //                 <TextArea
        //                 placeholder="Caption"
        //                 onChange={e => setCaption(e.target.value)}
        //                 />
        //                 <Button
        //                 color="purple"
        //                 onClick={submit}
        //                 style={{ marginTop: "15px" }}
        //                 >
        //                     SUBMIT
        //                 </Button>
        //             </Form>
        //         </Grid.Column>
        //     </Grid.Row>
        // </Grid>
//     )
// };

// export default PostForm;