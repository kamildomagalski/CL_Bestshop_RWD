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
  
  
  inputProducts.addEventListener('input', function () {
    const productPrice = 10.5
    summaryProducts.classList.add('open');
    productsItemCalc.innerText = `${inputProducts.value} * $${productPrice}`
    const productValue = inputProducts.value * productPrice
    productItemPrice.innerText = productValue + '$'

  })

  inputOrders.addEventListener('input', function () {
    const orderPrice = 5
    summaryOrders.classList.add('open');
    ordersItemCalc.innerText = `${inputOrders.value} * $${orderPrice}`
    const orderValue = inputOrders.value * orderPrice
    ordersItemPrice.innerText = orderValue + '$'
  })
  
  inputSelect.addEventListener('click', function (event) {
    selectList.classList.toggle('open');
    Array.from(selectList.children).forEach(function (el) {
      el.addEventListener('click', function (event) {
        
        let packagePrice;
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
      })
    })
  })
  
  checkboxAccounting.addEventListener('change', function () {
    const accountingPrice = 15
    summaryAccounting.classList.toggle('open')
    accountingItemPrice.innerText = accountingPrice + '$'
  })
  
  checkboxTerminal.addEventListener('change', function () {
    const terminalPrice = 5
    summaryTerminal.classList.toggle('open')
    terminalItemPrice.innerText = terminalPrice + '$'
    
  })

  totalElement.classList.add('open')
  
})
