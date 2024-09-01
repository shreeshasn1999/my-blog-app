/* eslint-disable react/prop-types */
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";

import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Heading2,
  Quote,
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div>
      {/* Bold Toggle */}
      <Toggle
        pressed={editor.isActive("bold")}
        onPressedChange={() => {
          console.log("Toggled");
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold />
      </Toggle>

      {/* Italic Toggle */}
      <Toggle
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic />
      </Toggle>

      {/* Strikethrough Toggle */}
      <Toggle
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough />
      </Toggle>

      {/* Heading Toggle */}
      <Toggle
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 />
      </Toggle>

      {/* Bullet List Toggle */}
      <Toggle
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List />
      </Toggle>

      {/* Ordered List Toggle */}
      <Toggle
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
        // onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered />
      </Toggle>

      {/* Blockquote Toggle */}
      <Toggle
        pressed={editor.isActive("blockquote")}
        onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
      >
        <Quote />
      </Toggle>
    </div>
  );
}

function TestPage() {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: "Hello",
    editorProps: {
      attributes: {
        class:
          "rounded-md border min-h-[150px] border-input bg-back ring-offset-2 disabled: cursor-not-allowed disabled:opacity-50",
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default TestPage;
