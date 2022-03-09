export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  // @ts-expect-error
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
interface GoogleEvent {
  action: string
  category: string
  label: string
  value: number
}
export const event = ({ action, category, label, value }: GoogleEvent) => {
  process.env.NODE_ENV === 'production' && // @ts-expect-error
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
}
