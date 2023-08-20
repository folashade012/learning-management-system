"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { safeCourse } from "@/app/types";

import { toast } from "sonner";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Shell } from "@/app/components/shell";
import { Header } from "@/app/components/ui/header";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Separator } from "@/app/components/ui/separator";
// import { Textarea } from "@/app/components/ui/textarea";
// import ImageUpload from "@/app/components/ui/image-upload";

// const formSchema = z.object({
//   name: z.string().min(1),
//   price: z.coerce.number().min(0),
//   description: z.string().min(1),
//   imageSrc: z.string().min(1),
//   author: z.string().min(1),
// });

// type CourseFormValues = z.infer<typeof formSchema>;

// interface CourseFormProps {
//   initialData: safeCourse | null;
// }

// React.FC<CourseFormProps> = ({ initialData })

const CreateCoursePage = () => {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // const defaultValues = initialData
  //   ? {
  //       ...initialData,
  //       price: parseFloat(String(initialData?.price)),
  //     }
  //   : {
  //       name: "",
  //       description: "",
  //       imageSrc: "",
  //       author: "",
  //       price: 0,
  //     };

  // const form = useForm<CourseFormValues>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues,
  // });

  // const onSubmit = async (data: CourseFormValues) => {
  //   try {
  //     setLoading(true);
  //     await axios.post("/api/course", data);
  //     toast.success("Course created successfully");
  //     router.push("/");
  //   } catch (error: any) {
  //     error instanceof Error
  //       ? toast.error(error.message)
  //       : toast.error("Something went wrong, please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Shell>
      <Header title='Create course' />
      <Separator />

      {/* <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='  flex flex-col justify-center w-full items-center gap-4'
        >
          <div className='w-[600px] flex justify-center'>
            <FormField
              control={form.control}
              name='imageSrc'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      disabled={loading}
                      onChange={(e) => field.onChange(e)}
                      onRemove={() => field.onChange([(field.value = "")])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex w-[600px] flex-col gap-4 py-4 mx-auto'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Course name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='author'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Author name'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder='Course description'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      disabled={loading}
                      placeholder='9.99'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button disabled={loading} className='ml-auto' type='submit'>
            Create Course
          </Button>
        </form>
      </Form> */}
    </Shell>
  );
};

export default CreateCoursePage;
