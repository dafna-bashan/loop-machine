import { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LoopControlBtn } from "../cmps/LoopControlBtn"
import { LoopList } from "../cmps/LoopList"
import { loadLoops, togglePlay, updateLoop } from '../store/actions/loopActions'
import { audioService } from "../services/audioService"

export const LoopMachine = () => {

    const isPlaying = useSelector(state => state.loopModule.isPlaying)
    const loops = useSelector(state => state.loopModule.loops)
    const [startCycle, setStartCycle] = useState(0)
    const dispatch = useDispatch()
    const intervalId = useRef()

    useEffect(() => {
        dispatch(loadLoops())
        return () => {
            clearInterval(intervalId.current)
        }
    }, [])

    useEffect(() => {
        // console.log(loops);
        if (isPlaying) {
            playLoops()
            // console.log('playing');
            let counter = 0
            intervalId.current = setInterval(() => {
                if (counter === 8) {
                    counter = 0
                    playLoops()
                    // loops.forEach(loop => {
                    //     playPauseLoop(loop)
                    // })
                }
                setStartCycle(counter)
                // console.log('count', startCycle);
                counter++
                // setTimeout(() => setStartCycle(false), 100)
            }, 1000)
        } else {
            // console.log('not playing');
            clearInterval(intervalId.current)
            setStartCycle(0)
            loops.forEach(loop => {
                stopLoop(loop)
            })
        }
    }, [isPlaying])

    useEffect(() => {
        // console.log(loops);
        // loops.forEach(loop => {
        //     playPauseLoop(loop)
        // })
        const activeLoops = loops.filter(loop => loop.isActive === true)
        console.log(activeLoops);
    }, [loops])


    const onTogglePlay = (isPlaying) => {
        dispatch(togglePlay(isPlaying))
    };


    // const playPauseLoop = (loop) => {
    //     var audio = getAudioSrc(loop.name)
    //     console.log('count in play', startCycle);
    //     // console.log(loop);
    //     console.log(loop.isActive, isPlaying, startCycle);
    //     if (loop.isActive && isPlaying && !startCycle) {
    //         console.log('playing', loop.name);
    //         audio.play()
    //         audio.loop = true
    //     } else {
    //         audio.pause()
    //         audio.currentTime = 0
    //         // console.log('pausing', loop.name);

    //     }
    // }

    const playLoops = () => {
        console.log(loops);
        const activeLoops = loops.filter(loop => loop.isActive === true)
        console.log(activeLoops);
        activeLoops.forEach(loop => {
            var audio = getAudioSrc(loop.name)
            audio.play()
        })
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
        <div>
            <h1>welcome to the loop machine!</h1>
            <h1>{startCycle}</h1>
            <LoopControlBtn isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
            <LoopList loops={loops} toggleIsActive={toggleIsActive} />
        </div>
    )
}

