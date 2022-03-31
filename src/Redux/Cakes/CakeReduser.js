import { strings } from "./CakeType";
const cakeInitState = {
    numCake: 10,
  };
const reduser = (state = cakeInitState,Actions) =>{
    switch(Actions.type)
    {
        case strings.BuyCake:return{
            ...state,
            numCake:state.numCake-1
        }
    }
}
export default reduser