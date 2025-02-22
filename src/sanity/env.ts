export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skZkZXhqhw4bdEM7k0JrlriIMG8TEiNOSe3krp3IKQMssUUNbYsF9PoL38shv42W4MZVEGixzDMkuuYtGxOHWkwP4S4siJZVLko6mP3oZpvdnK3xwyPGWrSSba8ReawEjkyxkWlZvXbO0YYPL1FaNsh4raVOwAsnwG4VGbm24jlhlzr0Bnkt",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
