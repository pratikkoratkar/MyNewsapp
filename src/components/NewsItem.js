import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card my-3" style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>        
                       
            </div>
        )
    }
}
