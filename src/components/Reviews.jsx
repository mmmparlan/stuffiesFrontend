import {useState,useEffect} from 'react'
import React from 'react'
import {postReview,editReviewById} from '../api/index'

export function ReviewForm({addPostReview,setAddPostReview,editPostReview,setEditPostReview,singleViewStuffyId,usernameObj,setUsernameObj,reviewsObj,reviewFormActive,setReviewFormActive}){
    const [reviewField,setReviewField] = useState("")
    if(reviewFormActive){
        return(
            <>
            <div className="reviewFormWindow">
            Write A Review:
            <button className="closeReviewWindow" onClick={(e)=>{
                    setReviewFormActive(false)}}>X</button>
            <form className="reviewForm" onSubmit={()=>{
                console.log('review form submit clicked')
                const stuffyreview = reviewField;
                const stuffyid = singleViewStuffyId.id;
                console.log(stuffyreview);
                console.log('review form submit');
                console.log(stuffyid)
                console.log('review form submit');
                console.log(usernameObj);
                if(addPostReview === true){
                    postReview(stuffyid,usernameObj,stuffyreview);
                    setAddPostReview(false);
                }else if(editPostReview === true){
                    const id = singleViewStuffyId.id;
                    editReviewById(id,stuffyid,usernameObj,stuffyreview);
                    setEditPostReview(false);
                }
                

                setReviewFormActive(false)
            }}>
            <textarea
            rows="8"
            cols="45"
            name="text"
            placeholder={reviewField}
            onChange={(e)=> setReviewField(e.target.value)}>
            </textarea>
            <button className="submitFormButton">Submit</button>
            </form>
            </div>
            </>
        )
    }

}

export default function Reviews({reviewsObj,singleViewStuffyId}){

    return (
        <>
        {React.Children.toArray (reviewsObj.map((review) => {
            if(review.stuffyid === singleViewStuffyId.id){
                console.log(singleViewStuffyId)
                return (
                    <div className="singleReviewBox">
                    <div className="reviewBox">{review.stuffyreview}</div>
                    
                    
                    </div>
                    )
                }

        }))}
            
        </>
    )
}