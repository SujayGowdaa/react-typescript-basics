import { ReactNode } from 'react';

type HeaderType = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image: { src, alt }, children }: HeaderType) {
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
}
