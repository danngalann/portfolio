export default function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
