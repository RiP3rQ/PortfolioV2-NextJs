"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { toast, Toaster } from "react-hot-toast";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { contactData } from "@/lib/data";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Inputs = {
  name: string;
  email: string;
  title: string;
  message: string;
};

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Twoje imie musi mieć conajmniej 2 znaki.",
    })
    .max(50),
  email: z.string().email({
    message: "Podaj poprawny adres email.",
  }),
  title: z
    .string()
    .min(2, {
      message: "Tytuł twojego email musi mieć conajmniej 2 znaki",
    })
    .max(50),
  message: z
    .string()
    .min(8, {
      message: "Twoja wiadomość musi mieć conajmniej 8 znaków.",
    })
    .max(50),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // const onSubmit: SubmitHandler<Inputs> = async (formData) => {
  //   if (errors.name || errors.email || errors.title || errors.message) {
  //     toast.error("Please fill all fields");
  //     return;
  //   }

  //   const notification = toast.loading("Sending message...");
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mail`, {
  //     method: "POST",
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         toast.dismiss(notification);
  //         toast.error("Something went wrong. Please try again later.");
  //         return;
  //       }
  //       reset();
  //       toast.dismiss(notification);
  //       toast.success("Message sent successfully!");
  //       return;
  //     })
  //     .catch((err) => {
  //       toast.dismiss(notification);
  //       toast.error("Something went wrong. Please try again later.");
  //       return;
  //     });
  // };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center"
    >
      <Toaster position="top-center" />
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Kontakt
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Mam dokładnie to, czego potrzebujesz.
          <br />
          <span className="decoration-[#F7AB0A]/50 underline">
            {" "}
            Porozmawiajmy
          </span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>{contactData?.address}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p>{contactData?.email}</p>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full mx-auto"
          >
            <div className="flex space-x-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Imię:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="essik"
                        {...field}
                        className="contactInput "
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Random@email.com"
                        {...field}
                        className="contactInput"
                      />
                    </FormControl>
                    <FormDescription>
                      This is your email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tytuł:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="tytuł"
                      {...field}
                      className="contactInput"
                    />
                  </FormControl>
                  <FormDescription>
                    This is title of your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="message"
                      {...field}
                      className="contactInput"
                    />
                  </FormControl>
                  <FormDescription>This is your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Wyślij
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default Contact;
