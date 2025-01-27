export default async function decorate(block) {
    console.log("Block is::::",block);
    const products = [
        {"id":1,"title":"Journey book","price":100,"description":"A perfect book to guide you for the transformation journey","category":"book","image":"/images/book.jpg","rating":3.9,"Availability":'In stock'},
        {"id":2,"title":"Laptop Bag","price":250,"description":"Laptop fitting bag for everyday use...","category":"Bag","image":"/images/bag.jpg","rating":4.1,"Availability":"Only 1 left in stock"},
        {"id":3,"title":"Fancy keychain","price":55,"description":"Fancy and Stylish keychain","category":"Keychain","image":"/images/keychain1.jpg","rating":4.3,"Availability":"Out of stock"},
        {"id":4,"title":"Pen","price":15,"description":"Different color pens available for display","image":"/images/pen.jpg","rating":4.4,"Availability":"In stock"}
        // {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://picsum.photos/200/300","rating":{"rate":4.6,"count":400}}
    ];
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    const header = !block.classList.contains('no-header');
    if (header) table.append(thead);
    table.append(tbody);
    const row = document.createElement('tr');
    let th = '';
      const headers = Object.keys(products[0]);
      console.log("Headers",headers);
      for(let i=0;i<headers.length;i++){
        th = document.createElement('th');
        th.append(headers[i].charAt(0).toUpperCase() + headers[i].slice(1));
        row.append(th);
      }

    //   Object.keys(products).forEach(key => {
    //     console.log(`${key}: ${JSON.stringify(products[key])}`);
    // });
      // console.log("Products:",Object.keys(products));
      // th.textContent = '';

      thead.append(row);
    // console.log("List items:::",...listItems);

    // Loop through products and create table rows
    products.forEach(product => {
      const row = document.createElement('tr');

    row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        <td>${product.category}</td>
        <td><img src="${product.image}" alt="${product.title}" width="50" /></td>
        <td>${product.rating}</td>
        <td>${product.Availability}</td>
        `;
        
        // <td>${product.rating.rate} (${product.rating.count})</td>
    tbody.appendChild(row); // Append the row to the table 
    
    block.innerHTML = '';
    block.append(table);
            });
          }