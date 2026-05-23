document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const status = document.getElementById('status');
  const form = e.target;
  const formData = new FormData(form);

  status.textContent = "Sending...";
  status.style.color = "blue";

  try {
    // Using Formspree (Free & Easy) - Replace with your email below
    const response = await fetch('https://formspree.io/f/younglord581@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "❌ Failed to send. Try again.";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "❌ Something went wrong.";
    status.style.color = "red";
  }
});
