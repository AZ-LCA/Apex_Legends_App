import React, { Component } from "react"
import Comment from "./Comment"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import apiUrl from "../apiConfig";

class GeneralChat extends Component {
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            commentId: '',
            updateComment: '',
            allComments: [],
            updateClassNameHidden: 'hidden',
            updateClassNameVisible: '',
            isDisabled: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.deleteComment = this.deleteComment.bind(this)
        this.updateComment = this.updateComment.bind(this)

    }
<<<<<<< HEAD


    // GENERAL CHAT GET
    getAllComments = () => {
        axios.get(`${apiUrl}/api/generalchat`, 
        {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
        })
        .then((response) => {
            console.log(response.data)
            this.setState({
                allComments: response.data.comment,
                comment: ''
            })
        })
        .catch(e => console.log(`error: DISPLAY >>> ${e}`))
    }



    // DISPLAY ALL COMMENTS
    componentDidMount = () => {
        this.getAllComments()
    }



    // SAVE INPUT
    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        })
        }



    // SAVING COMMENTS TO DATABASE
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${apiUrl}/api/generalchat`, 
            { comment: {
                    userId: this.props.user_id,
                    comment: this.state.comment
                }}, 
            {headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            },})
            .then((response) => {
            let newComment = {
                "comment": this.state.comment, 
                "userId": this.props.user_id
            }
            this.setState(prevState =>{ 
                return{
                    allComments: [...prevState.allComments, newComment]
                }
                })
          })  
          .catch(e => console.log(`error: SAVE >>> ${e}`))
          console.log(this.state.allComments)
      }



    // DELETE COMMENT
    deleteComment = (commentId) => {
        console.log('delete ', commentId)

        axios.delete(`${apiUrl}/api/generalchat/${commentId}`, 
        {headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        },
        })
        .then((response) => {
            console.log('response >>>', response)
            this.getAllComments()
        })
        .catch(e => console.log(`error: DELETE >>> ${e}`))  
    }  



    // UPDATE COMMENT
    updateComment = (event) => {
        event.preventDefault()
        this.setState({
            updateClassNameHidden: '',
            isDisabled: false,
            updateClassNameVisible: 'hidden'
        })
    }


        
    // SAVE UPDATED COMMENT
    saveUpdatedComment = (commentId, event) => {
        console.log('>> event ', event);
        axios.put(`/api/generalchat/${commentId}`, 
        {comment: {
            _id: commentId,
            userId: this.props.user_id,
            comment: event.target.parentElement[0].value
        }},
        {headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }}
        )
        .then((response) => {
            console.log(response)

        })  
        .catch(e => console.log(`error: UPDATE >>> ${e}`)) 


        this.setState({
        updateClassNameHidden: 'hidden',
        isDisabled: true,
        updateClassNameVisible: ''
        })
        
 } 
    

    render() {

        return(
            <div>
                <h1> General Chat </h1>
                <Card>
                    <Card.Header>Comment</Card.Header>
                    <Card.Body>
                        <input type="text" onChange={this.handleChange} />
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Card.Body>
                </Card>
               { this.state.allComments.map((comment, index) => {
                    return <Comment 
                        comment={comment.comment}
                        username={this.props.username}
                        key={index}
                        deleteComment={this.deleteComment}
                        updateComment={this.updateComment}
                        commentId={comment._id}
                        updateClassNameHidden={this.state.updateClassNameHidden}
                        saveUpdatedComment={this.saveUpdatedComment}
                        isDisabled={this.state.isDisabled}
                        updateClassNameVisible={this.state.updateClassNameVisible}
                />}) }
            </div>
        )
    } 
}
=======
>>>>>>> c5154755abfe7d3830a60bc4edbd109f6d995908


    // GENERAL CHAT GET
    getAllComments = () => {
        axios.get(`${apiUrl}/api/generalchat`, 
        {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }
        })
        .then((response) => {
            console.log(response.data)
            this.setState({
                allComments: response.data.comment,
                comment: ''
            })
        })
        .catch(e => console.log(`error: DISPLAY >>> ${e}`))
    }



    // DISPLAY ALL COMMENTS
    componentDidMount = () => {
        this.getAllComments()
    }



    // SAVE INPUT
    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        })
        }



    // SAVING COMMENTS TO DATABASE
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${apiUrl}/api/generalchat`, 
            { comment: {
                    userId: this.props.user_id,
                    comment: this.state.comment
                }}, 
            {headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            },})
            .then((response) => {
            let newComment = {
                "comment": this.state.comment, 
                "userId": this.props.user_id
            }
            this.setState(prevState =>{ 
                return{
                    allComments: [...prevState.allComments, newComment]
                }
                })
          })  
          .catch(e => console.log(`error: SAVE >>> ${e}`))
          console.log(this.state.allComments)
      }



    // DELETE COMMENT
    deleteComment = (commentId) => {
        console.log('delete ', commentId)

        axios.delete(`${apiUrl}/api/generalchat/${commentId}`, 
        {headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        },
        })
        .then((response) => {
            console.log('response >>>', response)
            this.getAllComments()
        })
        .catch(e => console.log(`error: DELETE >>> ${e}`))  
    }  



    // UPDATE COMMENT
    updateComment = (event) => {
        event.preventDefault()
        this.setState({
            updateClassNameHidden: '',
            isDisabled: false,
            updateClassNameVisible: 'hidden'
        })
    }


        
    // SAVE UPDATED COMMENT
    saveUpdatedComment = (commentId, event) => {
        console.log('>> event ', event);
        axios.put(`/api/generalchat/${commentId}`, 
        {comment: {
            _id: commentId,
            userId: this.props.user_id,
            comment: event.target.parentElement[0].value
        }},
        {headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
        }}
        )
        .then((response) => {
            console.log(response)

        })  
        .catch(e => console.log(`error: UPDATE >>> ${e}`)) 


        this.setState({
        updateClassNameHidden: 'hidden',
        isDisabled: true,
        updateClassNameVisible: ''
        })
        
 } 
    

    render() {

        return(
            <div>
                <h1> General Chat </h1>
                <Card>
                    <Card.Header>Comment</Card.Header>
                    <Card.Body>
                        <input type="text" onChange={this.handleChange} />
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Card.Body>
                </Card>
               { this.state.allComments.map((comment, index) => {
                    return <Comment 
                        comment={comment.comment}
                        username={this.props.username}
                        key={index}
                        deleteComment={this.deleteComment}
                        updateComment={this.updateComment}
                        commentId={comment._id}
                        updateClassNameHidden={this.state.updateClassNameHidden}
                        saveUpdatedComment={this.saveUpdatedComment}
                        isDisabled={this.state.isDisabled}
                        updateClassNameVisible={this.state.updateClassNameVisible}
                />}) }
            </div>
        )
    } 
}


export default GeneralChat
