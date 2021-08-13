import { LoopPreview } from "./LoopPreview"

export const LoopList = ({ loops, toggleIsActive, isPlaying }) => {
    return (
        <div className="loop-list">
            {loops.map(loop => <LoopPreview key={loop._id} loop={loop} toggleIsActive={toggleIsActive} isPlaying={isPlaying}/>)}
        </div>
    )
}
