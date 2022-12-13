import {useContext} from "react"
import {FeedContext} from "../contexts/Feed"

export function useFeed() {
    const context = useContext(FeedContext)
    return context
}
