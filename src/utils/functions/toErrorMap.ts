import { MyValidationErrors } from "../../../../server/shared_with_front/types/types-shared"

export const toErrorMap = (errors: MyValidationErrors[] ) => {
  const errorMap: Record<string, string> = {}
  errors.forEach(({param, msg}) => {
      errorMap[param] = msg
  })

  return errorMap
}