
type Props = {
    text : string
}

export default function ButtonIcon({text} : Props) {
    return (
        <button>{text}</button>
    )
}