export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    if (!entities.length && entityType === 'loops') {
        entities = [
            {
                _id: _makeId(),
                name: 'Future funk beats',
                src: '../assets/audio/future-funk-beats.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Stutter breakbeats',
                src: '../assets/audio/stutter-breakbeats.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Heavy funk groove',
                src: '../assets/audio/heavy-funk-groove.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Electric Guitar',
                src: '../assets/audio/electric-guitar.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Stompy slosh',
                src: '../assets/audio/stompy-slosh.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Tanggu',
                src: '../assets/audio/tanggu.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Maze politics',
                src: '../assets/audio/maze-politics.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Groove',
                src: '../assets/audio/groove.mp3',
                isActive: false
            },
            {
                _id: _makeId(),
                name: 'Silent star',
                src: '../assets/audio/silent-star.mp3',
                isActive: false
            },

        ]
    }
    if (!entities.length && entityType === 'mixes') {
        entities = [
            {
                _id: 'Qu7a7',
                name: 'Best mix',
                // isActive: false,
                loops: [
                    { _id: 'J5jDA', name: 'Future funk beats', src: '../assets/audio/future-funk-beats.mp3', isActive: false },
                    { _id: 'tsm5A', name: 'Stutter breakbeats', src: '../assets/audio/stutter-breakbeats.mp3', isActive: false },
                    { _id: 'SY2RH', name: 'Heavy funk groove', src: '../assets/audio/heavy-funk-groove.mp3', isActive: false },
                    { _id: 'xmAd0', name: 'Electric Guitar', src: '../assets/audio/electric-guitar.mp3', isActive: false },
                    { _id: 'kuGSX', name: 'Stompy slosh', src: '../assets/audio/stompy-slosh.mp3', isActive: true },
                    { _id: 'PkAXQ', name: 'Tanggu', src: '../assets/audio/tanggu.mp3', isActive: false },
                    { _id: 'pzeZB', name: 'Maze politics', src: '../assets/audio/maze-politics.mp3', isActive: true },
                    { _id: 'KoKVa', name: 'Groove', src: '../assets/audio/groove.mp3', 'isActive': false },
                    { _id: 'I3IIL', name: 'Silent star', src: '../assets/audio/silent-star.mp3', isActive: false }]
            },
            {
                _id: "WN3lN",
                name: "My mix",
                // isActive: false,
                loops: [
                    { _id: "J5jDA", name: "Future funk beats", src: "../assets/audio/future-funk-beats.mp3", isActive: false },
                    { _id: "tsm5A", name: "Stutter breakbeats", src: "../assets/audio/stutter-breakbeats.mp3", isActive: true },
                    { _id: "SY2RH", name: "Heavy funk groove", src: "../assets/audio/heavy-funk-groove.mp3", isActive: false },
                    { _id: "xmAd0", name: "Electric Guitar", src: "../assets/audio/electric-guitar.mp3", isActive: false },
                    { _id: "kuGSX", name: "Stompy slosh", src: "../assets/audio/stompy-slosh.mp3", isActive: false },
                    { _id: "PkAXQ", name: "Tanggu", src: "../assets/audio/tanggu.mp3", isActive: true },
                    { _id: "pzeZB", name: "Maze politics", src: "../assets/audio/maze-politics.mp3", isActive: false },
                    { _id: "KoKVa", name: "Groove", src: "../assets/audio/groove.mp3", isActive: false },
                    { _id: "I3IIL", name: "Silent star", src: "../assets/audio/silent-star.mp3", isActive: true }]
            }, {
                _id: "6YLaA",
                name: "Demo",
                // isActive: false,
                loops: [
                    { _id: "J5jDA", name: "Future funk beats", src: "../assets/audio/future-funk-beats.mp3", isActive: false },
                    { _id: "tsm5A", name: "Stutter breakbeats", src: "../assets/audio/stutter-breakbeats.mp3", isActive: false },
                    { _id: "SY2RH", name: "Heavy funk groove", src: "../assets/audio/heavy-funk-groove.mp3", isActive: false },
                    { _id: "xmAd0", name: "Electric Guitar", src: "../assets/audio/electric-guitar.mp3", isActive: true },
                    { _id: "kuGSX", name: "Stompy slosh", src: "../assets/audio/stompy-slosh.mp3", isActive: true },
                    { _id: "PkAXQ", name: "Tanggu", src: "../assets/audio/tanggu.mp3", isActive: false },
                    { _id: "pzeZB", name: "Maze politics", src: "../assets/audio/maze-politics.mp3", isActive: true },
                    { _id: "KoKVa", name: "Groove", src: "../assets/audio/groove.mp3", isActive: false },
                    { _id: "I3IIL", name: "Silent star", src: "../assets/audio/silent-star.mp3", isActive: false }]
            }]
    }
    return Promise.resolve(entities)
}


function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}


function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}