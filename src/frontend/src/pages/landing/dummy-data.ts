import { Feedback, Post, User } from "@/types/model";

export const dummyPosts: Post[] = [
  {
    email: "admission.caloocan@laverdad.edu.ph",
    name: "La Verdad Christian College, Inc. - Caloocan",
    avatarSource:
      "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/461924271_566194232644520_3597166314315883364_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQpmYeMvXyPt4ejVgl-0tA6NUyqkLlyuTo1TKqQuXK5CYPQXOXvcT_6ooQuEMnLHOrI-DF6tfyyeAr37Iyf7zT&_nc_ohc=qw6fFIIpGLYQ7kNvgG_3aAY&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=A_kTzIQNVqBsU_0LBQgmWaz&oh=00_AYAbZur3KVqE_10b4xHP4XgB-DoEQXWWzmPK5Qmy93z69g&oe=670FA7B9",
    postTitle: "STUDY NOW, PAY <strike>LATER</strike> NEVER",
    postThumbnailSource:
      "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/273036020_4892115524188494_2590197564223176883_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGrfJduGwytLu1qYLtPMUdvtKOtC7kfAJa0o60LuR8AlmpJ0hg5C808OpWbgYYHUEI00ZL-wJDpXoUr8P4w3Lce&_nc_ohc=NYwQUQVImbUQ7kNvgGplNr4&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=AvW0_V-F1K-DNP2nkseKsJD&oh=00_AYCs9vyTnP8L8Sz0G5m93emdH8YiwtLEYZhC6BZFm4dJSw&oe=670F8870",
    postDescription: `<h1>STUDY NOW, PAY NEVER!</h1><p>Quality Education for FREE!</p><p>La Verdad Christian College - Caloocan is NOW OPEN for Application for the FULL SCHOLARSHIP GRANT in College for Academic Year 2022-2023.</p><p>Please click the link for the admission details:</p><p><a href="https://tinyurl.com/OnlineApplicationAY2223?fbclid=IwZXh0bgNhZW0CMTAAAR08KuSH7XAX9r9sqnY4Un5CBIGMqKLCtA8roxtMGO1Kxo13_iQcI4eH90c_aem_53aenhiou2dhfT07tU4q1A" target="_blank" style="color: var(--blue-link);">https://tinyurl.com/OnlineApplicationAY2223</a></p>`,
    postRatingCount: 150,
    postBookmarkCount: 95,
    postCommentCount: 40,
    postType: "scholarship",
    postDate: "June 1, 2023",
  },
  {
    email: "admission.caloocan@laverdad.edu.ph",
    name: "La Verdad Christian College, Inc. - Caloocan",
    avatarSource:
      "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/461924271_566194232644520_3597166314315883364_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQpmYeMvXyPt4ejVgl-0tA6NUyqkLlyuTo1TKqQuXK5CYPQXOXvcT_6ooQuEMnLHOrI-DF6tfyyeAr37Iyf7zT&_nc_ohc=qw6fFIIpGLYQ7kNvgG_3aAY&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=A_kTzIQNVqBsU_0LBQgmWaz&oh=00_AYAbZur3KVqE_10b4xHP4XgB-DoEQXWWzmPK5Qmy93z69g&oe=670FA7B9",
    postTitle: "STUDY NOW, PAY <strike>LATER</strike> NEVER",
    postThumbnailSource:
      "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/273036020_4892115524188494_2590197564223176883_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGrfJduGwytLu1qYLtPMUdvtKOtC7kfAJa0o60LuR8AlmpJ0hg5C808OpWbgYYHUEI00ZL-wJDpXoUr8P4w3Lce&_nc_ohc=NYwQUQVImbUQ7kNvgGplNr4&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=AvW0_V-F1K-DNP2nkseKsJD&oh=00_AYCs9vyTnP8L8Sz0G5m93emdH8YiwtLEYZhC6BZFm4dJSw&oe=670F8870",
    postDescription: `<h2>Description</h2><p><span style="color: rgb(187, 187, 187);">The Future Leaders Scholarship is designed to support exceptional students who demonstrate outstanding leadership potential and a commitment to community service. This prestigious award covers full tuition and provides mentorship opportunities to help shape the next generation of visionary leaders.</span></p><p><br></p><h2>Eligibility</h2><ol><li><span style="color: rgb(187, 187, 187);">Minimum GPA of 3.5</span></li><li><span style="color: rgb(187, 187, 187);">Demonstrated leadership experience</span></li><li><span style="color: rgb(187, 187, 187);">Active community involvement</span></li><li><span style="color: rgb(187, 187, 187);">Incoming freshman or transfer student</span></li></ol><p><br></p><h2><span style="color: rgb(255, 255, 255);">Application Process</span></h2><ul><li><span style="color: rgb(187, 187, 187);">Complete online application form</span></li><li><span style="color: rgb(187, 187, 187);">Submit academic transcripts</span></li><li><span style="color: rgb(187, 187, 187);">Provide two letters of recommendations</span></li><li><span style="color: rgb(187, 187, 187);">Write a 500-word personal statement</span></li></ul>`,
    postRatingCount: 150,
    postBookmarkCount: 95,
    postCommentCount: 40,
    postType: "scholarship",
    postDate: "June 1, 2023",
  },
  {
    email: "info@laverdad.edu.ph",
    name: "La Verdad Christian College, Inc. - Apalit, Pampanga",
    avatarSource:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/461624352_509560758619382_8813051501729332811_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWq-cz_bLE0izRSpJd198AeVoW8zz7ZXt5WhbzPPtle2C6prcSTLd3ND27KFsKVjjUqffhuNqZ4xIpEXrBJn_7&_nc_ohc=6AWu5jpNDGYQ7kNvgFJ9ZQi&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=AxCU6R5kOk8aCfekgDjq66z&oh=00_AYDWiDYri00R4VHU6sWSxhUWZlsmHHjUZRrOSmHJvA3Zpg&oe=670FA3FC",
    postTitle: "STUDY NOW, PAY <s>LATER</s> NEVER",
    postThumbnailSource:
      "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-6/422929243_350086681233458_392159417334999887_n.jpg?stp=dst-jpg_s600x600&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG8LzcjVq-Vv9HMFROB1tvK9LuyAICIh8P0u7IAgIiHwwhbcqKHtqKNVTJxWbhZCyGje0avaYuR5zcZiTLEDYfO&_nc_ohc=t1Gk4iq8pH8Q7kNvgH4mIpi&_nc_zt=23&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=AHcH0u32gJMifhgfjUEnU0c&oh=00_AYAn4AesAQ5tAsmlHrcY3eun4vHAqC6Qk044nzSof-AnMw&oe=670FB558",
    postDescription: `<p>𝗔𝗡𝗡𝗢𝗨𝗡𝗖𝗘𝗠𝗘𝗡𝗧</p><p>Application for the LVCC FULL SCHOLARSHIP GRANT for Academic Year 2024-2025 is NOW OFFICIALLY OPEN from 𝗝𝗮𝗻𝘂𝗮𝗿𝘆 𝟮𝟱 𝘁𝗼 𝗙𝗲𝗯𝗿𝘂𝗮𝗿𝘆 𝟮𝟯, 𝟮𝟬𝟮𝟰.</p><p>Click the link below to access the 𝗢𝗡𝗟𝗜𝗡𝗘 𝗔𝗣𝗣𝗟𝗜𝗖𝗔𝗧𝗜𝗢𝗡 𝗣𝗢𝗥𝗧𝗔𝗟</p><p><a href="https://app.laverdad.edu.ph/?fbclid=IwZXh0bgNhZW0CMTAAAR08KuSH7XAX9r9sqnY4Un5CBIGMqKLCtA8roxtMGO1Kxo13_iQcI4eH90c_aem_53aenhiou2dhfT07tU4q1A" target="_blank" style="color: var(--blue-link);">https://app.laverdad.edu.ph/</a></p><p>To view a detailed step-by-step guide on how to use the ONLINE APPLICATION PORTAL, click here: <a href="https://drive.google.com/file/d/1519OQqfgFsMnup7Gol2bV97MntNPnfeB/view?usp=sharing&amp;fbclid=IwZXh0bgNhZW0CMTAAAR2jSii-UXyg0SpLs1lRhBIaby9EVBVvO1BRRGMp2MVS02jhCqQe7_7RKzw_aem_8jbssBcT3djgAlCjjOEU9A" target="_blank" style="color: var(--blue-link);">https://drive.google.com/.../1519OQqfgFsMnup7Gol2.../view...</a></p><p>𝑵𝑶𝑻𝑬: 𝑻𝒉𝒊𝒔 𝑺𝒄𝒉𝒐𝒍𝒂𝒓𝒔𝒉𝒊𝒑 𝒂𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒊𝒔 𝒊𝒏𝒕𝒆𝒏𝒅𝒆𝒅 𝒇𝒐𝒓 𝑭𝒂𝒄𝒆-𝒕𝒐-𝒇𝒂𝒄𝒆 𝒔𝒄𝒉𝒐𝒐𝒍𝒊𝒏𝒈 𝒐𝒏𝒍𝒚.</p>`,
    postRatingCount: 200,
    postBookmarkCount: 120,
    postCommentCount: 55,
    postType: "scholarship",
    postDate: "2023-06-01",

  },
  {
    email: "internships@creativeworks.com",
    name: "Internships Reactive",
    avatarSource: "https://via.placeholder.com/150",
    postTitle: "Creative Works Design Internship Blabla",
    postThumbnailSource: "https://via.placeholder.com/400x200",
    postDescription:
      "<p>Are you passionate about <strong>graphic design</strong> and <code>UX/UI</code>? Join <em>Creative Works</em> for a <a href='www.facebook.com' target='_blank'>6-month internship</a> where you'll work with top designers on real-world projects.</p> <p><strong>Perks:</strong> Remote work, mentorship, and a performance bonus!</p> <a href='https://creativeworks.com/internships' target='_blank'>Apply today</a>",
    postRatingCount: 180,
    postBookmarkCount: 105,
    postCommentCount: 38,
    postType: "internship",
    postDate: "2023-06-01",

  },{
    email: "internships@creativeworks.com",
    name: "IT Internships",
    avatarSource: "https://via.placeholder.com/150",
    postTitle: "Quick Strike Internship Now Open",
    postThumbnailSource: "https://via.placeholder.com/400x200",
    postDescription:
      `<p>Are you passionate about <strong>graphic design</strong> and <pre class="ql-syntax" spellcheck="false">UX/UI
</pre> Join <em>Creative Works</em> for a <a href='www.facebook.com' target='_blank'>6-month internship</a> where you'll work with top designers on real-world projects.</p> <p><strong>Perks:</strong> Remote work, mentorship, and a performance bonus!</p> <a href='https://creativeworks.com/internships' target='_blank'>Apply today</a>`,
    postRatingCount: 180,
    postBookmarkCount: 105,
    postCommentCount: 38,
    postType: "internship",
    postDate: "2023-06-01",

  },
];

