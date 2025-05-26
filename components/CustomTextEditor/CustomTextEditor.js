"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

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
    <div className="space-y-2">
      {/* toolbar  */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`border p-2 ${
            editor.isActive("bold") ? "bg-primaryColor" : ""
          }`}
        >
          Bold
        </button>
      </div>

      {/* editor  */}

      <EditorContent
        editor={editor}
        className="prose dark:prose-invert border focus:outline-none focus:border-none focus:ring-0 bg-gray-100 p-3 rounded-md [&_.ProseMirror]:min-h-[150px] [&_.ProseMirror]:max-h-[300px] [&_.ProseMirror]:overflow-auto [&_.ProseMirror-focused]:outline-none
             [&_.ProseMirror-focused]:ring-0
             [&_.ProseMirror-focused]:border-none"
      />
    </div>
  );
};

export default CustomTextEditor;
