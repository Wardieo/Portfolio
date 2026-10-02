import type{ReactNode}from'react'
export function ExternalLink({href,children,className=''}:{href:string;children:ReactNode;className?:string}){return <a href={href} className={className} target={href.startsWith('#')?undefined:'_blank'} rel={href.startsWith('#')?undefined:'noopener noreferrer'}>{children} <span aria-hidden="true">↗</span></a>}
