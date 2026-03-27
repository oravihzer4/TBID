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
  MY5: "תכנון ועיצוב פנים פנטהאוז דופלקס בנווה צדק - שיפוץ מהיסוד",
  G23: "תכנון ועיצוב פנים פנטהאוז בפתח תקווה - תהליך שינויי דיירים ושיפוץ לאחר קבלת מפתח",
  S30: "תכנון ועיצוב בית פרטי בנס ציונה - תהליך בניה פרטית משלב ההיתרים",
  SA16: "תכנון ועיצוב פנים פנטהאוז בקריית אונו - תהליך שינויי דיירים ושיפוץ לאחר קבלת מפתח",
  T15: "תכנון ועיצוב פנים פנטהאוז בנווה מונוסון - תהליך שינויי דיירים ושיפוץ לאחר קבלת מפתח",
  YN3: "תכנון ועיצוב פנים פנטהאוז בקריית אונו - שיפוץ מלא",
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
  return {
    id: index + 1,
    year: "2024",
    name: folderName,
    type: "Interior Design",
    location: cityCode || zone,
    description: projectDescriptions[projectCode] || `Project ${folderName}`,
    gallery,
  };
});
