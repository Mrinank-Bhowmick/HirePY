"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const InterviewsPage = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col w-full gap-5">
        <div className="flex justify-between items-center">
          <div className="font-extrabold text-4xl">Interviews</div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create New Interview</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Create New Interview
                </DialogTitle>
                <DialogDescription>
                  Add details about your new interview to get started.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="position">Job Position</Label>
                  <Input
                    id="position"
                    placeholder="Ex. Full Stack Developer"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Ex. React, Node.js, System Design..."
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Interview Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 Minutes</SelectItem>
                      <SelectItem value="15">15 Minutes</SelectItem>
                      <SelectItem value="20">20 Minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="type">Interview Type</Label>
                  <Input
                    id="type"
                    placeholder="Ex. Technical, Behavioral"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="ghost">Cancel</Button>
                <Button type="submit">Start Interview</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div>{/* List of interviews will go here */}</div>
      </div>
    </div>
  );
};

export default InterviewsPage;
