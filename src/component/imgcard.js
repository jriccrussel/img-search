import React, { Component } from 'react'

export class ImgCard extends Component {
    constructor(props){
        super(props)

        this.state = { spans: 0 }

        this.imageRef = React.createRef()
    }

    // image load then get the image height
    componentDidMount(){
        // console.log(this.imageRef)
        // get image height using clientHeight
        // console.log(this.imageRef.current.clientHeight)
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)
        this.setState({ spans })
    }

    render() {
        const { description, urls } = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    src={urls.regular} 
                    alt={description} 
                />
            </div>
        )
    }
}

export default ImgCard