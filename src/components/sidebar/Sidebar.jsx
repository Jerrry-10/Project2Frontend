import sidebar_image1 from '../../assets/sidebar_image1.jpeg'

const Sidebar = () => {

    return (
        <div className='sidebar flex-[3] m-[20px] pb-[30px] bg-[#fdfbfb] rounded-[10px] flex flex-col items-center'>
            <div className='sidebarItem flex flex-col items-center'>
                <span className='sidebarTitle m-[10px] p-[5px] w-[80%] border-t-[1px]
                 border-b-[1px] border-[#a7a4a4] font-serif text-[12px] text-[#222] font-semibold leading-[20px] text-center'>ABOUT ME</span>
                <img
                    className='mt-[15px]'
                    src={sidebar_image1}
                    alt="" 
                />
                <p className='p-[30px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptates libero fugiat sequi harum officiis tempora?
                </p>
            </div>
            <div className="sidebarItem flex flex-col items-center">
                <span className="sidebarTitle  m-[10px] p-[5px] w-[80%] border-t-[1px]
                 border-b-[1px] border-[#a7a4a4] font-serif text-[12px] text-[#222] font-semibold leading-[20px] text-center">CATEGORIES</span>
                <ul className="sidebarList list-none mb-[30px]">
                    <li sidebarListItem className='line-block w-1/2 mt-[15px] cursor-pointer'>Life</li>
                    <li sidebarListItem className='line-block w-1/2 mt-[15px] cursor-pointer'>Music</li>
                    <li sidebarListItem className='line-block w-1/2 mt-[15px] cursor-pointer'>Style</li>
                    <li sidebarListItem className='line-block w-1/2 mt-[15px] cursor-pointer'>Sport</li>
                    <li sidebarListItem className='line-block w-1/2 mt-[15px] cursor-pointer'>Cinema</li>
                    <li sidebarListItem className='line-block w-1/2 mt-[15px] cursor-pointer'>Tech</li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar


