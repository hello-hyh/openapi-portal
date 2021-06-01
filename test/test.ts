/**
 * @/开头的需要项目中配置alias选项
 */
import req from '@/apis/request'
import { definitions } from '@/apiType/interface'

export function getApiBanners(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/Banners`,
    method: 'GET'
  })
}

export function postApiBannersQuery(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/Banners/Query`,
    method: 'POST'
  })
}

export function getApiCategories(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/Categories`,
    method: 'GET'
  })
}

export function postApiCategoriesQuery(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/Categories/Query`,
    method: 'POST'
  })
}

export function getApiOperationHistory(
  objectType: string,
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/OperationHistory/${objectType}`,
    method: 'GET'
  })
}

export function postApiOperationHistoryQuery(
  objectType: string,
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/OperationHistory/${objectType}/Query`,
    method: 'POST'
  })
}

export function getApiPictures(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/Pictures`,
    method: 'GET'
  })
}

export function postApiPicturesQuery(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/Pictures/Query`,
    method: 'POST',
    data: {
      sort: string,
      skip: number,
      take: number,
      fields: string,
      filters: string
    }
  })
}

export function getApiPicturesContent(pictureId: string) {
  return req<test, any>({
    url: `/api/Pictures/${pictureId}/Content`,
    method: 'GET'
  })
}

export function getApiSearchKeywords(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/SearchKeywords`,
    method: 'GET'
  })
}

export function postApiSearchKeywordsQuery(
  sort?: string,
  skip?: number,
  take?: number,
  fields?: string,
  filters?: string
) {
  return req<test, any>({
    url: `/api/SearchKeywords/Query`,
    method: 'POST'
  })
}
