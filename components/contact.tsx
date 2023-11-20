"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaPaperPlane } from "react-icons/fa";
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
import { sendEmail } from "@/actions/sendEmail";

const formSchema = z.object({
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
      email: "",
      title: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const notification = toast.loading("Wysyłam wiadomość...");

    const { data, error } = await sendEmail({
      email: values.email,
      title: values.title,
      message: values.message,
    });

    if (error) {
      toast.error("Coś poszło nie tak. Spróbuj ponownie później.", {
        id: notification,
      });
      return;
    }

    toast.success("Wiadomość wysłana pomyślnie!", {
      id: notification,
    });
    form.reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 
    justify-evenly mx-auto items-center"
    >
      <Toaster position="top-center" />
      <h3
        className="absolute top-24 uppercase tracking-[10px] text-[#8950ff] dark:text-white 
      text-xl sm:text-3xl lg:text-5xl"
      >
        Kontakt
      </h3>

      <div className="absolute top-40 flex flex-col space-y-10">
        <h4 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-center">
          Mam dokładnie to, czego potrzebujesz.
          <br />
          <span className="decoration-[#8950ff] underline">Porozmawiajmy</span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#8950ff] h-7 w-7 animate-pulse" />
            <p>{contactData?.address}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#8950ff] h-7 w-7 animate-pulse" />
            <p>{contactData?.email}</p>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-8 w-full mx-auto px-4"
          >
            <div className="flex space-x-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Tytuł:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tytuł wiadomości"
                        {...field}
                        className="contactInput"
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
                  <FormItem className="flex-1">
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Random@email.com"
                        {...field}
                        className="contactInput"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Treść wiadomości"
                      {...field}
                      className="contactInput"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#8950ff] py-5 px-10 rounded-md text-white font-bold text-lg w-full hover:text-[#8950ff] transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-4">
                <div>Wyślij</div>
                <div>
                  <FaPaperPlane className="text-base opacity-70 " />
                </div>
              </div>
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

export default Contact;
