//import React, { Component } from 'react';
import { createStore } from 'redux';


const openModal = "openModal";
//const closeModal = "closeModal";

const reducer = (state, action) => {
    switch(action.type){
        case openModal:
            return [{ showModal: true, id: action.id }];
        // case closeModal:
        //     return [{ showModal: false, id: action.id }];
        default:
            return state;
    }
};
const store = createStore(reducer);

// this.handleOpenModal = this.handleOpenModal.bind(this);
// this.handleCloseModal = this.handleCloseModal.bind(this);


const handleOpenModal = (id) => {
    return{
        type:openModal,
        id:id}
    //  this.setState({ 
    //      showModal: true
    //  });
    }
    
// const handleCloseModal = (id) => {
//     return{
//         type:closeModal,
//         id:id}
//     // this.setState({ showModal: false });
// }

export const actionCreators = {
    handleOpenModal
   // handleCloseModal
}

export default store;