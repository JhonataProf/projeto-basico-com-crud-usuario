import { HttpResponse } from '../protocols'
import { ServerError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
export const serverError = (error?: Error|unknown): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const notFound = (data: any): HttpResponse => ({
  statusCode: 404,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const unAuthorized = (data?: any): HttpResponse => ({
  statusCode: 401,
  body: data
})

export const forbidden = (data?: any): HttpResponse => ({
  statusCode: 403,
  body: data
})
