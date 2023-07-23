import { Org } from "../types"

export const validateOrg = async (id: string): Promise<Org> => {
  return {
    id: id,
    name: 'Coca-Cola'
  }
}

