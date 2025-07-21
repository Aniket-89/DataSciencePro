const FormComponent = () => {
  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border-b-1"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border-b-1"
      />
      <textarea
        name="message"
        placeholder="Tell us about your project"
        required
        className="border-b-1 resize-none h-32"
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
