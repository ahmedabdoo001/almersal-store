
const productList = document.getElementById('product-list');

function addProduct() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const desc = document.getElementById('desc').value;

  if (!name || !price) {
    alert('يرجى إدخال اسم المنتج والسعر');
    return;
  }

  const product = document.createElement('div');
  product.className = 'product';
  product.innerHTML = `<h3>${name}</h3><p>${desc}</p><strong>السعر: ${price} جنيه</strong>`;
  productList.appendChild(product);

  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('desc').value = '';
}
