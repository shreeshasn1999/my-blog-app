/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import Tiptap from "./Tiptap";

export default function RTE({ name, label, control, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "string"}
        control={control}
        render={({ field: { onChange } }) => (
          <Tiptap defaultValue={defaultValue} onChange={onChange} />
        )}
      />
    </div>
  );
}
