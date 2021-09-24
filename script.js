const API_URL='https://randomuser.me/api?results=50'
const result=document.getElementById("result");
const filter=document.getElementById("filter");

const listItems=[];
getData();
filter.addEventListener('input', (e)=>filterData(e.target.value))
 async function getData()
 {
    const res=await fetch(API_URL)
    const {results} =await res.json();
    //initially clear results
    result.innerHTML=``;
    results.forEach(user => {
        // console.log(user);
        const li=document.createElement('li');
        //push li items
        listItems.push(li);
        li.innerHTML=`<img src="${user.picture.large}" alt="" height="300px">
                 <div class="user-info">
                     <h4>${user.name.first}${user.name.last}</h4>
                     <p>${user.location.city},${user.location.country}</p>
                 </div>`
                 result.appendChild(li)

        
    });
 }
 
 async function filterData(searchTerm)
 {
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
        {
            item.classList.remove('hide')
        }
        else
        {
            item.classList.add('hide')
        }
    })
 }


 