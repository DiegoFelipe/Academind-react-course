# Redux

## Read State from Global Store

- import { useSelector } from "react-redux"
- const price = useSelector(state => state.ITEM.price)
- ITEM = slice name

## Dispatch action to Global Store

- import { useDispatch } from "react-redux"
- ======== Import the action from slice:
- import { uiActions } from "../slice/uiSlice"
- ======== Create dispatch variable:
- const dispatch = useDispatch()
- ======== Dispatch the action:
- dispatch(uiActions.TOGGLE())
- TOGGLE = method from slice, inside reducers key when creating the slice.