export const dummyTopProviders = [
  {
    thumbnail:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/449449169_447660674809391_692585298774003021_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFJuJzTCK2Z3odEydsAr1rJYsTexpZPKg1ixN7Glk8qDUu7Q_JCZVw9d4nKgEdy7qKBB_sO2fVWhHEqMiOUNG6T&_nc_ohc=6XaoIN0GI9QQ7kNvgFOZeVG&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=ADYuKfczXQ9LMZkCMLdcZYi&oh=00_AYCeJ0aQh1azc6a-sLBpIsX9rmd4RsjmKNYQ5H9-BVKnww&oe=670F870B",
    avatar:
      "https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/461624352_509560758619382_8813051501729332811_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWq-cz_bLE0izRSpJd198AeVoW8zz7ZXt5WhbzPPtle2C6prcSTLd3ND27KFsKVjjUqffhuNqZ4xIpEXrBJn_7&_nc_ohc=6AWu5jpNDGYQ7kNvgFJ9ZQi&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&_nc_gid=AxCU6R5kOk8aCfekgDjq66z&oh=00_AYDWiDYri00R4VHU6sWSxhUWZlsmHHjUZRrOSmHJvA3Zpg&oe=670FA3FC",
    provider: "La Verdad Christian College, Inc. - Apalit, Pampanga",
    description: "Wisdom based on the truth is priceless.",
    scholarship: "Future Tech Leaders Scholarship 2024",
  },
  {
    thumbnail:
      "https://scontent.fcrk4-2.fna.fbcdn.net/v/t39.30808-6/462693785_572297352034208_4072350988270131867_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFxBIb5Ks6pVotefQzSmLg2vtFEeWRvEfG-0UR5ZG8R8UKS6JjidRPX9j7J9h9xwYhQdTNurlH26M6MCoMhw-9i&_nc_ohc=PHe0jc1YwpoQ7kNvgFGQUBI&_nc_zt=23&_nc_ht=scontent.fcrk4-2.fna&_nc_gid=AsqXPYjBH7H6yMKrcvnDH9x&oh=00_AYDyB5P75ExnxfKLuvVtJztyx3M2aJTRK343Pl9kJny8Og&oe=670FADBD",
    avatar:
      "https://scontent.fcrk2-1.fna.fbcdn.net/v/t39.30808-6/461924271_566194232644520_3597166314315883364_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQpmYeMvXyPt4ejVgl-0tA6NUyqkLlyuTo1TKqQuXK5CYPQXOXvcT_6ooQuEMnLHOrI-DF6tfyyeAr37Iyf7zT&_nc_ohc=qw6fFIIpGLYQ7kNvgG_3aAY&_nc_zt=23&_nc_ht=scontent.fcrk2-1.fna&_nc_gid=A_kTzIQNVqBsU_0LBQgmWaz&oh=00_AYAbZur3KVqE_10b4xHP4XgB-DoEQXWWzmPK5Qmy93z69g&oe=670FA7B9",
    provider: "La Verdad Christian College, Inc. - Caloocan",
    description: "Wisdom based on the truth is priceless.",
    scholarship: "Future Tech Leaders Scholarship 2024",
  },
  {
    thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+3",
    avatar:
      "https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/452912470_2526121527595306_3752199441102383149_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtCgs-XyXL89ENkqy7JG3peWlRnJXahMF5aVGcldqEwU1hJd6qhyhKUGWsK52KiDE16tK8oTnAWiBcfTghtwJt&_nc_ohc=0aFGsrCXi6EQ7kNvgGeDTFV&_nc_zt=23&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=ANu0xv9z85XR0ENGh62yylc&oh=00_AYBGZKYtxIFtM7UfMbbYyIGbDTDRHZIUjJCb0LPeVAY0kg&oe=670F8366",
    provider: "Johnmack Faeldonia",
    description: "Shori, bosh",
    scholarship: "STEM Leaders Scholarship 2024",
  },
  // {
  //   thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+4",
  //   avatar: "https://via.placeholder.com/150?text=Org+4",
  //   provider: "Innovation for All",
  //   description: "Creating equal opportunities for future innovators",
  //   scholarship: "Inclusive Innovation Scholarship 2024",
  // },
  // {
  //   thumbnail: "https://via.placeholder.com/400x200?text=Scholarship+5",
  //   avatar: "https://via.placeholder.com/150?text=Org+5",
  //   provider: "NextGen Tech Alliance",
  //   description: "Fostering next-gen leaders in technology",
  //   scholarship: "NextGen Tech Scholarship 2024",
  // },
];

