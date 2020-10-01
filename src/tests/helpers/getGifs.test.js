import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch')
        expect( gifs.length ).toBe( 12 )
    })
    
    test('debe de traer 0 elementos si no se manda argumento', async() => {
        
        const gifs = await getGifs('')
        expect( gifs.length ).toBe( 0 )
    })
})
