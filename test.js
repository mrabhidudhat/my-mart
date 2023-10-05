const data = {
  email: "sanket_talaviya@gmail.com",
  password: "sanket123",
};

async function abc() {
  const response = await fetch(
    "https://auth-genius.vercel.app/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  console.log(result);
}

abc();
