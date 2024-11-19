"use client";

import { useCounterStore } from "@/store/counter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg"
        >
          증가
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg"
        >
          감소
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          초기화
        </button>
      </div>
    </div>
  );
}
