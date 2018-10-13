import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { bindActionCreators } from 'react';
import { connect } from "react-redux";
import * as bindActionCreators from '../../redux/actions/actionCreators';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import '../../css/articles.css';

class Articles extends Component {
    state = {
        articles: [],
        title: "",
        date: "",
        url: ""
    };

componentDidMount() {
    this.loadArticles();
}

loadArticles = () => {
    API.getArticles()
    .then(res => {
        const newArticles = res.data.map(article => {
            if (this.props.articles.lenght) {
                article.likes = (this.props.articles.find(search => search.id === article._id)) ?
                    this.props.articles.find(search => search._id).likes : 0;
            } else {
                articles.likes = 0;
            }
            return article;
        });
        this.props.loadArticles(newArticles);
    })
        .catch(err => console.log(err));
};
deleteArticle = id => {
    API.deleteArticle(id)
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
};
handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};
handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.url) {
        API.saveArticle({
            title: this.state.title,
            date: this.state.date,
            url: this.state.url
        })
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    }
};

render() {
    return (
        <Container fluid>
        <Row>
            <Col size="md-6">
            <Jumbotron>
                <h1>Article list</h1>
            </Jumbotron>
            <form>
                <Input
                 value={this.state.title}
                 onChange={this.handleInputChange}
                 name="title"
                 placeholder="Title (required)"
            />
            <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (required)"
            />
            <TextArea
                value={this.state.url}
                onChange={this.handleInputChange}
                name="url"
                placeholder="Link (required)"
            />
            <FormBtn
                disabled={!(this.state.title && this.state.date && this.state.url)}
                onClick={this.handleFormSubmit}
            >
                Submit Article
    )
}
}
