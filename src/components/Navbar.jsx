import { Icons } from "../assets/Icons"
import { NavbarItem } from "./NavbarItem"

export function Navbar () {
  return (
    <nav class="flex flex-col overflow-hidden h-full">
      <div class="logo-container h-24 - pt-3">
				<NavbarItem icon={Icons.InstagramIcon}/>
			</div>
      <div class="flex flex-grow flex-col overflow-hidden">
        <NavbarItem icon={Icons.HomeIcon} name="Home"/>
        <NavbarItem icon={Icons.SearchIcon} name="Search"/>
        <NavbarItem icon={Icons.DiscoverIcon} name="Discover"/>
        <NavbarItem icon={Icons.ReelsIcon} name="Reels"/>
        <NavbarItem icon={Icons.DirectIcon} name="Direct"/>
        <NavbarItem icon={Icons.NotificationsIcon} name="Notifications"/>
        <NavbarItem icon={Icons.PublishIcon} name="Publish"/>
        <a class="profile h-12 p-3 my-1 text-white"> Perfil </a>
      </div>
      <div class="tools">
        <NavbarItem icon={Icons.ThreadsIcon} name="Threads"/>
				<NavbarItem icon={Icons.ConfigurationIcon} name="More"/>
			</div>
    </nav>
  )
}