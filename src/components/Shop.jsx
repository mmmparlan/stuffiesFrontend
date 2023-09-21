import {useState, useEffect} from 'react'
import {getAllStuffies} from '../api/index'
import React from 'react'

function SingleStuffyView({
        stuffiesObj,setStuffiesObj,
        stuffiesArrayViewActive, setStuffiesArrayViewActive,
        singleStuffyViewActive, setSingleStuffyViewActive,
        singleViewStuffyId, setSingleViewStuffyId }){

    if(singleStuffyViewActive) {

        function handleClick(){
            console.log("Add Item To Cart Clicked")
        }

        return (
            <>
            <div className="singleStuffyView">
                
                <div className="singleStuffyImage" style={{backgroundImage: `url(${singleViewStuffyId.imageurl1})`}}></div>
                <div className="singleStuffyTableDiv">
                <button className="closeWindow" onClick={(e)=>{
                    setSingleStuffyViewActive(false)
                    setStuffiesArrayViewActive(true)}}>X</button>
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
                    <td className="buttonCell" key='buttonCell' colSpan="2"><button className="addItemToCart" onClick={handleClick}>Add Item To Cart</button></td>
                </tr>
                </tbody>
                </table>
                </div>
            </div>
            </>
        )
    }
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
                                setSingleViewStuffyId(stuffy);
                                setStuffiesArrayViewActive(false); 
                                setSingleStuffyViewActive(true)}}>{stuffy.name}</button>
                        </div>
                    )
                }))}

        </>
    )
}}

export default function Shop({stuffiesObj,setStuffiesObj}){
const [stuffiesArrayViewActive, setStuffiesArrayViewActive] = useState(true);
const [singleStuffyViewActive, setSingleStuffyViewActive] = useState(false);
const [singleViewStuffyId,setSingleViewStuffyId] = useState([""]);

useEffect(() => {
        
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