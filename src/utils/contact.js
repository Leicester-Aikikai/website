export const CONTACT_FORM_NAME = 'first-class-enquiry'
export const CONTACT_FORM_PATH = '/contact-form.html'

// Netlify injects form-name and removes data-netlify when it registers the form.
// An ordinary static preview therefore cannot claim to accept submissions.
export function isContactFormRegistered(document) {
  const form = document.querySelector(`form[name="${CONTACT_FORM_NAME}"]`)
  return Boolean(form && !form.hasAttribute('data-netlify') && !form.hasAttribute('netlify') &&
    form.querySelector(`input[name="form-name"][value="${CONTACT_FORM_NAME}"]`))
}

export async function submitContactForm(formData, { fetcher = fetch, signal } = {}) {
  const response = await fetcher(CONTACT_FORM_PATH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
    signal
  })
  if (!response.ok) throw new Error('The enquiry service did not accept the request.')
  const body = await response.text()
  // A host without form processing can return the static definition or SPA with 200.
  if (/data-contact-definition|<div\s+id=["']app["']/i.test(body)) {
    throw new Error('The enquiry service is unavailable.')
  }
}
