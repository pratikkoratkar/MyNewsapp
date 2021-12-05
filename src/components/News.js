import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export default class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
     
    constructor(){
        super();
        this.state={
            articles: [],
            loading: false,
            page:1        
        }
    }

    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e62205d46b6341efa760bb5b1a5e0189&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData= await data.json()
        console.log(parsedData)
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
    })
    }

    handlePreviousClick = async()=>{
        console.log("previouss")
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e62205d46b6341efa760bb5b1a5e0189&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData= await data.json()
        this.setState({
            articles:parsedData.articles,
            page: this.state.page-1,
            loading: false
        })
        
    }
    handleNextClick = async()=>{
        console.log("next")
        if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e62205d46b6341efa760bb5b1a5e0189&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            this.setState({loading:true})
            let data= await fetch(url)
            let parsedData= await data.json()
            this.setState({
                articles:parsedData.articles,
                page: this.state.page+1,
                loading:false
            })

        }


    }
    

    render() {
        return (
            <div className="container my-3">
                <h1 className=" text-center my-3">NEWS - Top Headlines</h1>
                {this.state.loading && <Spinner/>}             
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                    
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}
