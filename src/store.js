import { create } from 'zustand'

const useStore = create((set) => ({

    data = {
        name: '',
        email: '',
        phone: '',
        plan: '',
        planDuration: '',
        addOns: '',
        totalPayment: null,
    }




}))
