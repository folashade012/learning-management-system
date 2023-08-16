"use client";

import { CldUploadWidget } from "next-cloudinary";
import { useCallback } from "react";

import ReactPlayer from "react-player";

import { Button } from "@/app/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";

declare global {
  var cloudinary: any;
}

interface VideoUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string;
}

const VideoUpload: React.FC<VideoUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <div>
      {value && (
        <div className='mb-4 flex items-center gap-4'>
          <div className='relative w-[640px] h-[360px] rounded-md overflow-hidden'>
            <div className='z-10 absolute top-2 right-2'>
              <Button
                type='button'
                onClick={() => onRemove(value)}
                variant='destructive'
                size='sm'
              >
                <Trash className='h-4 w-4' />
              </Button>
            </div>
            <ReactPlayer url={value} />
          </div>
        </div>
      )}

      <CldUploadWidget
        onUpload={onUpload}
        uploadPreset='qvm4mdya'
        options={{
          maxFiles: 1,
        }}
      >
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type='button'
              disabled={disabled}
              variant='secondary'
              onClick={onClick}
            >
              <ImagePlus className='h-4 w-4 mr-2' />
              Upload a Video
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default VideoUpload;
