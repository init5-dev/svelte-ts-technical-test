import type { PageData } from "../routes/$types"
import type { Cost } from "./models/Cost"

export interface TableData extends PageData {
  feed: {
    costs: Cost[]
  }
}

export interface UploadActionData {
  error: {
    code: string,
    message: string
  } | null
}