"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogContent,
} from "./ui/dialog";
import { Toast } from "@radix-ui/react-toast";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { createModel } from "../../actions/model";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ImSpinner2 } from "react-icons/im";

function CreateModelButton() {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Zod schema for form validation
  const formSchema = z.object({
    modelName: z.string().min(4, "Model name is required"),
    modelDescription: z.string().min(1, "Model description is required"),
  });

  // Setting up the form using React Hook Form with Zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form data submitted:", data);
    console.log("Form validation errors:", form.formState.errors);

    try {
      const model = await createModel(data); // Assuming createModel is a function to create a model via an API
      console.log("Model created successfully:", model);
      setToastMessage("Model created successfully!");
      setToastOpen(true);
      window.location.href = `/builder/${model.id}`; // Redirect to model page after creation
    } catch (error) {
      console.error("Error creating model:", error);
      setToastMessage("Failed to create model. Please try again.");
      setToastOpen(true);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Create New Model</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Model</DialogTitle>
            <DialogDescription>
              Enter the details for your new model below.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                name="modelName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter model name" />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.modelName?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                name="modelDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter model description"
                        rows={3}
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.modelDescription?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="w-full"
                >
                  {!form.formState.isSubmitting ? (
                    <span>Create Model</span>
                  ) : (
                    <ImSpinner2 className="animate-spin" />
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Toast for success or error messages */}
      <Toast open={toastOpen} onOpenChange={setToastOpen}>
        <div className="p-4 bg-red-500 text-white rounded-md">
          {toastMessage}
        </div>
      </Toast>
    </>
  );
}

export default CreateModelButton;
