////https://fakestoreapi.com/products
const api_url = "https://fakestoreapi.com/products";
// const text_api="./Subho.txt";
async function getUser() {
  // Making an API call (request)
  // and getting the response back
  const response = await fetch(api_url);

  // Parsing it to JSON format
  const data = await response.json();
  console.log(data);
  const html = data.map((user) => {
    return `
      <div class="single_product_container">
        <div class="product_header">
          <p>Rating: ${user.rating.rate}</p>
          <p>cart</p>
        </div>
        <div class="product_img">
          <img
            src=${user.image}
            alt=${user.title}
          />
        </div>
        <div class="product_description">
          <p>${user.title}</p>
          <p>${user.category}</p>
        </div>
      </div>
      `;
  });
  document
    .querySelector("#container")
    .insertAdjacentHTML("afterbegin",html);
}
console.log("This is script js");
getUser();
