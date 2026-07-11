import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      // src="/images/media/logo11.svg"
       src="/images/media/logo.png"
      alt="Shrisha"
  width={200}
  height={85}
  className="object-contain"
    />
  );
}