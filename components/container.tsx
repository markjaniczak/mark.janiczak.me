import clsx from "clsx"

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...other }) => {
    return (
        <div className={clsx("container mx-auto max-w-screen-md", className)} {...other} />
    )
}
