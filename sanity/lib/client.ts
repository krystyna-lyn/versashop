import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 'skOMvALpCUWdfvfO7q218l4QkugqBuusxxrZZPoqZkKK8GM5byzwCtNJWWLt6aRrlA2lYuH0xieZId7fGiYJjLiu1AIYshDR1cVw0DFwEmxuYz0GlmmXcgVvH4EWzjpo4tNWRT8TLshlpj5BcDPerosYu9bbXNtDYCpDWi39rQtEUQEYTAxV'
})
