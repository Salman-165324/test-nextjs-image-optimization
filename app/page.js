import Image from "next/image";

export default function Home() {
  return (
    <main className="">

      <Image
        src="https://res.cloudinary.com/dnzvhb5zt/image/upload/v1719417797/mockupApplication/mockup29/thumbnail_ll9bll.jpg"
        height={600}
        width={600}
        sizes= "(max-width: 600px) 50vw, 100vw"
        alt=""
        className=""
      ></Image>
          <Image
            src="https://media.freemockup.ai/thumbnail_ll9bll.jpg"
            height={600}
            width={600}
            alt=""
          ></Image>
    {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://res.cloudinary.com/dnzvhb5zt/image/upload/v1719417797/mockupApplication/mockup29/thumbnail_ll9bll.jpg"
        width={600}
        height={600}
        alt=""
      />
    </main>
  );
}
