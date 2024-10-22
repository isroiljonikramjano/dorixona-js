document.getElementById('calculate').addEventListener('click', function() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);

    const resultDiv = document.getElementById('result');

    if (quantity <= 0) {
        resultDiv.textContent = 'Tovar qolmadi';
    } else {
        const totalPrice = quantity * price;
        resultDiv.textContent = `${product} - Jami narx: ${totalPrice.toFixed(2)} so'm`;
    }
});
