import {useState, useEffect} from 'react'
import {getAllStuffies,getAllReviews,deleteReviewById,addItemToShoppingCart} from '../api/index'
import Reviews, { ReviewForm } from './Reviews'
import React from 'react'

function SingleStuffyView({
        userIdObj,
        tokenObj,setTokenObj,
        usernameObj, setUsernameObj,
        reviewFormActive,setReviewFormActive,
        reviewsObj,
        stuffiesObj,setStuffiesObj,
        stuffiesArrayViewActive, setStuffiesArrayViewActive,
        singleStuffyViewActive, setSingleStuffyViewActive,
        singleViewStuffyId, setSingleViewStuffyId }){

        const [addPostReview,setAddPostReview] = useState(false)
        const [editPostReview,setEditPostReview] = useState(false)
        const [singleViewUseEffect,setSingleViewUseEffect] = useState(false)

    

        useEffect(() => {
            if(singleViewUseEffect === true) {
            const qtyOneToAdd = 1;

            async function addOneItemToCart(){
                console.log('adding one item to cart')
                try {
                    const response = await addItemToShoppingCart(
                        userIdObj,usernameObj,
                        singleViewStuffyId.id,
                        singleViewStuffyId.name,
                        singleViewStuffyId.price,
                        qtyOneToAdd);
                    const result = response;
                    console.log(result);
                    console.log('finsied adding item to shopping cart')
                } catch (err) {
                    console.error(err);
                }
            }
            addOneItemToCart();}
        },[singleViewUseEffect]);
   
        return (
            <>
            <div className="singleStuffyView">
                
                <div className="singleStuffyImage" style={{backgroundImage: `url(${singleViewStuffyId.imageurl1})`}}></div>
                <div className="singleStuffyTableDiv">
                <ReviewForm 
                addPostReview={addPostReview}
                setAddPostReview={setAddPostReview}
                editPostReview={editPostReview}
                setEditPostReview={setEditPostReview}
                usernameObj={usernameObj} 
                setUsernameObj={setUsernameObj} 
                singleViewStuffyId={singleViewStuffyId} 
                setSingleViewStuffyId={setSingleViewStuffyId} 
                reviewsObj={reviewsObj} 
                setReviewFormActive={setReviewFormActive} 
                reviewFormActive={reviewFormActive} />
                <div className="reviewButtons">
                <button className="addReviewButton" onClick={(e)=> {
                    console.log(`add review button clicked ${singleViewStuffyId.id}`)
                    setReviewFormActive(true);
                    setAddPostReview(true)
                    console.log(usernameObj)
                 }}>Add Review</button>
                <button className="editReviewButton" onClick={(e)=>{
                    console.log(`edit review button clicked for id ${singleViewStuffyId.id}`)
                    setReviewFormActive(true)
                    setEditPostReview(true)
                }}>Edit Review</button>
                <button className="deleteReviewButton" onClick={(e)=>{
                    console.log(`delete review button clicked ${singleViewStuffyId.id}`)
                    const id = singleViewStuffyId.id;
                    console.log(usernameObj)
                    deleteReviewById(id)
                }}>Delete Review</button>

                <button className="closeWindow" onClick={(e)=>{
                    setSingleStuffyViewActive(false)
                    setStuffiesArrayViewActive(true)}}>X</button>
                </div>
                

                <div className="reviewsWindow">
                    <Reviews 
                    usernameObj={usernameObj} 
                    setUsernameObj={setUsernameObj} 
                    reviewsObj={reviewsObj} 
                    singleViewStuffyId={singleViewStuffyId}/>
                </div>
                <table className="singleStuffyTable">
                <tbody>
                <tr  key="nameCell">
                    <td className="nameCell" key='name'>Name:</td>
                    <td className="nameCell" key='stuffyName'>{singleViewStuffyId.name}</td>
                </tr>
                <tr className="priceCell" key="priceCell">
                    <td className="priceCell" key='price'>Price:</td>
                    <td className="priceCell" key='stuffyPrice'>{singleViewStuffyId.price}</td>
                </tr>
                <tr className="sizeCell" key="sizeCell">
                    <td className="sizeCell" key='size'>Size:</td>
                    <td className="sizeCell" key='stuffySize'>{singleViewStuffyId.size}</td>
                </tr>
                <tr className="colorsCell" key="colorsCell">
                    <td className="colorsCell" key='colors'>Colors:</td>
                    <td className="colorsCell" key='stuffyColors'>{singleViewStuffyId.colors}</td>
                </tr>
                <tr>
                    <td className="buttonCell" key='buttonCell' colSpan="2"><button 
                    className="addItemToCart" onClick={()=>{
                        setSingleViewUseEffect(true)
                    }}>Add Item To Cart</button></td>
                </tr>
                </tbody>
                </table>
                </div>
            </div>
            </>
        )
    
}

