"use client";

import BulletList from "@tiptap/extension-bullet-list";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextUnderlineIcon } from "hugeicons-react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
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
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4, 5, 6] } }),
      Underline,
      Link.configure({ openOnClick: false }),
      Image,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      BulletList,
      ListItem,
      OrderedList,
    ],
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

        {/* divider  */}
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
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive("underline")
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <TextUnderlineIcon size={16} className="" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive("strike")
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <Strikethrough size={16} className="" />
        </button>

        {/* divider  */}
        <div className="border-l h-5"></div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive("bulletList")
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <List size={16} className="" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive("orderedList")
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <ListOrdered size={16} className="" />
        </button>

        {/* divider  */}
        <div className="border-l h-5"></div>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive({ textAlign: "left" })
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <AlignLeft size={16} className="" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive({ textAlign: "center" })
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <AlignCenter size={16} className="" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive({ textAlign: "right" })
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <AlignRight size={16} className="" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={` p-1.5 rounded-md  ${
            editor.isActive({ textAlign: "justify" })
              ? "bg-primaryColor text-gray-50"
              : "hover:bg-gray-100 text-headerColor"
          }`}
        >
          <AlignJustify size={16} className="" />
        </button>

        {/* divider  */}
        <div className="border-l h-5"></div>
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
