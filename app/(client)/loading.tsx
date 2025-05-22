export default function Loading() {
  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-transparent">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.7s]"></div>
          <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.3s]"></div>
          <div className="w-4 h-4 rounded-full bg-color-1 animate-bounce [animation-delay:.7s]"></div>
        </div>
      </div>
    </div>
  );
}
