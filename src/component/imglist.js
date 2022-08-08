import React from 'react'
import ImgCard from './imgcard'

export const ImgList = props => {
    // console.log(props.images)

    // props.images props of data g pasa from app.js ⤵
    // { id, description, urls} - destructure in siya ⤵ 
    // const images = props.images.map(({ id, description, urls}) => {
    //     return <img key={id} src={urls.regular} alt={description} />
    // })

    const images = props.images.map(image => {
        return <ImgCard key={image.id} image={image}/>
    })

    return (
        <div className="image-list">{images}</div>
    )
}
