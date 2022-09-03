// const displayNews = news =>{
//     const newsContainer = document.getElementById('news-Container');
//     news.forEach(singleNews =>{
//         console.log(singleNews);
//         const newsDiv = document.createElement('div');
//         newsDiv.classList.add('row');
//         newsDiv.innerHTML = `
//         <div class="card mb-3 p-3" style="width: 100%;">
//         <div class="row g-0">
//           <div class="col-md-4">
//             <img src="${singleNews.thumbnail_url}" class="img-fluid rounded-start" alt="...">
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">${singleNews.title}</h5>
//               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//           </div>
//         </div>
//       </div>
//         `
//         newsContainer.appendChild(newsDiv);
//     })
// }