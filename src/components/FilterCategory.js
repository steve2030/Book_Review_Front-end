import React, { useEffect } from "react"
//import image from '../images/retro-image.png'
import ReviewModal from "./ReviewModal"
import { useParams } from "react-router"
import { useNavigate } from 'react-router-dom';


export default function FilterCategory() {
    const [isOpen, setIsOpen] = React.useState(false)
    const {name} = useParams()
    
    console.log(">>>>>>>>>>>",name)
    

    const [cardInfo, setCardInfo] = React.useState({})

    useEffect(() => {
        fetch(`http://localhost:9292/book/category/${name}`)
        .then(res => res.json())
        .then(data => (setCardInfo(data)))
    }, [])

    console.log(cardInfo)

    return (
        <div>
            
            <div className='container'>
                <div className='row mx-5'>
                    {cardInfo}
                </div>

            </div>
          
        </div>
    );
}
