import { Claims, Org, User } from "../types"

export const validateOrg = async (id: string): Promise<Org> => {
  return {
    id: id,
    name: 'Coca-Cola'
  }
}

export const getUser = async (wallet: string): Promise<User> => {
  return {
    id: 'jshs-scds1-sda091',
    wallet: wallet,
  }
}

export const getClaims = async (userId: string): Promise<Claims[]> => {
  return [
    {
      date: '4/15/2021',
      complaintId: 'IKF45GT6859',
      complaintMode: 'Anonym'
    },
    {
      date: '11/22/2021',
      complaintId: 'frgj697kvnfr5505',
      complaintMode: 'Pseudonym'
    },
  ]
}
