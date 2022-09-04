// api call and category display ----------------
const loadNewsCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data.data.news_category);
}

// const categoryName = 
const displayCategory = categories =>{
    console.log(categories);
   const menuCategory = document.getElementById('all-category')
    
    for(const category of categories ){
        console.log(category.category_id);
        const li = document.createElement('li');
        li.innerHTML = `
        <a onclick='loadNewsDetails("${category.category_id}")' class="nav-link" href="#">${category.category_name}</a>
        `
        menuCategory.appendChild(li);
        
        
    }
    
}
// ------------------------------***************

// load news data (category wise show korar jonno) ----
const loadNewsDetails = async(id) =>{
     toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}


const displayNews = news =>{
  // console.log(news);
      // const shortItem = news;
      // news.short((a, b) =>{
      //   return b.total_view - a.total_view
      // })
      // console.log(shortItem);
  
    const newsContainer = document.getElementById('news-Container');
    newsContainer.textContent = '';

    // no found message show 
    const noNewsFound = document.getElementById('no_news');
    if(news.length === 0){
      noNewsFound.classList.remove('d-none');
      // noNewsFound.textContent ="";
    }
    else{
      noNewsFound.classList.add('d-none');
    }
    toggleSpinner(false);
    // count category news
    const countNews = document.getElementById('count_news');
    countNews.innerText = `${news.length} items found for this category`;

    news.forEach(singleNews =>{
        console.log(singleNews);
     


        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="card mb-3 p-3" style="width: 100%;">
        <div class="row g-0">
          <div class="col-lg-4 col-md-4">
            <img src="${singleNews.thumbnail_url}" class="card_img img-fluid rounded-start" alt="...">
          </div>
          <div class="col-lg-8 col-md-8">
            <div class="card-body">
              <h5 class="card-title">${singleNews.title}</h5>
              <p class="card-text">${singleNews.details.length > 400? singleNews.details.slice(0, 400) + '...' : singleNews.details }</p>
        
              <div class="row">

                <div class="col-md-4">
                  <div class="row">
                     <div class="col-md-4">
                        <img class="autor_img img-fluid"  src="${singleNews.author.img}" alt="">
                      </div>
                     <div class="col-md-8">
                       <p class="author_name">${singleNews.author.name ? singleNews.author.name : 'name not found' }</p>
                       <p class="date lh-1">${singleNews.author.published_date ? singleNews.author.published_date : 'date not found'}</p>
                     </div>
                  </div>
               </div>
               <div class="col-md-4">
                  <span><i class="fa-solid fa-eye"></i></span>
                  <span>${singleNews.total_view ? singleNews.total_view : "no views"}</span>
               </div>
               <div class="col-md-4">
                    <button onclick="showModal('${singleNews._id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newsDetailModal">
                    Show Detail
                    </button>
               </div>

              </div>
            </div>
          </div>
        </div>
      </div>
        `
        newsContainer.appendChild(newsDiv);
        toggleSpinner(false);
    })
   
    
}




const showModal = async(id) =>{
  const url = `https://openapi.programming-hero.com/api/news/${id}`
    const res = await fetch(url);
    const data = await res.json();
  //  console.log(data.data.news_category[0].category_id);
  displayModal (data.data);
}

const displayModal = modals =>{
    // console.log(modals);
    const modalContainer = document.getElementById('modal_container')
    modals.forEach(modal =>{
      // console.log(modal);
    const modalTitle = document.getElementById('newsDetailModalLabel')
    modalTitle.innerText = modal.title;
    const modalImage = document.getElementById('modal_image')
    modalImage.innerHTML = `
    <img class="img-fluid" src="${modal.image_url}" alt="">
    `
    const modalDescription = document.getElementById('modal_description');
    modalDescription.innerHTML = modal.details;
    const modalAuthor = document.getElementById('author_detail')
    modalAuthor.innerHTML = `
    <div class="col-md-4">
       <img class="img-fluid" src="${modal.author.img}" alt="">
    </div>
    <div class="col-md-4">
      <p class="author_name">${modal.author.name ? modal.author.name : 'name not found' }</p>
      <p class="lh-1">${modal.author.published_date ? modal.author.published_date : 'date not found'}</p>
    </div>
    <div class="col-md-4">
      <span><i class="fa-solid fa-eye"></i></span>
      <span>${modal.total_view ? modal.total_view : "no data found"}</span>
    </div>
    `
     
    })
    
}


const toggleSpinner = isLoading => {
  const loaderItem = document.getElementById('loader');
  if(isLoading){
    loaderItem.classList.remove('d-none');
  }
  else{
    loaderItem.classList.add('d-none');
  }
}

loadNewsCategory();
loadNewsDetails('01');




