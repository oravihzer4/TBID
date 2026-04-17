const projectImageModules = import.meta.glob("../media/projectsmedia/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});

const projectFolders = Object.entries(projectImageModules).reduce((acc, [path, src]) => {
  const folderName = path.split("/").at(-2);
  if (!acc[folderName]) acc[folderName] = [];
  acc[folderName].push({ path, src });
  return acc;
}, {});

const sortedFolderNames = Object.keys(projectFolders).sort();

const projectDescriptions = {
  MY5: "פנטהאוז דופלקס - נווה צדק",
  G23: "פנטהאוז בפתח תקווה",
  S30: "בית פרטי בנס ציונה",
  SA16: "פנטהאוז בקריית אונו",
  T15: "פנטהאוז בנווה מונוסון",
  YN3: "פנטהאוז בקריית אונו",
};

const projectDetailsByCode = {
  MY5: { location: "TLV", year: "2021-2022" },
  G23: { location: "Petah Tikva", year: "2021-2023" },
  T15: { location: "Neve Monoson", year: "2022-2024" },
  SA16: { location: "Kiryat Ono", year: "2022-2024" },
  S30: { location: "Ness Ziona", year: "2022-2025" },
  YN3: { location: "Kiryat Ono", year: "2024-2025" },
};

const sortGalleryImages = (a, b) => {
  const aName = a.path.split("/").at(-1).toLowerCase();
  const bName = b.path.split("/").at(-1).toLowerCase();
  const aIsCover = aName.includes("מאסטר") || aName.includes("master");
  const bIsCover = bName.includes("מאסטר") || bName.includes("master");
  if (aIsCover && !bIsCover) return -1;
  if (!aIsCover && bIsCover) return 1;
  return aName.localeCompare(bName);
};

export const projects = sortedFolderNames.map((folderName, index) => {
  const gallery = projectFolders[folderName].sort(sortGalleryImages).map((img) => img.src);
  const [zone = "", cityCode = ""] = folderName.split("_");
  const projectCode = zone.replace(/[^A-Za-z0-9]/g, "").toUpperCase();
  const projectDetails = projectDetailsByCode[projectCode];
  return {
    id: index + 1,
    year: projectDetails?.year || "2024",
    name: folderName,
    type: "Interior Design",
    location: projectDetails?.location || cityCode || zone,
    description: projectDescriptions[projectCode] || `Project ${folderName}`,
    gallery,
  };
});
