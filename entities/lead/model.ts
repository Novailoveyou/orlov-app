export type Lead = {
  username: string
  phone: string
  email: string
}

export type LeadStore = {
  lead: Lead & {
    updateUsername: (username: Lead['username']) => void
    updatePhone: (phone: Lead['phone']) => void
    updateEmail: (email: Lead['email']) => void
  }
}