export const dummyUsers: User[] = [
  {
    id: "1",
    email: "johndoe@example.com",
    name: "Johnmack Faeldonia",
    organizationName: "Doe Enterprises",
    bio: "A passionate entrepreneur.",
    avatarUrl: "https://scontent.fbag4-1.fna.fbcdn.net/v/t39.30808-6/452912470_2526121527595306_3752199441102383149_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEtCgs-XyXL89ENkqy7JG3peWlRnJXahMF5aVGcldqEwU1hJd6qhyhKUGWsK52KiDE16tK8oTnAWiBcfTghtwJt&_nc_ohc=nyj-K21CRl8Q7kNvgGHFtoL&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=AxNTWZFhCZdA3OBSWam6QD_&oh=00_AYAWq-elKA1RxTQIYt2OvUbsNU1BC78UgYAoOUl34JTN_w&oe=67110D26",
    contactNumber: "+1234567890",
    validIdUrl: "https://example.com/valid-id.jpg",
    createdAt: "2024-01-01T12:00:00Z",
    updatedAt: "2024-09-01T12:00:00Z",
  },
  {
    id: "2",
    email: "janesmith@example.com",
    name: "Kurtd Daniel Bigtas",
    organizationName: "Kurtd Daniel Bigtas",
    bio: "Tech enthusiast and problem solver.",
    avatarUrl: "https://scontent.fbag4-1.fna.fbcdn.net/v/t39.30808-6/440166746_25371551272492353_7022797428020999409_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE6YN-LerRQeT9r5QJmhKUTkjRxWwzQgW6SNHFbDNCBbs5Je_9d1VcuTlg6UQQz3Y7v3pPfWBH0ypDLTs6CYgp8&_nc_ohc=r6D8cy67UfcQ7kNvgHXnr5G&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=AB8ID44fIEKmsB3Fz3ePKgZ&oh=00_AYCaMhckXWRn1M8-5O8w3C2a2YHpIS6RPT9NDX-Vioj2BQ&oe=67112F0E",
    contactNumber: "+0987654321",
    validIdUrl: "https://example.com/valid-id.jpg",
    createdAt: "2024-02-15T12:00:00Z",
    updatedAt: "2024-09-15T12:00:00Z",
  },
  {
    id: "3",
    email: "markjohnson@example.com",
    name: "Raven Dela Rama",
    organizationName: "Raven Dela Rama",
    bio: "Engineer with a love for innovation.",
    avatarUrl: "https://scontent.fbag4-1.fna.fbcdn.net/v/t39.30808-6/426374110_1461399794737580_3493421727438730561_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG9CBl1CqqaysKmfa6Q1t41kvXsYt-w-BGS9exi37D4EQcfhgWDIP0v6PcSANmUDTBvyfEdpSRVUEwyDiPGs8lH&_nc_ohc=8GRGIgrNZvsQ7kNvgG76yxA&_nc_zt=23&_nc_ht=scontent.fbag4-1.fna&_nc_gid=AKkQ6BfwYojQzKQoBuvWwyn&oh=00_AYAZoEiv9RwDLuhvN9czH1vBhQA6PuZ-kSwV0YpqjIL0-A&oe=67111CC2",
    contactNumber: "+1122334455",
    validIdUrl: "https://example.com/valid-id.jpg",
    createdAt: "2024-03-20T12:00:00Z",
    updatedAt: "2024-09-20T12:00:00Z",
  },
];

export const dummyFeedbacks: Feedback[] = [
  {
    id: "101",
    userId: dummyUsers[0].id,
    rating: 5,
    comment: "Excellent experience! Everything was smooth and professional.",
    createdAt: "2024-10-10T15:30:00Z",
    updatedAt: "2024-10-10T15:30:00Z",
  },
  {
    id: "102",
    userId: dummyUsers[1].id,
    rating: 4,
    comment: "Good service overall, but there is room for improvement.",
    createdAt: "2024-10-11T14:20:00Z",
    updatedAt: "2024-10-11T14:20:00Z",
  },
  {
    id: "103",
    userId: dummyUsers[2].id,
    rating: 3,
    comment: "Average experience. Some aspects could have been better.",
    createdAt: "2024-10-13T05:13:00Z",
    updatedAt: "2024-10-13T05:13:00Z",
  },
];
