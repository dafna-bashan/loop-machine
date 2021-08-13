import { MixPreview } from "./MixPreview"

export const MixList = ({mixes, onSetMix, onRemoveMix}) => {
    return (
        <div className="mix-list flex column">
            {mixes.map(mix => <MixPreview key={mix._id} mix={mix} onSetMix={onSetMix} onRemoveMix={onRemoveMix}/>)}
        </div>
    )
}
