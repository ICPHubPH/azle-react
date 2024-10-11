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
import { ImageUp, Plus } from "lucide-react";
import { ChangeEvent, DragEvent, useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { cn } from "@/lib/utils";
import ReactQuill from "react-quill";
import { formats, modules } from "./quill-options";
import "./quill.css";

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

  function handleDraggedThumbnail(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setThumbnail(file);
      setThumbnailURL(URL.createObjectURL(file));
    }
  }

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
    <Dialog
      onOpenChange={() => {
        if (thumbnailURL) {
          setThumbnailURL(null);
          setThumbnail(null);
          URL.revokeObjectURL(thumbnailURL);
        }
      }}
    >
      <DialogTrigger>
        <Plus />
      </DialogTrigger>
      <DialogContent className="overflow-y-auto no-scrollbar rounded-none md:rounded-md max-h-full md:max-h-[90%] w-full md:max-w-[50%]">
        <DialogHeader>
          <DialogTitle>Create new post</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div
            className="rounded-lg flex flex-col justify-center items-center gap-4 border-2 hover:border-gray-400 border-dashed"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDraggedThumbnail}
          >
            <Label
              htmlFor="thumbnail"
              className={cn(
                "flex gap-2 justify-center items-center w-full h-full",
                !thumbnail && "h-[21.5rem]"
              )}
            >
              <Input
                type="file"
                id="thumbnail"
                placeholder="Thumbnail"
                accept="image/*"
                onChange={handleThumbnail}
                className="hidden"
              />
              {thumbnailURL ? (
                <div className="w-full h-auto">
                  <img
                    src={thumbnailURL}
                    alt="thumbnail"
                    className="h-full w-full rounded-sm object-cover aspect-video"
                  />
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-4 text-slate-500">
                  <ImageUp className="h-16 w-16" />
                  Upload Thumbnail
                </div>
              )}
            </Label>
          </div>

          <div className="flex items-center gap-4 justify-start">
            <Input
              placeholder="Title"
              onChange={handleTitle}
              value={title}
              className="w-full"
            />

            <Select onValueChange={handlePlatformType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Scholarships</SelectLabel>
                  <SelectItem value="gov">Government Supported</SelectItem>
                  <SelectItem value="college/university">
                    College/University Scholarship
                  </SelectItem>
                  <SelectItem value="standalone">Standalone</SelectItem>
                  <SelectItem value="corporate/industry sponsored">
                    Corporate/Industry Sponsored
                  </SelectItem>
                  <SelectItem value="local government">
                    Local Government
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div>
            {/* @ts-ignore */}
            <ReactQuill
              theme="snow"
              value={content}
              onChange={handleContent}
              modules={modules}
              formats={formats}
              placeholder=""
              className="overflow-y-auto custom-ql"
            />
          </div>

          <div className="flex justify-end gap-2 items-center">
            <Button
              variant={"default"}
              size={"lg"}
              onClick={createPostHandler}
              className="flex gap-1 items-center"
            >
              <Plus /> Create new post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
