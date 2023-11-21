import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/FirebaseContext';
import Modal from 'react-modal'; // Import the Modal component


function View() {
  const [userDetails, setUserDetails] = useState({});
  const [buySuccess, setBuySuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (postDetails && postDetails.userId) {
      firebase
        .firestore()
        .collection('users')
        .where('id', '==', postDetails.userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        });
    }
  }, [postDetails, firebase]);

  const handleBuy = () => {
    // Implement logic for the "Buy" action here
    // This is a placeholder, you can customize it based on your requirements

    // For demonstration purposes, set a buy success message
    setBuySuccess(true);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        {postDetails && postDetails.url && (
          <img src={postDetails.url} alt="" />
        )}
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails && postDetails.price} </p>
          <span>{postDetails && postDetails.name}</span>
          <p>{postDetails && postDetails.category}</p>
          <span>{postDetails && postDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}

    
      </div>
    </div>
  );
}

export default View;
