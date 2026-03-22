"use client";

import Image, { type ImageProps } from "next/image";
import type { DragEvent, MouseEvent } from "react";

type ProtectedImageProps = ImageProps & {
  wrapperClassName?: string;
};

function preventDefault(event: MouseEvent<HTMLElement> | DragEvent<HTMLElement>) {
  event.preventDefault();
}

export default function ProtectedImage({
  wrapperClassName,
  className,
  alt,
  ...props
}: ProtectedImageProps) {
  return (
    <div
      className={["protected-image", wrapperClassName].filter(Boolean).join(" ")}
      onContextMenu={preventDefault}
      onDragStart={preventDefault}
    >
      <Image
        {...props}
        alt={alt}
        className={className}
        draggable={false}
        onContextMenu={preventDefault}
        onDragStart={preventDefault}
      />
      <span className="protected-image__shield" aria-hidden="true" />
    </div>
  );
}
