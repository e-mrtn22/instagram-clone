interface NavbarItemProps {
  name?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function NavbarItem ({name, icon: Icon}:NavbarItemProps) {

  return (
    <div className="h-12 p-3 my-1 hover:bg-neutral-800 hover:rounded-lg flex">
      <Icon/>
      <>
        {name != undefined
          ? <label className="pl-4 text-white max-xl:hidden"> {`${name}`} </label>
          : <></>  
        }
      </>
    </div>
  )
}