import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { cn } from "@/lib/utils";
import { ImageUp, Plus } from "lucide-react";
import { useState, useEffect, ChangeEvent, DragEvent } from "react";

const UploadValidId = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      // Revoke the object URL to avoid memory leaks
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [imageURL]);

  function handleDraggedImage(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  }

  function handleImage(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  }

  function uploadImageHandler() {
    console.log(imageURL);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Complete your Verification</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        Please provide nformation to verify your account. <br />
        Your organization does not have permission to create posts if not verified.
      </CardContent>
      <CardFooter>
        <Dialog
          onOpenChange={() => {
            if (imageURL) {
              setImageURL(null);
              setImage(null);
              URL.revokeObjectURL(imageURL);
            }
          }}
        >
          <DialogTrigger>
            <Button>Upload Valid ID Image</Button>
          </DialogTrigger>
          <DialogContent className="overflow-y-auto no-scrollbar rounded-none md:rounded-md max-h-full md:max-h-[90%] w-full md:max-w-[50%]">
            <DialogHeader>
              <DialogTitle>Upload Valid Id</DialogTitle>
              <DialogDescription>
                To verify your account you need to upload a clear image of your
                valid ID with your name in it.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div
                className="rounded-lg flex flex-col justify-center items-center gap-4 border-2 hover:border-gray-400 border-dashed"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDraggedImage}
              >
                <Label
                  htmlFor="image"
                  className={cn(
                    "flex gap-2 justify-center items-center w-full h-full",
                    !image && "h-[21.5rem]"
                  )}
                >
                  <Input
                    type="file"
                    id="image"
                    placeholder="image"
                    accept="image/*"
                    onChange={handleImage}
                    className="hidden"
                  />
                  {imageURL ? (
                    <div className="w-full h-auto">
                      <img
                        src={imageURL}
                        alt="image"
                        className="h-full w-full rounded-sm object-cover aspect-video"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center gap-4 text-slate-500">
                      <ImageUp className="h-16 w-16" />
                      Upload Valid Id Image <br /> Accepted .png .jpeg .jpg
                    </div>
                  )}
                </Label>
              </div>

              <div className="flex justify-end gap-2 items-center ">
                <Button
                  variant={"info"}
                  size={"lg"}
                  onClick={uploadImageHandler}
                  className="flex gap-1 items-center "
                >
                  <Plus /> Upload
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default UploadValidId;
