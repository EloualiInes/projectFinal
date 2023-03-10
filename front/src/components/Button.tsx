type TypeButton = {
    text : string;
    style ?: object; 
    onPress : () => void;
}

export default function Button({text, style, onPress} : TypeButton){
    return (
        <button style={style} onClick={onPress}>
            {text}
        </button>
    )
}