const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;


const getData = async () => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    //console.log(response)
    const data = await response.json();
    //console.log(data);


    data.map((curElm, index) => {
        const divData = `
        <div class = "child">
            <p>${postCount++}</p>
            <p>${curElm.body}</p>
        
        </div>`;
        container.insertAdjacentHTML('beforeend', divData);
    })
}
getData();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getData();
    }, 200)
}

window.addEventListener("scroll", () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight) {
        showData();
    }
})