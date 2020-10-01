import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn()
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> )

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
    })
    
    test('debe de mostar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })
    
    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'Hola Mundo'
        input.simulate('change', { target: { value } })
    })

    test('NO debe de postear la información con submit si no son más de 2 caracteres', () => {
    
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect( setCategories ).not.toHaveBeenCalled()
    
    })
    
    test('debe de llamar al setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo'

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } })

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        // 3. deben de haber llamado al setCategories
        expect( setCategories ).toHaveBeenCalledTimes(1)
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        // 4. el valor del input debe de estar vacío
        expect( wrapper.find('input').prop('value') ).toBe('')

    })
    
})
