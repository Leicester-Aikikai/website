<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { club } from '../data/club.js'
import { londonDateIso } from '../utils/events.js'
import { CONTACT_FORM_NAME, CONTACT_FORM_PATH, isContactFormRegistered, submitContactForm } from '../utils/contact.js'
import PageIntro from '../components/PageIntro.vue'
import ClubDetails from '../components/ClubDetails.vue'

const availability = ref('checking')
const sending = ref(false)
const sent = ref(false)
const error = ref('')
const result = ref(null)
const today = londonDateIso()
let controller
let timeout

async function checkAvailability() {
  availability.value = 'checking'
  controller?.abort()
  controller = new AbortController()
  timeout = setTimeout(() => controller.abort(), 10000)
  try {
    const response = await fetch(CONTACT_FORM_PATH, { cache: 'no-store', signal: controller.signal })
    const definition = new DOMParser().parseFromString(await response.text(), 'text/html')
    availability.value = response.ok && isContactFormRegistered(definition) ? 'ready' : 'unavailable'
  } catch {
    availability.value = 'unavailable'
  } finally {
    clearTimeout(timeout)
  }
}

function validateFriday(event) {
  const input = event.target
  const isFriday = !input.value || new Date(`${input.value}T12:00:00Z`).getUTCDay() === 5
  input.setCustomValidity(isFriday ? '' : 'Please choose a Friday, or leave this field blank.')
}

async function submit(event) {
  if (sending.value || sent.value || availability.value !== 'ready') return
  const form = event.target
  if (!form.reportValidity()) return
  const data = new FormData(form)
  if (data.get('bot-field')) {
    error.value = 'Your enquiry could not be submitted. Please try again.'
    return
  }
  sending.value = true
  error.value = ''
  controller = new AbortController()
  timeout = setTimeout(() => controller.abort(), 15000)
  try {
    await submitContactForm(data, { signal: controller.signal })
    sent.value = true
    form.reset()
  } catch {
    error.value = 'We could not confirm your enquiry was submitted. Your details are still here. Please try again, or contact the club through Facebook.'
  } finally {
    clearTimeout(timeout)
    sending.value = false
    await nextTick()
    result.value?.focus()
  }
}

onMounted(checkAvailability)
onBeforeUnmount(() => { clearTimeout(timeout); controller?.abort() })
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageIntro
      eyebrow="We’re happy to help"
      title="Contact Leicester Aikikai"
      text="Thinking about your first class, returning to aikido or visiting from another dojo? Send the club an enquiry."
    />
    <section class="section-space">
      <div class="container split-layout">
        <div>
          <h2>Ask about your first class</h2>
          <p>Your first introductory lesson is free. You can come along on a Friday without advance booking, or get in touch first with any questions.</p>
          <p>Please enquire before bringing a child so we can confirm eligibility and availability.</p>

          <div v-if="sent" ref="result" class="form-notice form-success" role="status" tabindex="-1">
            <h3>Thank you — your enquiry has been submitted.</h3>
            <p>The club can reply using the email address you provided. Your enquiry does not reserve a place in a class.</p>
          </div>

          <form v-else :name="CONTACT_FORM_NAME" :action="CONTACT_FORM_PATH" method="POST" class="contact-form" aria-describedby="contact-privacy" :aria-busy="sending" @submit.prevent="submit">
            <input type="hidden" name="form-name" :value="CONTACT_FORM_NAME">
            <div hidden>
              <label for="contact-bot-field">Leave this field blank</label>
              <input id="contact-bot-field" name="bot-field" type="text" tabindex="-1" autocomplete="off">
            </div>
            <div class="mb-4">
              <label for="contact-name" class="form-label">Name <span class="field-note">(required)</span></label>
              <input id="contact-name" class="form-control" name="name" type="text" autocomplete="name" maxlength="100" required :disabled="sending">
            </div>
            <div class="mb-4">
              <label for="contact-email" class="form-label">Email address <span class="field-note">(required)</span></label>
              <input id="contact-email" class="form-control" name="email" type="email" autocomplete="email" maxlength="254" required :disabled="sending">
            </div>
            <div class="mb-4">
              <label for="contact-friday" class="form-label">Preferred Friday <span class="field-note">(optional)</span></label>
              <input id="contact-friday" class="form-control" name="preferred-friday" type="date" :min="today" aria-describedby="friday-help" :disabled="sending" @input="validateFriday">
              <p id="friday-help" class="field-note mt-2">Let us know when you are thinking of coming. This is an enquiry, not a booking.</p>
            </div>
            <div class="mb-4">
              <label for="contact-message" class="form-label">Message <span class="field-note">(optional)</span></label>
              <textarea id="contact-message" class="form-control" name="message" rows="5" maxlength="3000" :disabled="sending"></textarea>
            </div>
            <p id="contact-privacy" class="field-note">We use your details to reply to your enquiry. Submissions are processed and stored by Netlify and checked for spam. Please include only the information needed for your enquiry and avoid sensitive personal information. <a href="https://www.netlify.com/privacy/">Netlify’s privacy information</a>.</p>
            <p v-if="availability === 'checking'" role="status" class="field-note">Checking enquiry availability…</p>
            <div v-if="availability === 'unavailable'" class="form-notice" role="status">
              <p>Online enquiries are temporarily unavailable. You can <a :href="club.social[0].url">contact the club through Facebook</a> or speak to the instructor at Friday practice.</p>
              <button type="button" class="btn btn-outline-dark" @click="checkAvailability">Check again</button>
            </div>
            <p v-if="error" ref="result" class="form-notice form-error" role="alert" tabindex="-1">{{ error }}</p>
            <button class="btn btn-primary btn-lg" type="submit" :disabled="sending || availability !== 'ready'">{{ sending ? 'Sending…' : 'Send enquiry' }}</button>
          </form>
          <p class="mt-4"><router-link to="/beginners#first-class">Read how to attend your first class</router-link></p>
          <h3 class="mt-4">Follow the club</h3>
          <ul class="plain-list">
            <li v-for="social in club.social" :key="social.label"><a :href="social.url">{{ social.label }}</a></li>
          </ul>
        </div>
        <ClubDetails travel />
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-form { margin-top: 2rem; }
.form-label { font-weight: 600; }
.form-control { min-height: 48px; border-color: #80877e; font-size: 1rem; }
textarea.form-control { min-height: 150px; }
.field-note { font-size: .85rem; color: var(--muted); font-weight: 400; }
.form-notice { padding: 1rem; margin-block: 1.25rem; border-left: 3px solid var(--red); background: var(--warm); }
.form-notice p:last-child { margin-bottom: 0; }
.form-success { border-color: #386044; }
.form-error { color: #81211f; }
</style>
