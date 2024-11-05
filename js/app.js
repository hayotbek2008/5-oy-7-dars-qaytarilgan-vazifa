function displayInfo() {
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <img src="https://picsum.photos/200/300" alt="">

    <h3>Ma'lumotlaringiz:</h3>
    <p><strong>Ism:</strong> ${name}</p>
    <p><strong>Familiya:</strong> ${surname}</p>
    <p><strong>Telefon raqami:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
  `
}