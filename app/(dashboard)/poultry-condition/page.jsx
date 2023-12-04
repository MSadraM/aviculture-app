import React from "react";

export default function page() {
  const data = [
    { id: 1, name: "مرغ 1", age: 2, weight: 1.5 },
    { id: 2, name: "مرغ 2", age: 3, weight: 2.0 },
    { id: 3, name: "مرغ 3", age: 1, weight: 1.2 },
  ];

  return (
    <div className="flex flex-col justify-start items-start gap-y-8">
      <h1 className="text-3xl font-bold text-gray-800">اطلاعات طیور</h1>
      <div className="overflow-hidden  rounded-xl w-full">
        <table className="min-w-full bg-white w-full">
          <thead>
            <tr>
              <th className="py-4 px-4 border-b text-gray-500 font-light">نام</th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">سن</th>
              <th className="py-4 px-4 border-b text-gray-500 font-light">وزن</th>
              {/* سایر ستون‌ها */}
            </tr>
          </thead>
          <tbody>
            {data.map((chicken) => (
              <tr key={chicken.id}>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.name}
                </td>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.age}
                </td>
                <td className="py-4 px-4 border-b text-center text-gray-800">
                  {chicken.weight}
                </td>
                {/* سایر ستون‌ها */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
