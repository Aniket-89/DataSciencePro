import { Editor } from "@tinymce/tinymce-react";
// import { useRef } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function TinyEditor({ value, onChange }: Props) {
  // const editorRef = useRef<any>(null);
  const template = `
    <h2>Overview</h2>
    <p>Write an overview here...</p>

    <h2>Executive Summary</h2>
    <p>Write the executive summary here...</p>

    <h2>Drivers, Restraints, Opportunities & Challenges</h2>
    <h3>Drivers:</h3>
    <ul>
      <li>Example driver 1</li>
      <li>Example driver 2</li>
    </ul>

    <h3>Restraints:</h3>
    <ul>
      <li>Example restraint 1</li>
    </ul>

    <h2>Segmentation</h2>
    <p><strong>Product Types:</strong> </p>
    <ul>
      <li>Product A</li>
      <li>Product B</li>
    </ul>

    <h2>Key Players</h2>
    <ul>
      <li>Company A</li>
      <li>Company B</li>
    </ul>
    <h2>Recent Development</h2>
    <ul>
      <li><strong>XX:</strong> ...</li>
    </ul>
    <h2>Regional Outlook</h2>
    <p>Write regional analysis here...</p>
  `;

  return (
    <Editor
      apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
      initialValue={template}
      value={value}
      onEditorChange={onChange}
      init={{
        height: 700,
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
