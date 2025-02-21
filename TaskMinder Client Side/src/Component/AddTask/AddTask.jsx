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

import React from "react";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";

export const AddTask = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // axios.post
  };
  return (
    <div>
      <Dialog className="">
        <DialogTrigger asChild>
          <section className="w-48 bg-[#7ec8e3] rounded-xl h-24 px-4 py-2">
            <h1 className="font-medium text-gray-600">Create Task</h1>
            <CiCirclePlus className="font-bold text-2xl mt-2" />
          </section>
        </DialogTrigger>

        <DialogContent className="bg-white h-96">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label>Title</Label>
              <Input {...register("title")} className="mt-2" />
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
            <Button type="submit" className="mt-3 bg-black text-white">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
