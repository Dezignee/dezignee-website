"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

/**
 * Intent routing matters more now: /contact is the CTA on the homepage, the
 * plugin page, and pricing. A single undifferentiated inbox loses the
 * evaluating engineer among support requests.
 *
 * `intent` should drive routing when this is wired to a real backend:
 *   evaluating | pricing | support | partnership | other
 */
type Intent = "evaluating" | "pricing" | "support" | "partnership" | "other"

type ContactValues = {
  name: string
  email: string
  company: string
  intent: Intent
  message: string
}

const intents: { value: Intent; label: string; hint: string }[] = [
  {
    value: "evaluating",
    label: "Evaluating the plugin",
    hint: "Tell us your stack and where the editor would live. We'll reply with a working config.",
  },
  {
    value: "pricing",
    label: "Pricing for my volume",
    hint: "Roughly how many end users and emails per month? We'll size the plan.",
  },
  {
    value: "support",
    label: "Technical support",
    hint: "Include your workspace id and what you expected to happen.",
  },
  {
    value: "partnership",
    label: "Partnership or reseller",
    hint: "What's the shape of the partnership you have in mind?",
  },
  { value: "other", label: "Something else", hint: "" },
]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    defaultValues: { intent: "evaluating" },
  })

  const intent = watch("intent")
  const hint = intents.find((i) => i.value === intent)?.hint ?? ""

  const onSubmit = async (values: ContactValues) => {
    setSubmitted(false)
    // TODO: route by values.intent — evaluating/pricing → sales, support → support inbox.
    await sleep(650)
    setSubmitted(true)
    reset({ ...values, message: "" })
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-terracotta-tint/50 px-6 py-10 text-center">
        <CheckCircle2 className="size-7 text-success" />
        <div>
          <p className="text-[15px] font-semibold text-foreground">Message sent</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Thanks — someone from the team will follow up shortly.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Intent first: it changes what we ask for next */}
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium leading-none text-foreground">What's this about?</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {intents.map((i) => (
            <label
              key={i.value}
              className="flex cursor-pointer items-center gap-2.5 rounded-md border border-border bg-background px-3 py-2.5 text-sm transition-colors hover:bg-accent/40 has-[:checked]:border-terracotta has-[:checked]:bg-terracotta-tint/40"
            >
              <input
                type="radio"
                value={i.value}
                className="size-4 accent-[hsl(var(--terracotta))]"
                {...register("intent", { required: true })}
              />
              {i.label}
            </label>
          ))}
        </div>
        {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name", { required: "Please enter your name." })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email", {
              required: "Please enter your email.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">
          Company <span className="font-normal text-muted-foreground">(or the product you're building)</span>
        </Label>
        <Input id="company" placeholder="Acme" {...register("company")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Where the editor would live, your framework, and your timeline…"
          {...register("message", {
            required: "Please include a short message.",
            minLength: { value: 10, message: "A little more detail, please." },
          })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        We'll only use your details to reply. No newsletters.
      </p>
    </form>
  )
}
