import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Morelink = ({href, path}) => {
  return (
    <Link href={href} target="_blank"><Image src={path}alt={'let\'s connect'} width={70} height={70} className="p-1 mx-3 mt-2 rounded-full hover:bg-black"></Image></Link>
  )
}
export default Morelink;