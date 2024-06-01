const address = document.getElementById('address');
const peringatan = document.getElementById('peringatan1');

const password = document.getElementById('password');
const peringatan2 = document.getElementById('peringatan2');

const tombol = document.getElementById('register');

address.addEventListener('input', function() {
    if (address.value == '') {
        peringatan.innerHTML = '';
    } else if (address.value.length < 5) {
        peringatan.innerHTML = '*Alamat harus lebih dari 10 karakter';
        peringatan.style.color = 'red';
        peringatan.style.fontSize = '0.7rem';
    } else {
        peringatan.innerHTML = '';
    }
});

password.addEventListener('input', function() {
    if (password.value == '') {
        peringatan2.innerHTML = '';
    } else if (password.value.length < 8) {
        peringatan2.innerHTML = '*Password harus lebih dari 8 karakter';
        peringatan2.style.color = 'red';
        peringatan2.style.fontSize = '0.7rem';
    } else {
        peringatan2.innerHTML = '';
    }
});