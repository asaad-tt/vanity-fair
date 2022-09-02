const loadNewsCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category);
}

const displayCategory = categories =>{
    // console.log(category);
    for(const category of categories ){
        console.log(category.category_name);
    }
}

loadNewsCategory();