function StuffiesArrayView({
    stuffiesObj,setStuffiesObj,
    stuffiesArrayViewActive, setStuffiesArrayViewActive,
    singleStuffyViewActive, setSingleStuffyViewActive,
    singleViewStuffyId,setSingleViewStuffyId
    }){

    if(stuffiesArrayViewActive){

/* <img className="stuffyImg" src={stuffy.imageurl1} alt={stuffy.imageurl1}/> */
    return (
        <>
        {React.Children.toArray (stuffiesObj.map((stuffy) => {
                    return (
                        <div  className="stuffiesTileView" style={{backgroundImage: `url(${stuffy.imageurl1})`}}>
                            {/* replace console.log with the following when singleStuffyView is complete: setSingleViewStuffyId(stuffy.id) */}
                            <button className="singleViewButton" onClick={(e)=> {
                                console.log(stuffy)
                                setSingleViewStuffyId(stuffy);
                                console.log(singleViewStuffyId);
                                setStuffiesArrayViewActive(false); 
                                setSingleStuffyViewActive(true)}}>{stuffy.name}</button>
                        </div>
                    )
                }))}

        </>
    )
}}

export default function Shop({
    userIdObj,
    singleViewStuffyId,setSingleViewStuffyId,
    usernameObj,setUsernameObj,
    reviewsObj,setReviewsObj,
    stuffiesObj,setStuffiesObj}){
const [stuffiesArrayViewActive, setStuffiesArrayViewActive] = useState(true);
const [singleStuffyViewActive, setSingleStuffyViewActive] = useState(false);

const [reviewFormActive,setReviewFormActive] = useState(false);

useEffect(() => {
    async function fetchAllReviews(){
        console.log('fetching all reviews')
        try {
            const allReviews = await getAllReviews();
            setReviewsObj(allReviews);
            console.log(reviewsObj);
        } catch (err) {
            console.error(err);
        }
    }
    fetchAllReviews();
        
    async function fetchAllStuffies(){
        console.log('fetching all stuffies')
        try {
            const allStuffiesObj = await getAllStuffies();
            setStuffiesObj(allStuffiesObj);
            console.log(stuffiesObj);
        } catch (err) {
            console.error(err);
        }
    }
    fetchAllStuffies();
},[]);

    return (
        <>
            <h3></h3>
            <div className="stuffiesArrayView">
            <StuffiesArrayView 
            stuffiesObj={stuffiesObj} 
            setStuffiesObj={setStuffiesObj}
            stuffiesArrayViewActive={stuffiesArrayViewActive}
            setStuffiesArrayViewActive={setStuffiesArrayViewActive}
            singleStuffyViewActive={singleStuffyViewActive}
            setSingleStuffyViewActive={setSingleStuffyViewActive}
            singleViewStuffyId={singleViewStuffyId}
            setSingleViewStuffyId={setSingleViewStuffyId} />
            
            

            <SingleStuffyView
            userIdObj={userIdObj}
            usernameObj={usernameObj}
            setUsernameObj={setUsernameObj}
            reviewFormActive={reviewFormActive}
            setReviewFormActive={setReviewFormActive}
            reviewsObj={reviewsObj}
            stuffiesObj={stuffiesObj} 
            setStuffiesObj={setStuffiesObj}
            stuffiesArrayViewActive={stuffiesArrayViewActive}
            setStuffiesArrayViewActive={setStuffiesArrayViewActive}
            singleStuffyViewActive={singleStuffyViewActive}
            setSingleStuffyViewActive={setSingleStuffyViewActive}
            singleViewStuffyId={singleViewStuffyId}
            setSingleViewStuffyId={setSingleViewStuffyId} />
            </div>
        </>
    )
}