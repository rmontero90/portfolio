export type Project = {
  title: string;
  type?: string;
  text?: string;
  description?: string;
  color?: string;
  tag?: string;
};

export function slugFromTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^[a-z0-9\s-]]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default Project;
