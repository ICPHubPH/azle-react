// interface Mention {
//   id: string;
//   name: string;
//   image: string;
//   email: string;
// }
export const modules = {
    toolbar: [
        // [
        //   { size: ["small", false, "large", "huge"] },
        //   { font: [] },
        // ],
        [{ header: "1" }, { header: "2" }],
        // [{ script: "sub" }, { script: "super" }],
        [{ bold: true }, { italic: true }, { underline: true }, { strike: true }, "clean"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ color: [] }, { background: [] }],
        ["blockquote", "code-block"],
        // [{ direction: "rtl" }], // Text direction
        // Custom items:
        ["link", "image", "video"], // Block quote and code block
        // ["image"], // Image upload
        //   ["video"],
        //   ["clean"], // Clear formatting
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
    "code",
    "list",
    "bullet",
    "indent",
    "direction",
    "align",
    "image",
    "video",
    "link"
];
