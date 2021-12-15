function Form() {
  const registerUser = async (event) => {
    event.preventDefault();
    console.log("form submitted");
  };

  return (
    <form className="form" onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        type="text"
        autoComplete="message"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
