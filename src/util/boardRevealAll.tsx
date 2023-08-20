import { cellData } from "./createBoard";

function boardRevealAll(arr: Array<Array<cellData>> ){
    arr.forEach(subarr => {
        subarr.forEach(item => {
            item.revealed = true
        });
    });
}
export default boardRevealAll

