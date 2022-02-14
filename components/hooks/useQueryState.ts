import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

type IParam = string
type IValue = string | string[] | number | number[] | null | undefined
type IState = { [k: string]: IValue }
type IQuery = IState
type IRoute = string

function isEmpty(value: IValue): boolean {
  return value === null || value === undefined || (typeof value !== 'number' && value.length === 0)
}

function isRouteParam(route: IRoute, param: IParam): boolean {
  return new RegExp(`\\[${param}\\]`, 'g').test(route)
}

function filterRouteParams(query: IQuery, route: IRoute): IQuery {
  return Object.entries(query).reduce((obj, [k, v]) => (isRouteParam(route, k) ? obj : Object.assign(obj, { [k]: v })), {})
}

/**
 * Filters out query entries if their are not present in the state
 *
 * Ex.:
 * query = { foo: 1, bar: "", baz: 2 }
 * state = { foo: 3, bar: 4 }
 * returns = { foo: 1 }
 *
 * @param query
 * @param state
 */
function filterRelevant<T>(query: IQuery, state: T): IQuery {
  return Object.keys(state).reduce((obj, key) => (isEmpty(query[key]) ? obj : Object.assign(obj, { [key]: query[key] })), {})
}

function toQueryString(obj: any): string {
  return new URLSearchParams(obj).toString()
}

/**
 * Filters out entries if key or value are empty
 *
 * Ex.:
 * obj = { foo: 0, bar: "", baz: [], "": "foo" }
 * returns = { foo: 0 }
 *
 * @param obj
 */
function clearEmptyValues<T>(obj: T): T {
  // @ts-ignore
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => !isEmpty(k) && !isEmpty(v)))
}

function isUpToDate<T>(query: IQuery, state: T, route: IRoute): boolean {
  return (
    toQueryString(clearEmptyValues(filterRouteParams(filterRelevant(query, state), route))) ===
    toQueryString(clearEmptyValues<T>(state))
  )
}

export default function useQueryState<T>(defaultState: T): any {
  const { query, replace, route, asPath } = useRouter()

  const [state, setState] = useState<T>(
    Object.assign({}, defaultState, filterRouteParams(filterRelevant<T>(query, defaultState), route))
  )

  useEffect(() => {
    if (isUpToDate(query, state, route)) return

    // Update query string
    replace(
      {
        pathname: new URL(asPath, 'http://localhosts/').pathname,
        query: { ...filterRouteParams(query, route), ...state },
      },
      undefined,
      {
        shallow: true,
      }
    )
  }, [query, replace, state, asPath, route])

  return [state, setState]
}
