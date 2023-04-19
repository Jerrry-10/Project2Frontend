const Contact = () => {

    return (
        <div className="h-[1000px]">
            <h1 className="text-center text-violet-700 font-semibold text-[20px] mt-[20px]">CONTACT</h1>
            <div class="border-b border-gray-400 w-[1000px] mx-auto w-1/2 mt-[20px]"></div>

            <p className="mt-[20px] mx-auto w-1/2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero repudiandae officia nulla quis 
                omnis libero quos nam dignissimos fuga tenetur inventore, tempora mollitia at cupiditate quasi 
                necessitatibus animi distinctio quam! Aspernatur vero rem illum dicta eum? Explicabo quos modi,
                maxime voluptatibus sint accusamus, dicta voluptatem placeat corrupti nihil doloremque odio..
            </p>

            <div className="mx-auto w-1/2 mt-[20px] mb-[20px]">
                <p><strong className="text-violet-700">Email:</strong> info@random123.com</p>
                <p><strong className="text-violet-700">Phone:</strong> 123-123-123</p>
                <p><strong className="text-violet-700">Fax:</strong> 123-123-123</p>
                <p><strong className="text-violet-700">Staten Island Office</strong></p>
                <p>123 Main Street, Main, NY 10000</p>
            </div>

            <div className="mx-auto w-1/2">
                <h1 className="text-center font-semibold text-[20px] text-violet-700 mb-[10px]">
                    What You Get When Asking Your Question
                </h1>

                <ul className="list-disc">
                    <li>Less than 12-hour response to your question.</li>
                    <li>Thoroughness and expertise of a Certified Exchange Specialist</li>
                    <li>Plan of action summarized in an email follow up.</li>
                </ul>

                <div>

                    <label class="mt-[30px] block text-violet-700 font-bold mb-2" for="first_name">First Name</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="Enter your first name"></input>
                    
                    <label class="mt-[30px] block text-violet-700 font-bold mb-2" for="first_name">Last Name</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="Enter your last name"></input>
                    
                    <label class="mt-[30px] block text-violet-700 font-bold mb-2" for="first_name">Email Address</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="Enter your email address"></input>
                    
                    <label class="mt-[30px] block text-violet-700 font-bold mb-2" for="first_name">Phone Number</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
                    focus:outline-none focus:shadow-outline" id="first_name" type="text" placeholder="Enter your Phone Number"></input>

                    <label for="property" className=" mt-[30px] block text-violet-700 font-bold mb-2">What is the issue you are dealing with?</label>
                    <select name="property" id="property" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">Select an issue</option>
                    <option value="house">Lorem, ipsum dolor.</option>
                    <option value="apartment">Lorem, ipsum.</option>
                    <option value="condo">Lorem ipsum dolor sit.</option>
                    <option value="land">Lorem, ipsum dolor.</option>
                    </select>

                    
                    

                </div>
                
            </div>
        </div>
    )
}

export default Contact