import sidebar_image1 from '../../assets/sidebar_image1.jpg'

const Sidebar = () => {

    return (
        <div className="sidebar flex-[3] m-[20]">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src={sidebar_image1}
                    alt="" 
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis voluptatem quo nostrum ex a!
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
                    </ul>
            </div>
            
        </div>
    )
}

export default Sidebar