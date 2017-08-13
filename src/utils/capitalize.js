export default function capitalize(str) {
  if (!str) return null;

  return str.replace(/\w\S*/g,
    (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}