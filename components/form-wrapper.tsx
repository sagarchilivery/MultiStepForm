import { FunctionComponent, ReactNode } from "react";

interface FromWrapperProps {
  title: string;
  children: ReactNode;
}

export function FormWrapper({ title, children }: FromWrapperProps) {
  return (
    <div className="flex justify-center items-center h-full w-full flex-col gap-10">
      <div className="text-7xl">{title}</div>
      <div className="flex justify-center items-center h-full w-full flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
