import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import { AuthContext } from "../Providers/Authprovider";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";

export const AddTask = () => {
    const {user}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,reset,
    setValue,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
   
  const taskData={
    ...data,
    email:user?.email
  }
  console.log(taskData);
  axios.post('http://localhost:5000/tasks',taskData)
  .then(() => {
    queryClient.invalidateQueries(['tasks']);
    reset(); 
  })
  };
  return (
    <div className="my-6 ">
     
      <Dialog className="">
        <DialogTrigger asChild>
          <section className=" bg-gray-200 rounded-xl min-h-[300px] px-4 py-2 flex flex-col
           justify-center items-center ">
            <h1 className="text-3xl text-blue-600 font-bold">Create Task</h1>
            <CiCirclePlus className="font-bold text-4xl mt-2" />
          </section>
        </DialogTrigger>

        <DialogContent className="bg-white h-96">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label>Title</Label>
              <Input {...register("title",{maxLength:50})} className="mt-2" />
            </div>
            <div>
              <Label>Description</Label>
              <Input {...register("description")} className="mt-2" />
            </div>
            <div>
              <Label>Status</Label>
              <Select
                className="" 
                onValueChange={(value) => setValue("status", value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select Status"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="To-Do">To-Do</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Done">Done</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
   <div className="flex justify-end">
   <Button type="submit" className="mt-6 bg-black  text-white">
              Submit
            </Button>
   </div>
          </form>
        </DialogContent>
      </Dialog>
    
    {/* Divider */}
    <div className="border-b-2 my-6 border-gray-400"></div>
    </div>
  );
};
