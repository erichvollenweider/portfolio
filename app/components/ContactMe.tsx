"use client"
import { BorderBeam } from "@/components/magicui/border-beam"
import Globe from "@/components/magicui/globe"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { formSchema } from "@/lib/schemas"
import { send } from "@/lib/email"
import { useToast } from "@/components/hooks/use-toast"

const ContactMe = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const { toast } = useToast()
  const [isLoading, setisLoading] = React.useState(false)

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true)
    try {
      send(values)

      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
      })
      form.reset()
    } catch {
      toast({
        title: "Error",
        description: "Failed to send your message. Please Try again.",
        variant: "destructive",
      })
    } finally {
      setisLoading(false)
    }
  }

  return (
    <div
      id="contact"
      className="m-11 md:m-16 w-full md:w-[90%] overflow-y-hidden overflow-x-hidden"
    >
      <Card className="relative z-10 bg-stone-50 dark:bg-gray-900/40">
        <BorderBeam duration={18} size={500} />
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-1/2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={10}
                          placeholder="Enter your message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button type="submit">
                    {isLoading ? "Submiting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="w-full md:w-1/2">
            <Globe className="" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContactMe
