import React, { useEffect } from "react"
import Card from './Card'

import { useParams } from "react-router"


export default function FilterCategory() {
    
    const {name} = useParams()
    const [cat, setCat] = React.useState([])

    console.log(">>>>>>>>>>>",name)
    


    useEffect(() => {
        fetch(`http://localhost:9292/book/category/${name}`)
        .then(res => res.json())
        .then(data => (setCat(data)))
    }, [])

    const cards = cat.map(item => {
        return (
            <Card 
                key={item.id}
                id = {item.id}
                image_url = {item.image_url}
                genre = {item.genre}
                rating = {item.pages}
                title = {item.title}
                
            />
        )
    })
    console.log(cat)

    return (
        <div>
            
            <div className='container'>
                <p className="text-center h4">{name}</p>
                <div className='row mx-5'>
                    {cards}
                </div>

            </div>
          
        </div>
    );
}
