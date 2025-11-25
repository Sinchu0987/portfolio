// Dark Mode Toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact Form Submission
const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  try {
    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    if (res.ok) {
      responseMsg.textContent = data.success;
      responseMsg.style.color = "green";
      form.reset();
    } else {
      responseMsg.textContent = data.error;
      responseMsg.style.color = "red";
    }
  } catch (err) {
    responseMsg.textContent = "Server error. Try again later.";
    responseMsg.style.color = "red";
  }
});
