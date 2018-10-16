export const increment = id => {
    return {
        type: 'INCREMENT LIKES',
        id
    }
}

export const loadArticles = articles => {
    return {
        type: "LOAD ARTICLES",
        articles
    }
}