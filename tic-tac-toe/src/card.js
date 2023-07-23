import Icon from "./icon";
function Card({player}) {
    let icon=<Icon/>
    if (player=="x") {
        icon=<Icon name="cros"/>
    } else if(player=="o") {
        icon=<Icon name="circle"/>
    }
    return(
        <>
            {icon}
        </>
    );
}
export default Card;