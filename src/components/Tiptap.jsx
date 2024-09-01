/* eslint-disable react/prop-types */
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./Menubar";

function Tiptap({ defaultValue, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: defaultValue,
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] border-input bg-back ring-offset-2 disabled: cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  return (
    <div className="flex flex-col bg-white justify-stretch min-h-[250px]">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default Tiptap;
