import React, { useState } from 'react'

export default function formsection(props) {
  const [text, setText] = useState("");
  
  
  const handleUpclick = () => {
    const newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "Success")
  }
  const handleClearClick = () => {
    setText(""); 
     props.showAlert("Clear text", "Success");
  };
  const handleRemoveSpacesClick = () => {
    const cleanedString = text.replace(/\s+/g, " ");
    setText(cleanedString);
  }
  

  const handleonChnage = (event) => {
    // console.log("On change")
    setText(event.target.value)
  }

  return (
    <>
      <section className={` ${props.mode} dark:bg-gray-900`}>
        <div
          className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"
          style={{ color: props.mode == "dark" ? "white" : "black" }}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            {props.heading}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            {/* <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div> */}
            {/* <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div> */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                value={text}
                onChange={handleonChnage}
              ></textarea>
            </div>
            <div className="!mt-3">
              <h4 className="text-3xl font-semibold text-red-500">
                Text summary
              </h4>
              <p className="text-sm">
                {text.split(" ").length}word and {text.length} characters
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                onClick={handleUpclick}
              >
                Case Change
              </button>
              <button
                type="button"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-500 sm:w-fit hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-primary-800"
                onClick={handleClearClick}
              >
                Clear Text
              </button>
              <button
                type="button"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                onClick={handleRemoveSpacesClick}
              >
                Remove space
              </button>
            </div>
          </form>
          {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Convert 
          </button> */}
        </div>
      </section>
    </>
  );
}
