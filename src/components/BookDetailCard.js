import React, { useEffect } from "react"
//import image from '../images/retro-image.png'
import ReviewModal from "./ReviewModal"
import { useNavigate, useParams } from "react-router";

export default function BookDetailCard() {
    const [isOpen, setIsOpen] = React.useState(false)
    const {id} = useParams()
    const navigate = useNavigate()
    const [cardInfo, setCardInfo] = React.useState({})
    useEffect(() => {
        fetch(`http://localhost:9292/book/${id}`)
        .then(res => res.json())
        .then(data => (setCardInfo(data)))
    }, [])
    console.log(cardInfo)
    function handleDeleteClick(){
      fetch(`http://localhost:9292/book/${id}`,{
        method: "DELETE"
      })
      navigate("/booklist")
    }

    const [review, setReview] = React.useState({id:''})
    function handleChange(event) {
        setReview(event.target.value)
    }

    function handleSubmitReview(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/review/${id}`, {
            method: "POST",
            body: JSON.stringify({
                review: review
            },)
        })
    }
    return (
        <div className='book-data my-5'>
          <img src={cardInfo.image_url}/>
          <div className='book-details'>
            <h2 className='book-title review-page'>{cardInfo.title}</h2>
            <p className='author-info review-page'><em>By {cardInfo.publisher}</em></p>
            <p className='review-page'>Description</p>
            <div className='review-page span-element'>
              <p><em>{cardInfo.genre}</em></p>
              <p>4.5</p>
            </div>
            <p>{cardInfo.description}</p>
            <div className='buttons review'>
              <div>
                <button className='btn btn-primary' onClick={()=>setIsOpen(true)}>Review Book</button>
                <ReviewModal open={isOpen} onClose={()=>setIsOpen(false)} className='modal'>
                    <form onSubmit={handleSubmitReview}>
                        <textarea placeholder='Write Review' onChange={handleChange} ></textarea>
                        {/* <button className='green book-btn' onClick={onClose}>Review</button> */}
                    </form>
                </ReviewModal>
              </div>
              <button className='btn btn-danger' onClick={handleDeleteClick}>Delete Book</button>
            </div>
          </div>
        </div>
    )
}