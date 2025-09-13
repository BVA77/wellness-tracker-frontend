
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex">
        <div className="bg-blue-500 w-14">01</div>
        <div className="bg-red-500 w-64 flex-initial">02</div>
        <div className="bg-blue-500 w-32 flex-auto">03</div>
      </div>
      {/* case using flex */}
      <div className="flex">
        <div className="bg-blue-500 w-14">01</div>
        <div className="bg-red-500 w-64 flex-1">02</div>
        <div className="bg-blue-500 w-32 flex-1">03</div>
      </div>
      {/* case using flex-row */}
      <div className="flex flex-row">
        <div className="bg-blue-500 w-14">01</div>
        <div className="bg-red-500 w-64">02</div>
        <div className="bg-blue-500 w-32">03</div>
      </div>
      {/* case mobile using flex-col and desktop using flex-row */}
      <div className="flex flex-col md:flex-row">
        <div className="bg-blue-500 w-14">01</div>
        <div className="bg-red-500 w-64">02</div>
        <div className="bg-blue-500 w-32">03</div>
      </div>
      {/* case using flex-wrap */}
      <div className="flex flex-wrap gap-2">
        <div className="bg-blue-500 w-60 h-16 items-center justify-center">01</div>
        <div className="bg-red-500 w-60 h-16 items-center justify-center">02</div>
        <div className="bg-green-500 w-60 h-16 items-center justify-center">03</div>
        <div className="bg-yellow-500 w-60 h-16 items-center justify-center">04</div>
      </div>
    </div>
  );
}
