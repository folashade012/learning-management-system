"use client";

import { Input } from "@/app/components/ui/input";
import ImageUpload from "@/app/components/ui/image-upload";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import type { z } from "zod";
import { Icons } from "@/app/components/icons";

import { authLogin } from "@/app/libs/validations/auth";

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

interface CourseProps {
  name?: string;
  imageSrc?: string;
  author?: string;
  price?: string;
  courseId?: string;
  description?: string | null;
}

interface InitalStateProps {
  name: string;
  imageSrc: string;
  author: string;
  price: string | number;
  description: string;
}

const initialState: InitalStateProps = {
  name: "",
  imageSrc: "",
  author: "",
  price: "",
  description: "",
};

type Inputs = z.infer<typeof authLogin>;

export default function UpdateCourseComponent({
  name,
  price,
  courseId,
  description,
  author,
  imageSrc,
}: CourseProps) {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const setCustomValue = (id: any, value: any) => {
    setState((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const onUpdate = (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();

    axios
      .put(`/api/course/${courseId}`, state)
      .then(() => {
        toast.success("updated successfully");
        router.refresh();
        router.push("/");
      })
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  function onSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <div>
      <div className='w-full flex flex-col md:flex-row pt-6'>
        <div className='flex flex-1 flex-col justify-center items-center py-4'>
          <div className='p-4'>
            <img
              src={imageSrc}
              alt='Image'
              className='max-w-[400px]  bg-gray-50 p-4 border-4 border-black'
            />
            <h1 className='capitalize my-2'>{name}</h1>
            <p>{price}</p>
            <p className='my-3'>{author}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-3'>
          <Button disabled={isLoading}>Add Section</Button>
          <Button disabled={isLoading}>Update Course Detail</Button>
        </div>
      </div>

      <Form {...form}>
        <form
          className='grid gap-4'
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='johndoe@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder='**********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading}>
            {loading && (
              <Icons.spinner
                className='mr-2 h-4 w-4 animate-spin'
                aria-hidden='true'
              />
            )}
            Login
            <span className='sr-only'>Login</span>
          </Button>
        </form>
      </Form>

      {/* <form onSubmit={onUpdate} className='w-[600px] h-[700px] mx-auto py-12'>
        <div>
          <ImageUpload
            value={state.imageSrc}
            onChange={(value) => setCustomValue("imageSrc", value)}
            onRemove={() => {}}
          />
        </div>

        <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
          <Input
            placeholder='Course name'
            id='name'
            type='text'
            value={state.name}
            name='name'
            onChange={handleChange}
          />
          <Input
            placeholder='Authors'
            id='author'
            type='text'
            value={state.author}
            name='author'
            onChange={handleChange}
          />
          <Input
            placeholder='Description'
            id='description'
            type='text'
            value={state.description}
            name='description'
            onChange={handleChange}
          />
          <Input
            placeholder='Price'
            id='price'
            type='number'
            value={state.price}
            name='price'
            onChange={handleChange}
          />
          <div></div>
          <Button disabled={isLoading} onClick={onUpdate}>
            Update
          </Button>
        </div>
      </form> */}
    </div>
  );
}
