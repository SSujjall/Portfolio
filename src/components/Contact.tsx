import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/payggwna"
                    method="POST"
                    className="flex flex-col w-8/12 md:w-8/12 lg:w-5/12"
                >
                    <Title id="contact">Contact</Title>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 
                        rounded-md focus:outline-none"
                        required
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 
                        rounded-md focus:outline-none"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        cols={30}
                        rows={10}
                        className="p-2 mb-4 bg-transparent border-2 
                        rounded-md focus:outline-none resize-none"
                        required
                    />

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="text-center inline-block px-8 
                            py-3 w-max text-base font-medium rounded-md
                            text-white dark:text-black bg-stone-900 dark:bg-stone-100">
                            Work with me
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;