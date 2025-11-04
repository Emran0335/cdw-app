"use client";
import { subscribeAction } from "@/app/_actions/subscribe";
import { useActionState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscribeSchema } from "@/app/schemas/subscribe-schema";
import { useForm } from "react-hook-form";

export default function NewsletterForm() {
  const [state, formAction] = useActionState(subscribeAction, {
    success: false,
    message: "",
  });

  const form = useForm({
    resolver: zodResolver(SubscribeSchema),
    mode: "onChange",
  });

  const handleFormAction = async (formData: FormData) => {
    const valid = await form.trigger();

    if (!valid) return;
    formAction(formData);
  };
  return <div></div>;
}
