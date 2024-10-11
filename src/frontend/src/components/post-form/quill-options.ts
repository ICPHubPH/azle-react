
interface Mention {
  id: string;
  name: string;
  image: string;
  email: string;
}

export const modules = {
    toolbar: [
      [
        { size: ["small", false, "large", "huge"] },
        { header: ["1", "2", "3", "4", "5", "6"] },
        { font: [] },
      ],
      // [{ script: "sub" }, { script: "super" }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ bold: true }, { italic: true }, { underline: true }, { strike: true }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ direction: "rtl" }], // Text direction
  
      // Custom items:
      ["blockquote", "code-block"], // Block quote and code block
    ["image"], // Image upload
      ["video"],
      ["clean"], // Clear formatting
    ],
  // mention: {
  //   allowedChars: /^[A-Za-z\s\-\_\.]$/,
  //   mentionDenotationChars: ["@"],
  //     source: (searchTerm: string, renderList: (matches: Mention[]) => void) => {
  //       const mentions: Mention[] = [
  //         {
  //           id: "1",
  //           name: "CHED",
  //           email: "ched@edu.ph",
  //           image: ""
  //         }
  //       ];
  //       const matches = mentions.filter((mention) =>
  //         mention.name.toLowerCase().includes(searchTerm.toLowerCase())
  //         // await axios.get('url');
  //       );
  //       renderList(matches);
  //   },
  //     mentionItemTemplate: (item: Mention) => {
  //       return `<div className="text-md font-semibold text-blue-600">${item.name}</div>`;
  //     },
  //   }
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
    // "script",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "direction",
    "align",
  "image",
    "video"
];