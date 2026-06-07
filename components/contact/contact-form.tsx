"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

type ContactValues = {
  name: string
  email: string
  useCase: "dashboard" | "embedding" | "both" | "other"
  message: string
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    defaultValues: {
      useCase: "dashboard",
    },
  })

  const onSubmit = async (values: ContactValues) => {
    setSubmitted(false)
    // Placeholder: wire to your API route later.
    await sleep(650)
    setSubmitted(true)
    reset({ ...values, message: "" })
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-tight">Send a message</h3>
        <p className="text-sm text-muted-foreground">
          This form is currently a front-end placeholder (no backend). Hook it up
          to your preferred email/CRM later.
        </p>
      </div>

      {submitted ? (
        <div className="flex items-start gap-3 rounded-xl border bg-muted/10 p-4">
          <CheckCircle2 className="mt-0.5 size-5 text-primary" />
          <div>
            <p className="text-sm font-semibold tracking-tight">
              Message submitted
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Thanks—someone from the team will follow up.
            </p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            {...register("name", { required: "Please enter your name." })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="you@company.com"
            type="email"
            {...register("email", {
              required: "Please enter your email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address.",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="useCase">Use case</Label>
        <select
          id="useCase"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("useCase", { required: true })}
        >
          <option value="dashboard">Dashboard workflows</option>
          <option value="embedding">Embeddable SDK</option>
          <option value="both">Both</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us what you’re building, your timeline, and any requirements…"
          {...register("message", {
            required: "Please include a short message.",
            minLength: { value: 10, message: "Please add a bit more detail." },
          })}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
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
    </form>
  )
}

