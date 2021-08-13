
export const LoopPreview = ({ loop, toggleIsActive, isPlaying }) => {

    const activeClass = loop.isActive ? 'active' : ''

    return (
        <div className={`loop-preview flex column align-center justify-center ${activeClass}`} onClick={() => toggleIsActive(loop)}>
            {loop.name}
            {isPlaying && <div className="pulse-circle"></div>}
        </div>
    )
}
