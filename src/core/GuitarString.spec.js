import Note from './Note'
import GuitarString from './GuitarString'

describe('when creating a new guitar string object', () => {
    describe('when creating a string with the root note e', () => {
        const guitarString = GuitarString('E', 24)

        it('should return e for index 11', () => {
            const actual = guitarString.noteAtFret(11).toString()
            expect(actual).toBe('D#')
        })

        it('should return E for index 12', () => {
            const actual = guitarString.noteAtFret(12).toString()
            expect(actual).toBe('E')
        })

        it('should return f for index 13', () => {
            const actual = guitarString.noteAtFret(13).toString()
            expect(actual).toBe('F')
        })
    })
})

it('should always be true', () => {
    expect(true).toBe(true)
})
