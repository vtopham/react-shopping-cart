import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

// import data from '../data'

export const useCart = initialValue => {
    const [value, setValue] = useLocalStorage("cart", initialValue);
    const handleChanges = updatedValue => {
        setValue(updatedValue)
    };
    return [value, handleChanges]
}