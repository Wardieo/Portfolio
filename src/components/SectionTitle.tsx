import type{ReactNode}from'react'
export function SectionTitle({number,title,action}:{number:string;title:string;action?:ReactNode}){return <header className="section-title"><span>{number} — {title}</span>{action}</header>}
