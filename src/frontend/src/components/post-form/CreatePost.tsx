import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CirclePlus, Plus } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { formats, modules } from "./quill-options";

import './quill.css'

export default function CreatePost() {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailURL, setThumbnailURL] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    return () => {
      // Revoke the object URL to avoid memory leaks
      if (thumbnailURL) {
        URL.revokeObjectURL(thumbnailURL);
      }
    };
  }, [thumbnailURL]);

  function handleThumbnail(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setThumbnail(file);
      setThumbnailURL(URL.createObjectURL(file));
    }
  }

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value as string);
  }

  function handlePlatformType(value: string) {
    setType(value);
  }

  function handleContent(value: string) {
    setContent(value);
  }

  function createPostHandler() {
    console.log(thumbnailURL);
    console.log(title);
    console.log(type);
    console.log(content);
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Plus />
      </DialogTrigger>
      <DialogContent className="overflow-y-auto no-scrollbar rounded-none md:rounded-md max-h-full md:max-h-[90%] w-full md:max-w-[50%]">
        <DialogHeader>
          <DialogTitle>Create new post platform</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="rounded-lg p-5 flex flex-col justify-center items-center gap-4">
            <Label htmlFor="thumbnail" className="flex gap-2 items-center px-4">
              <Input
                type="file"
                id="thumbnail"
                placeholder="Thumbnail"
                accept="image/*"
                onChange={handleThumbnail}
                className="hidden"
              />
              {thumbnailURL ? (
                <div className="w-full h-52">
                  <img
                    src={thumbnailURL}
                    alt="thumbnail"
                    className="h-full w-full rounded-sm object-contain"
                  />
                </div>
              ) : (
                <>
                  <CirclePlus /> Upload thumbnail
                </>
              )}
            </Label>
          </div>

          <div className="flex items-center gap-4 justify-start">
            <Input
              placeholder="Title"
              onChange={handleTitle}
              value={title}
              className="w-60"
            />

            <Select onValueChange={handlePlatformType}>
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Platform Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Scholarships</SelectLabel>
                  <SelectItem value="gov">Government Supported</SelectItem>
                  <SelectItem value="school">
                    College/University Scholarship
                  </SelectItem>
                  <SelectItem value="standalone">Standalone</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleContent}
              modules={modules}
              formats={formats}
              placeholder="Enter scholarship details here..."
              className="overflow-y-auto no-scrollbar"
            />
          </div>

          <div className="flex justify-end gap-2 items-center">
            <Button variant={"default"} size={"lg"} onClick={createPostHandler}>
              Create new post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
