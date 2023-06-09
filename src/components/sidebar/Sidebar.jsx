import sidebar_image from '../../assets/sidebar_image.jpeg'

const Sidebar = () => {

    return (

        <div className='flex-[1] mr-[80px] flex justify-end flex-row items-center'>
            <div className='w-1/2 flex flex-col items-center'>
                <span className='m-[10px] p-[5px] w-[80%] border-t-[1px]
                 border-b-[1px] border-[#a7a4a4] font-serif text-[12px] text-[#222] font-semibold leading-[20px] text-center'>ABOUT ME</span>
                <img
                    className='w-80 h-100 object-contain'
                    src={sidebar_image}
                    alt="" 
                />
                <p className='p-[10px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates libero fugiat sequi harum officiis tempora?
                </p>
            </div>
            <div className="flex flex-col items-center">
                <span className="sidebarTitle m-[10px] p-[5px] w-[80%] border-t-[1px]
                 border-b-[1px] border-[#a7a4a4] font-serif text-[12px] text-[#222] font-semibold leading-[20px] text-center">CATEGORIES</span>
                <ul className="sidebarList list-none mb-[30px] list-disc ">
                    <li className='line-block w-1/2 mt-[15px] cursor-pointer'>Life</li>
                    <li className='line-block w-1/2 mt-[15px] cursor-pointer'>Music</li>
                    <li className='line-block w-1/2 mt-[15px] cursor-pointer'>Style</li>
                    <li className='line-block w-1/2 mt-[15px] cursor-pointer'>Sport</li>
                    <li className='line-block w-1/2 mt-[15px] cursor-pointer'>Cinema</li>
                    <li className='line-block w-1/2 mt-[15px] cursor-pointer'>Tech</li>
                </ul>
            </div>


        </div>
    )
}

export default Sidebar
