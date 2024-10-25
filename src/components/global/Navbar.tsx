import Image from "next/image"

type Props = {

}

export const Navbar = async(props: Props) => {
    return(
        <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
            <aside className="flex items-center gap-[2px]">
                <p className="text-3xl font-bold">Fu
                    <Image 
                    src="/fuzzieLogo.png"
                    width={15}
                    height={15}
                    alt="logo"
                    className="shadow-sm"
                    />
                    <p className="text-3xl font-bold">zie</p>
                </p>
            </aside>
            <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">

            </nav>
            
        </header>
    )
}