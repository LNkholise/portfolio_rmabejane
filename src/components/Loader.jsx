import { Loader2 } from "lucide-react";

export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-[#fdf9f0]">
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-gray-700" />
        <p className="text-sm font-medium text-gray-600">Loading, please wait...</p>
      </div>
    </div>
  );
}
