import * as React from "react";

function NewsletterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 my-auto text-base max-md:max-w-full">
      <div className="relative">
        <label htmlFor="emailInput" className="sr-only">
          Your mail address
        </label>
        <input
          type="email"
          id="emailInput"
          className="grow px-6 py-5 bg-white rounded-md text-neutral-600 w-fit max-md:px-5"
          placeholder="Your mail address"
          required
          aria-label="Your mail address"
        />
      </div>
      <button
        type="submit"
        className="px-10 py-5 whitespace-nowrap bg-white rounded-md text-neutral-800 max-md:px-5"
      >
        Send
      </button>
    </form>
  );
}

export default NewsletterForm;