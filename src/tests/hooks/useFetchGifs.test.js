import React from 'react';
import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'

import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Pruebas en el hook useFetchGifs', () => {
   
    test('debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        const { data, loading } = result.current
        await waitForNextUpdate()
        
        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    })

    test('debe de retornar un arreglo de imgs y loading: false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) )
        await waitForNextUpdate()
        const { data, loading } = result.current
        
        expect( data.length ).toBe( 12 )
        expect( loading ).toBe( false )
    })
    
    
})
