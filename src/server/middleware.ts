// @ts-expect-error: cors does not provide types
import cors from 'cors'
// @ts-expect-error: compression does not provide types
import compression from 'compression'

export const middleware = [cors(), compression()]
