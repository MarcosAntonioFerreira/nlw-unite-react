import { ComponentProps } from "react"

interface NavLinkprops extends ComponentProps<'a'>{
    children: string
    href: string
}

export function NavLink(props: NavLinkprops){
    return (
        <a {...props} className="font-medium text-sm text-zinc-300" >
            {props.children}
        </a>
    )
}