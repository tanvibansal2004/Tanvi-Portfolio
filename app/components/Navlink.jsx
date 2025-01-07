import Link from "next/link"

const Navlink = ({href, title}) =>{
    return(
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded-full md:p-0 hover:text-white hover:bg-zinc-800'>{title}</Link>
    );
};

export default Navlink;