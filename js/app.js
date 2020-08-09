document.addEventListener('DOMContentLoaded', function () {
  
  const inputProducts = document.getElementById('products')
  const inputOrders = document.getElementById('orders')
  const inputSelect = document.querySelector('.select-input');
  const checkboxAccounting = document.getElementById('accounting');
  const checkboxTerminal = document.getElementById('terminal');
  const totalElement = document.getElementById('total-price');
  
  const summaryProducts = document.querySelector('[data-id="products"]');
  const summaryOrders = document.querySelector('[data-id="orders"]');
  const summaryPackage = document.querySelector('[data-id="package"]');
  const summaryAccounting = document.querySelector('[data-id="accounting"]');
  const summaryTerminal = document.querySelector('[data-id="terminal"]');
  
  const selectList = document.querySelector('.select-dropdown');
  
  
  const productsItemCalc = summaryProducts.querySelector('.item-calc');
  const productItemPrice = summaryProducts.querySelector('.item-price');
  
  const ordersItemCalc = summaryOrders.querySelector('.item-calc');
  const ordersItemPrice = summaryOrders.querySelector('.item-price');
  
  const packageItemCalc = summaryPackage.querySelector('.item-calc');
  const packageItemPrice = summaryPackage.querySelector('.item-price');
  
  const accountingItemPrice = summaryAccounting.querySelector('.item-price');
  const terminalItemPrice = summaryTerminal.querySelector('.item-price');
  
  const totalPrice = totalElement.querySelector('.total-price');
  
  let productValue= 0;
  let orderValue=0;
  let packagePrice=0;
  let accountingPrice=0;
  let terminalPrice=0;
  
  const sumFunction= function (){
    let summary = productValue + orderValue + packagePrice + accountingPrice + terminalPrice;
    totalElement.classList.add('open')
    summary===0 ? totalElement.classList.remove('open'): null;
    return totalPrice.innerText = summary + '$';
  }
  inputProducts.addEventListener('input', function () {
    const productPrice = 10.5
    summaryProducts.classList.add('open');
    productsItemCalc.innerText = `${inputProducts.value} * $${productPrice}`
    productValue = inputProducts.value * productPrice
    productValue===0 ? summaryProducts.classList.remove('open'): null;
    productItemPrice.innerText = productValue + '$'
    sumFunction();
  })
  inputOrders.addEventListener('input', function () {
    const orderPrice = 5
    summaryOrders.classList.add('open');
    ordersItemCalc.innerText = `${inputOrders.value} * $${orderPrice}`
    orderValue = inputOrders.value * orderPrice
    orderValue===0 ? summaryOrders.classList.remove('open'): null;
    ordersItemPrice.innerText = orderValue + '$'
    totalPrice.innerText = orderValue;
    sumFunction();
  })
  inputSelect.addEventListener('click', function (event) {
    selectList.classList.toggle('open');
    Array.from(selectList.children).forEach(function (el) {
      el.addEventListener('click', function (event) {
        
        if (event.target.innerText === 'Professional') {
          packagePrice = 25
        } else if (event.target.innerText === 'Premium') {
          packagePrice = 60
        } else {
          packagePrice = 0
        }
        summaryPackage.classList.add('open');
        packageItemCalc.innerText = event.target.innerText
        packageItemPrice.innerText = packagePrice.innerText = packagePrice + '$'
        inputSelect.innerText = event.target.innerText
        selectList.classList.remove('open')
        sumFunction();
      })
    })
  })
  checkboxAccounting.addEventListener('change', function () {
    summaryAccounting.classList.toggle('open')
    checkboxAccounting.checked ? accountingPrice = 15 : accountingPrice = 0;
    accountingItemPrice.innerText = accountingPrice + '$'
    sumFunction()
  })
  checkboxTerminal.addEventListener('change', function () {
    terminalPrice = 5
    summaryTerminal.classList.toggle('open')
    terminalItemPrice.innerText = terminalPrice + '$'
    checkboxTerminal.checked ? terminalPrice = 15 : terminalPrice = 0;
    sumFunction();
  })
})
