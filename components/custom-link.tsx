import Link from 'next/link'

export const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...props }) => {

    let Component: React.ElementType = Link

    const linkProps = {
        href,
        ...props,
    }

    if (!href.startsWith('/')) {
        Component = "a"
        linkProps.target = "_blank"
        linkProps.rel = "noopener"
    }

    return <Component {...linkProps}/>
}
