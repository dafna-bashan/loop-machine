
export const LoopControlBtn = ({ isPlaying, onTogglePlay }) => {
    return (
        <div className="control-btn">
            <div className="btn-wrapper">
            <button className={isPlaying? 'stop' : 'play'} onClick={() => onTogglePlay(!isPlaying)}></button>
            </div>
        </div>
    )
}
