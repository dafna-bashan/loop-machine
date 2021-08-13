
export const MixPreview = ({ mix, onSetMix, onRemoveMix }) => {
    return (
        <div className="mix-preview flex">
            <span onClick={() => onSetMix(mix._id)} className="full"> {mix.name}</span>
            <button onClick={() => onRemoveMix(mix._id)}>X</button>
        </div>
    )
}
