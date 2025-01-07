import Link from "next/link";
import React from 'react'
import Image from "next/image";
const Connectlink = ({href, path}) => {
  return (
    <Link href={href} target="_blank"><Image src={path} alt={'let\'s connect'} width={40} height={40} className="border-2 p-1 rounded-full mx-3 mt-2 hover:bg-slate-600"></Image></Link>
  )
}

export default Connectlink;
