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
  useCase: "dashboard" | "embedding" | "mcp" | "other"
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
    defaultValues: { useCase: "dashboard" },
  })

  const onSubmit = async (values: ContactValues) => {
    setSubmitted(false)
    // TODO: wire to your API route / CRM. Front-end only for now.
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
        <Label htmlFor="useCase">What brings you here?</Label>
        <select
          id="useCase"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("useCase", { required: true })}
        >
          <option value="dashboard">Using the dashboard editor</option>
          <option value="embedding">Embedding the editor (SDK)</option>
          <option value="mcp">MCP / agent automation</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us what you’re building, rough volume, and your timeline…"
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
        We’ll only use your details to reply. No newsletters.
      </p>
    </form>
  )
}
