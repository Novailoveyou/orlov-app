import { createSlice } from '@/app/_store/utils'
import { LeadStore } from './model'

export const leadSlice = createSlice<LeadStore>(set => ({
  lead: {
    username: '',
    phone: '',
    email: '',
    updateUsername: username =>
      set(state => {
        state.lead.username = username
      }),
    updatePhone: phone =>
      set(state => {
        state.lead.phone = phone
      }),
    updateEmail: email =>
      set(state => {
        state.lead.email = email
      }),
  },
}))
