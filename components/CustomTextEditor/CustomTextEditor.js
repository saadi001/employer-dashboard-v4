"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Italic } from "lucide-react";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CustomTextEditor = ({ value }) => {
  const onChange = (value) => {
    console.log(value);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: value || "<p></p>",
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "<p></p>");
    }
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="space-y-1 border rounded-md overflow-hidden">
      {/* toolbar  */}
      <div className="flex items-center gap-2 p-2">
        {/* dropdown headers */}
        <Select defaultValue="paragraph">
          <SelectTrigger
            className={
              "w-32 !h-9  rounded-lg text-sm hover:outline-1 focus:!ring-0 "
            }
          >
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent className={""}>
            <SelectItem value={"paragraph"}>Paragraph</SelectItem>
            <SelectItem
              value={"heading1"}
              className={"text-2xl font-semibold h-8"}
            >
              Heading 1
            </SelectItem>
            <SelectItem
              value={"heading2"}
              className={"text-xl font-semibold h-8"}
            >
              Heading 2
            </SelectItem>
            <SelectItem
              value={"heading3"}
              className={"text-lg font-semibold h-8"}
            >
              Heading 3
            </SelectItem>
            <SelectItem
              value={"heading4"}
              className={"text-base font-semibold h-8"}
            >
              Heading 4
            </SelectItem>
            <SelectItem
              value={"heading5"}
              className={"text-sm font-semibold h-8"}
            >
              Heading 5
            </SelectItem>
            <SelectItem
              value={"heading6"}
              className={"text-xs font-semibold h-8"}
            >
              Heading 6
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="border-l h-5"></div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive("bold")
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <Bold size={16} className="" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive("italic")
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <Italic size={16} className="" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive("italic")
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <Italic size={16} className="" />
        </button>
      </div>

      {/* editor  */}

      <EditorContent
        editor={editor}
        className="prose dark:prose-invert border-t focus:outline-none focus:border-none focus:ring-0 bg-gray-100 px-3 py-2  [&_.ProseMirror]:min-h-[150px] [&_.ProseMirror]:max-h-[300px] [&_.ProseMirror]:overflow-auto [&_.ProseMirror-focused]:outline-none [&_.ProseMirror-focused]:ring-0 [&_.ProseMirror-focused]:border-none"
      />
    </div>
  );
};

export default CustomTextEditor;
