export const modules = {
    toolbar: [
      [
        { size: ["small", false, "large", "huge"] },
        { header: "1" },
        { header: "2" },
        { font: [] },
      ],
      [{ script: "sub" }, { script: "super" }], // Subscript/Superscript
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // Indent
      [{ bold: true }, { italic: true }, { underline: true }, { strike: true }],
      [{ color: [] }, { background: [] }], // Text color and background color
      [{ align: [] }], // Text alignment
      [{ direction: "rtl" }], // Text direction
  
      // Custom items:
      ["blockquote", "code-block"], // Block quote and code block
      ["image"], // Image upload
      ["clean"], // Clear formatting
    ],
};
  
export const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "direction",
    "align",
    "image",
];