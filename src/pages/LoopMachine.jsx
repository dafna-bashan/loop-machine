import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LoopControlBtn } from "../cmps/LoopControlBtn"
import { LoopList } from "../cmps/LoopList"
import { loadItems, togglePlay, updateLoop, addMix, loadMix, loadMixes, removeMix } from '../store/actions/loopActions'
import { audioService } from "../services/audioService"
import { AddMix } from "../cmps/AddMix"
import { MixList } from "../cmps/MixList"

export const LoopMachine = () => {

    const isPlaying = useSelector(state => state.loopModule.isPlaying)
    const loops = useSelector(state => state.loopModule.loops)
    const mixes = useSelector(state => state.loopModule.mixes)
    const [startCycle, setStartCycle] = useState(0)
    const dispatch = useDispatch()
    const intervalId = useRef()

    useEffect(() => {
        console.log('mounted');
        dispatch(loadItems('loops'))
        dispatch(loadItems('mixes'))
        return () => {
            clearInterval(intervalId.current)
        }
    }, [])

    useEffect(() => {
        // console.log(loops);
        if (isPlaying) {
            playLoops()
            // console.log('playing');
            // let counter = 0
            // intervalId.current = setInterval(() => {
            //     console.log();
            //     if (counter === 8) {
            //         counter = 0
            //         playLoops()
            //     }
            //     setStartCycle(counter)
            //     counter++
            // }, 1000)
        } else {
            // console.log('not playing');
            // clearInterval(intervalId.current)
            // setStartCycle(0)
            loops.forEach(loop => {
                stopLoop(loop)
            })
        }
    }, [isPlaying])

    useEffect(() => {
        console.log('loops changed');
        const activeLoops = loops.filter(loop => loop.isActive === true)
        console.log(activeLoops);
    }, [loops])


    const onTogglePlay = (isPlaying) => {
        dispatch(togglePlay(isPlaying))
    };

    const playLoops = () => {
        console.log(loops);
        const activeLoops = loops.filter(loop => loop.isActive === true)
        console.log(activeLoops);
        activeLoops.forEach(loop => {
            playLoop(loop)
        })
    }

    const playLoop = (loop) => {
        if (!isPlaying) return
        var audio = getAudioSrc(loop.name)
        audio.play()
        audio.loop = true
    }

    const stopLoop = (loop) => {
        var audio = getAudioSrc(loop.name)
        audio.pause()
        audio.currentTime = 0
    }

    const toggleIsActive = (loop) => {
        const updatedLoop = { ...loop }
        updatedLoop.isActive = !updatedLoop.isActive
        // console.log(updatedLoop.name, updatedLoop.isActive);
        dispatch(updateLoop(updatedLoop))
        // playPauseLoop(updatedLoop)
        if (!updatedLoop.isActive) stopLoop(updatedLoop)
        else playLoop(updatedLoop)

    }

    const onAddMix = (mixName) => {
        const newMix = {
            name: mixName,
            // isActive: true,
            loops
        }
        dispatch(addMix(newMix))
    }

    const onSetMix = (mix) =>{
        // console.log('onset mix');
        dispatch(loadMix(mix))
    }

    const onRemoveMix = (mixId) =>{
        dispatch(removeMix(mixId))
    }

    const getAudioSrc = (loopName) => {
        switch (loopName) {
            case 'Electric Guitar':
                return audioService.electricGuitar
            case 'Future funk beats':
                return audioService.futureFunkBeats
            case 'Groove':
                return audioService.groove
            case 'Heavy funk groove':
                return audioService.heavyFunkGroove
            case 'Stutter breakbeats':
                return audioService.stutterBreakbeats
            case 'Tanggu':
                return audioService.tanggu
            case 'Silent star':
                return audioService.silentStar
            case 'Maze politics':
                return audioService.mazePolitics
            case 'Stompy slosh':
                return audioService.stompySlosh
            default:
                break;
        }
    }

    return (
        <div className="loop-machine ">
            <div className="control flex align-center justify-center">
                <LoopControlBtn isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
                {/* <h1>{startCycle}</h1> */}
            </div>
            <LoopList loops={loops} toggleIsActive={toggleIsActive} isPlaying={isPlaying} />
            <AddMix onAddMix={onAddMix}/>
            <h1>Saved Mixes</h1>
            <MixList mixes={mixes} onSetMix={onSetMix} onRemoveMix={onRemoveMix}/>
        </div>
    )
}

