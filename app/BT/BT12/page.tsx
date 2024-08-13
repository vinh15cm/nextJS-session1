import React from "react";
import Image from "next/image";
import images from "../../../public/vercel.svg";
export default function Page() {
  return (
    <div>
      <h3>Hình ảnh</h3>
      <Image
        src={images}
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
