"use client";

import { Input } from "@/app/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FormEvent, useState } from "react";
import { Button } from "@/app/components/ui/button";
import { toast } from "sonner";

interface InitialStateProps {
  name: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  name: "",
  email: "",
  password: "",
};

interface ProfileProps {
  userId?: string | null;
  name?: string | null;
  email?: string | null;
}

export default function Profile({ userId, name, email }: ProfileProps) {
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event: any) {
    setState({ ...state, [event.target.name]: event.target.value });
    console.log(event.target.value);
  }

  const onSubmit = (event: FormEvent) => {
    setIsLoading(true);
    event.preventDefault();

    axios
      .put(`/api/user/${userId}`, {
        ...state,
        hashedPassword: state.password,
      })
      .then(() => {
        toast.success("profile updated");
        router.refresh();
        router.push("/");
      })
      .catch((err: any) => {
        throw new Error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <div>
        <div>
          <form onSubmit={onSubmit} className='text-center'>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
              <Input
                placeholder='Name'
                id='name'
                type='text'
                name='name'
                onChange={handleChange}
                value={state.name}
              />
              <Input
                placeholder='Email'
                id='email'
                type='email'
                name='email'
                onChange={handleChange}
                value={state.email}
              />
              <Input
                placeholder='Password'
                id='password'
                type='password'
                name='password'
                onChange={handleChange}
                value={state.password}
              />
              <Button disabled={isLoading}>Update</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
