import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function TinyEditor({ value, onChange }: Props) {
  const editorRef = useRef<any>(null);

  return (
    <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      value={value}
      onEditorChange={onChange}
      init={{
        height: 400,
        menubar: false,
        plugins: [
          "lists",
          "link",
          "image",
          "preview",
          "anchor",
          "code",
          "autolink",
          "visualblocks",
          "table",
        ],
        toolbar:
          // 👇 this order matters
          "undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image | preview code",
        style_formats: [
          { title: "Paragraph", format: "p" },
          { title: "Heading 1", format: "h1" },
          { title: "Heading 2", format: "h2" },
          { title: "Heading 3", format: "h3" },
        ],
        content_style: "body { font-family:Inter,sans-serif; font-size:14px }",
        image_caption: true,
        image_dimensions: true,
        automatic_uploads: false,
        file_picker_types: "image",
      }}
    />
  );
}
