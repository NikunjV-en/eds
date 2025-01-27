  // import {aaa} from '../categories/browse';
  
  
  export default async function decorate(block) {
    console.log("Block is::::",block);
    const categories = ['Electronics','Fashion','Groceries','Furniture'];
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
  
    const header = !block.classList.contains('no-header');
    if (header) table.append(thead);
    table.append(tbody);
    const row = document.createElement('tr');
      const th = document.createElement('th');
      th.textContent = 'Categories';
      row.append(th);
      thead.append(row);
    // console.log("List items:::",...listItems);
   
    const row2 = document.createElement('tr');
    categories.forEach((product) => {
        const td = document.createElement('td');
        td.textContent = product;
        row2.append(td);
      });
      row2.addEventListener('click',function(){
        // aaa('eletronics');
        location.href = '../ecommerce/categories/browse?category=electronics';
        // console.log("Row clicked::::");
      });
      // if (header) thead.append(Object.keys(product));
       tbody.append(row2);
      // [...child.children].forEach((col) => {
      //   console.log("Col data:::",col.innerHTML);
      //   const cell = buildCell(header ? product : product + 1);
      //   cell.innerHTML = col.innerHTML;
      //   row.append(cell);
      // });
    
    block.innerHTML = '';
    block.append(table);
  }