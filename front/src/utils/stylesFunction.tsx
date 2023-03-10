export const styleButton = (mode : number) => {

    if(mode === 0){
        return {
            color : "#9B7278",
            background : "white",
            border : "none",
            outline : "none"
        }
    }
    return ({
        color : "white",
        background : "#9B7278",
        padding : "10px 20px",
        border : "none",
        boxShadow : "1px 2px 1px rgba(0,0,0,0.4)",
        borderRadius : "2px"
    });
}